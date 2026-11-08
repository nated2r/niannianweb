/* ==========================================================================
   黏黏麻開團：商品列表、商品詳情、購物車、訂單送 LINE
   資料來源：products.js
   ========================================================================== */
(function () {
  'use strict';

  const PRODUCTS = window.NIAN_PRODUCTS || [];
  const CATS = window.NIAN_CATEGORIES || { groups: [], subs: [] };
  const CHECKOUT = window.NIAN_CHECKOUT || {};
  const STORAGE_KEY = 'nian_cart_v3';
  const COUPON_KEY = 'nian_coupon_v1';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const money = (n) => '$' + Number(n).toLocaleString('en-US');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------- 購物車狀態（entry: {id, variant, units}）
     同一個商品不論香味，總數量合併計價（例如 2 瓶不同香味，仍享「2 瓶」方案價） ---------- */
  let cart = [];
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) {
      cart = saved.filter((e) => {
        const p = findProduct(e.id);
        return p && e.units > 0 && (!p.variants || p.variants.indexOf(e.variant) >= 0);
      });
    }
  } catch (err) { cart = []; }

  /* 加價購商品：購物車裡沒有搭配的主商品時，自動移除，避免單買 */
  const requirementMet = (p) => !p.requires || cart.some((e) => p.requires.indexOf(e.id) >= 0);
  function pruneCart() {
    const before = cart.length;
    cart = cart.filter((e) => requirementMet(findProduct(e.id)));
    if (cart.length !== before) toast('加價購商品已移除，因為購物車裡沒有搭配的主商品 🐾');
  }

  function saveCart() {
    pruneCart();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) { /* 忽略 */ }
  }

  /* ---------- 折扣碼領取狀態（領取後顯示折扣價，未領取顯示原價） ---------- */
  let couponClaimed = false;
  try { couponClaimed = localStorage.getItem(COUPON_KEY) === '1'; } catch (e) { couponClaimed = false; }

  const hasCoupon = (pl) => couponClaimed && typeof pl.couponPrice === 'number' && pl.couponPrice < (pl.price || Infinity);
  const priceOf = (pl) => (pl.couponOnly || hasCoupon(pl) ? pl.couponPrice : pl.price);
  const visiblePlans = (p) => p.plans.map((pl, i) => ({ pl, i })).filter((x) => (couponClaimed ? !x.pl.couponHidden : !x.pl.couponOnly)).sort((a, b) => a.pl.qty - b.pl.qty);
  const priceHtml = (pl) => (pl.couponOnly ? `<span class="price-now">${money(pl.couponPrice)}</span>` : hasCoupon(pl)
    ? `<s class="price-old">${money(pl.price)}</s> <span class="price-now">${money(pl.couponPrice)}</span>`
    : money(pl.price));

  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  /* 商品的最小購買單位（例如只賣 2 管、4 管…，每次加減就是 2） */
  const stepOf = (p) => p.plans.reduce((g, pl) => gcd(g, pl.qty), 0) || 1;

  /* 組合最優惠：把 units 個商品拆成方案組合（例如 2 包就用「2 包」方案價），取總價最低的湊法 */
  function plansFor(p, coupon) {
    return p.plans
      .filter((pl) => (coupon ? !pl.couponHidden : !pl.couponOnly))
      .map((pl) => ({
        label: pl.label,
        qty: pl.qty,
        price: coupon && typeof pl.couponPrice === 'number' ? pl.couponPrice : pl.price
      }))
      .filter((x) => typeof x.price === 'number');
  }

  function bestCost(p, units, coupon) {
    const plans = plansFor(p, coupon);
    const cost = [0];
    const pick = [null];
    for (let n = 1; n <= units; n++) {
      cost[n] = Infinity;
      plans.forEach((pl) => {
        if (pl.qty <= n && cost[n - pl.qty] + pl.price < cost[n]) {
          cost[n] = cost[n - pl.qty] + pl.price;
          pick[n] = pl;
        }
      });
    }
    // 湊不出來的數量（例如商品只賣 2 管一組，卻有 1 管）：改用最便宜的單價估算，避免出錯
    if (!isFinite(cost[units])) {
      const unit = Math.min.apply(null, plans.map((pl) => pl.price / pl.qty));
      return { total: Math.ceil(unit * units), combo: [] };
    }
    const combo = {};
    for (let n = units; n > 0; n -= pick[n].qty) {
      const k = pick[n].label;
      combo[k] = combo[k] ? { pl: pick[n], count: combo[k].count + 1 } : { pl: pick[n], count: 1 };
    }
    return { total: cost[units], combo: Object.values(combo) };
  }

  const comboText = (p, c) => c.combo
    .map((x) => `${x.pl.label}${x.count > 1 ? ' × ' + x.count : ''}`)
    .join(' ＋ ');

  const cartIds = () => Array.from(new Set(cart.map((e) => e.id)));
  const groupUnits = (id) => cart.filter((e) => e.id === id).reduce((s, e) => s + e.units, 0);
  const groupTotal = (id) => bestCost(findProduct(id), groupUnits(id), couponClaimed).total;
  const groupOriginal = (id) => bestCost(findProduct(id), groupUnits(id), false).total;
  const cartTotal = () => cartIds().reduce((s, id) => s + groupTotal(id), 0);
  const cartCount = () => cart.reduce((s, e) => s + e.units, 0);

  /* ---------- Toast ---------- */
  function toast(text) {
    const el = document.getElementById('toastMessage');
    if (!el) return;
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2800);
  }

  /* ---------- 商品列表 ---------- */
  /* 目前選擇的分類：大分類（all／pet／human）與子分類（all／eat／use／apply） */
  let filterGroup = 'all';
  let filterSub = 'all';

  function cardHtml(p) {
    const min = Math.min.apply(null, visiblePlans(p).map((x) => priceOf(x.pl) / x.pl.qty));
    const anyDisc = couponClaimed && p.plans.some((pl) => typeof pl.couponPrice === 'number');
    return `
        <article class="product-card">
          <button type="button" class="product-image-link" data-open="${p.id}" aria-label="查看 ${esc(p.name)}">
            <img src="${p.image}" alt="${esc(p.name)}" class="product-img" loading="lazy">
            <span class="product-badge-flag${p.hot ? ' hot-flag' : ''}">${esc(p.flag)}</span>
          </button>
          <div class="product-info">
            <span class="product-kind">${esc(p.kind || '')}</span>
            <div class="product-sub-brand">${esc(p.brand)}</div>
            <h3 class="product-name"><button type="button" class="product-name-btn" data-open="${p.id}">${esc(p.name)}</button></h3>
            <p class="product-intro">${esc(p.intro)}</p>
            <div class="product-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
            <div class="product-price${anyDisc ? ' is-coupon' : ''}">${money(Math.round(min))}<small> 起／${esc(p.unit)}${anyDisc ? '・折扣價' : ''}</small></div>
          </div>
          <button type="button" class="product-action-btn" data-open="${p.id}"><span>選購商品</span></button>
        </article>`;
  }

  const groupOf = (p) => p.group || 'pet';
  const inGroup = (p) => filterGroup === 'all' || groupOf(p) === filterGroup;

  function renderFilter() {
    const box = document.getElementById('shopFilter');
    if (!box) return;
    const groupTabs = [{ key: 'all', title: '全部', icon: '🛍️' }].concat(CATS.groups).map((g) =>
      `<button type="button" class="filter-tab${g.key === filterGroup ? ' active' : ''}" data-fg="${g.key}">${g.icon || ''} ${esc(g.title)}</button>`).join('');
    // 子分類跟著大分類走：選了「毛孩好物」或「麻麻專屬」才出現，只列出真的有商品的項目
    const cur = CATS.groups.find((g) => g.key === filterGroup);
    const subs = cur ? (cur.subs || []).filter((s) => PRODUCTS.some((p) => groupOf(p) === cur.key && p.sub === s.key)) : [];
    const subChips = subs.length > 0
      ? [{ key: 'all', title: '全部', icon: '' }].concat(subs).map((s) =>
        `<button type="button" class="filter-chip${s.key === filterSub ? ' active' : ''}" data-fs="${s.key}">${s.icon || ''} ${esc(s.title)}</button>`).join('')
      : '';
    box.innerHTML = `<div class="filter-row filter-main">${groupTabs}</div>${subChips ? `<div class="filter-row filter-sub">${subChips}</div>` : ''}`;
  }

  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const html = CATS.groups.map((g) => {
      if (filterGroup !== 'all' && filterGroup !== g.key) return '';
      const items = PRODUCTS.filter((p) => groupOf(p) === g.key && (filterSub === 'all' || p.sub === filterSub));
      if (!items.length) return '';
      return `<div class="group-title"><span>${g.icon || ''} ${esc(g.title)}</span><small>${esc(g.sub || '')}</small></div>` + items.map(cardHtml).join('');
    }).join('');
    grid.innerHTML = html || '<p class="no-products">這個分類還沒有商品，換個分類看看吧 🐾</p>';
  }

  const shopViewEl = document.getElementById('shopView');

  /* 選了「毛孩好物／麻麻專屬」就進入分類頁：隱藏活動海報、折扣碼等上方內容，直接看商品；
     選「全部」回到開團專區首頁。 */
  function applyFilter(group, sub, opts) {
    const o = opts || {};
    const wasCat = filterGroup !== 'all';
    filterGroup = group;
    filterSub = sub;
    if (group === 'all' || (sub !== 'all' && !PRODUCTS.some((p) => groupOf(p) === group && p.sub === sub))) filterSub = 'all';
    if (shopViewEl) shopViewEl.classList.toggle('cat-mode', group !== 'all');
    renderFilter();
    renderProducts();
    syncBackLabels();
    if (o.push) {
      const hash = group === 'all' ? '#shop' : '#shop-' + group;
      if (wasCat && group !== 'all') history.replaceState({ view: 'shop' }, '', hash);
      else if (window.location.hash !== hash) history.pushState({ view: 'shop' }, '', hash);
    }
    if (o.scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* 分類頁裡的「返回」先回到開團專區首頁，不是直接回網站首頁 */
  function syncBackLabels() {
    const inCat = filterGroup !== 'all';
    const top = document.querySelector('#backHomeBtn span');
    const bottom = document.getElementById('bottomBackHomeBtn');
    if (top) top.textContent = inCat ? '返回開團專區' : '返回首頁';
    if (bottom) bottom.textContent = inCat ? '← 返回開團專區' : '← 返回黏黏首頁';
  }

  ['backHomeBtn', 'bottomBackHomeBtn'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', (e) => {
      if (filterGroup === 'all') return;
      e.preventDefault();
      e.stopImmediatePropagation();
      applyFilter('all', 'all', { push: true, scroll: true });
    }, true);
  });

  /* 瀏覽器上一頁／下一頁，或直接開 #shop-pet、#shop-human 連結 */
  function applyHash() {
    const h = window.location.hash;
    if (h.indexOf('#shop') !== 0) return;
    const g = h.replace('#shop-', '');
    const known = CATS.groups.some((x) => x.key === g);
    applyFilter(known ? g : 'all', 'all', { push: false });
  }
  window.addEventListener('popstate', applyHash);

  /* ---------- 商品詳情（底部彈出） ---------- */
  const sheet = document.getElementById('productSheet');
  const sheetBody = document.getElementById('productSheetBody');
  let currentProduct = null;
  let currentPlan = 0;
  let picks = {}; // 有多種香味/款式的商品：{ 款式名稱: 數量 }

  function resetPicks() {
    picks = {};
    const p = currentProduct;
    if (p && p.variants) {
      p.variants.forEach((v) => { picks[v] = 0; });
      picks[p.variants[0]] = p.plans[currentPlan].qty;
    }
  }
  const pickedTotal = () => Object.keys(picks).reduce((s, k) => s + picks[k], 0);

  function detailHtml(d) {
    let inner = '';
    if (d.rows) {
      inner = `<dl class="spec-list">${d.rows.map((r) => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl>`;
    } else if (d.text) {
      inner = `<p class="spec-text">${esc(d.text)}</p>`;
    }
    return `<details class="spec-block"><summary>${esc(d.title)}</summary>${inner}</details>`;
  }

  function renderSheet() {
    const p = currentProduct;
    if (!p) return;
    sheetBody.innerHTML = `
      <div class="sheet-img-wrap"><img src="${p.image}" alt="${esc(p.name)}"></div>
      <div class="sheet-main">
        <span class="product-kind">${esc(p.kind || '')}</span>
        <div class="product-sub-brand">${esc(p.brand)}</div>
        <h3 class="sheet-title">${esc(p.fullName)}</h3>
        <p class="sheet-intro">${esc(p.intro)}</p>
        ${p.descImages && p.descImages.length ? `
        <div class="desc-section">
          <div class="sheet-label">📖 商品介紹</div>
          <div class="desc-images">${p.descImages.map((src) =>
            `<img src="${src}" alt="${esc(p.name)} 商品介紹" loading="lazy" decoding="async" referrerpolicy="no-referrer">`).join('')}</div>
        </div>` : ''}
        <div id="planArea"></div>
        <div class="spec-wrap">${p.details.map(detailHtml).join('')}</div>
      </div>
      <div class="sheet-sticky" id="sheetSticky"><button type="button" id="jumpPlanBtn">選擇方案・看價格 ↓</button></div>`;
    renderPlanArea();
    watchPlanArea();
  }

  function renderPlanArea() {
    const area = document.getElementById('planArea');
    const p = currentProduct;
    if (!area || !p) return;
    const vis = visiblePlans(p);
    if (!vis.some((x) => x.i === currentPlan)) currentPlan = vis[0].i;
    const plan = p.plans[currentPlan];
    const needPick = p.variants && pickedTotal() !== plan.qty;
    const needMain = !requirementMet(p);
    const blocked = needPick || needMain;
    const blockedText = needMain ? '請先加入搭配的主商品' : (needPick ? `請先選滿 ${plan.qty} ${esc(p.unit)}` : '');
    area.innerHTML = `
      <div class="sheet-label">選擇方案（含運費）</div>
      <div class="plan-list" role="radiogroup">
        ${vis.map(({ pl, i }) => `
          <button type="button" class="plan-chip${i === currentPlan ? ' selected' : ''}" role="radio" aria-checked="${i === currentPlan}" data-plan="${i}">
            <span class="plan-name">${esc(pl.label)}</span>
            <span class="plan-price">${priceHtml(pl)}</span>
            ${pl.qty > 1 ? `<span class="plan-avg">平均 ${money(Math.ceil(priceOf(pl) / pl.qty))}／${esc(p.unit)}</span>` : ''}
          </button>`).join('')}
      </div>
      ${p.variants ? `
      <div class="sheet-label">選擇${esc(p.variantLabel || '款式')}（共 ${plan.qty} ${esc(p.unit)}，可混搭）<span class="pick-count${pickedTotal() === plan.qty ? ' ok' : ''}">已選 ${pickedTotal()} / ${plan.qty}</span></div>
      <div class="variant-list">
        ${p.variants.map((v, vi) => `
          <div class="variant-row">
            <span class="variant-name">${esc(v)}</span>
            <div class="qty-stepper">
              <button type="button" data-vdec="${vi}" aria-label="減少">－</button>
              <span>${picks[v] || 0}</span>
              <button type="button" data-vinc="${vi}" aria-label="增加">＋</button>
            </div>
          </div>`).join('')}
      </div>` : ''}
      ${p.notice ? `<p class="sheet-notice">📝 ${esc(p.notice)}</p>` : ''}
      <button type="button" class="sheet-add-btn" id="sheetAddBtn"${blocked ? ' disabled' : ''}><span>${blockedText || `加入購物車・${money(priceOf(plan))}`}</span></button>
      ${couponClaimed
        ? `<p class="sheet-coupon">🎁 已套用黏黏麻折扣碼 <strong>${esc(CHECKOUT.couponCode || '')}</strong></p>`
        : `<button type="button" class="sheet-coupon-claim" id="sheetClaimBtn">🎁 領取黏黏麻折扣碼，立即看優惠價</button>`}`;
  }

  /* 下方「選擇方案」出現在畫面時，收起浮動的「看價格」提示列 */
  let planObserver = null;
  function watchPlanArea() {
    if (planObserver) planObserver.disconnect();
    const area = document.getElementById('planArea');
    const bar = document.getElementById('sheetSticky');
    if (!area || !bar || !('IntersectionObserver' in window)) return;
    planObserver = new IntersectionObserver((entries) => {
      bar.classList.toggle('hidden', entries[0].isIntersecting);
    }, { root: $('.sheet-panel', sheet), threshold: 0.2 });
    planObserver.observe(area);
  }

  function openSheet(id) {
    currentProduct = findProduct(id);
    if (!currentProduct) return;
    currentPlan = 0;
    resetPicks();
    renderSheet();
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    $('.sheet-panel', sheet).scrollTop = 0;
  }

  function closeSheet() {
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    if (!drawer.classList.contains('open')) document.body.classList.remove('no-scroll');
  }

  /* ---------- 購物車抽屜 ---------- */
  const drawer = document.getElementById('cartDrawer');
  const fab = document.getElementById('cartFab');
  const fabCount = document.getElementById('cartFabCount');

  function renderCart() {
    const list = document.getElementById('cartItems');
    const empty = document.getElementById('cartEmpty');
    const form = document.getElementById('cartCheckout');
    const count = cartCount();

    fabCount.textContent = count;
    fabCount.style.display = count ? 'flex' : 'none';

    if (!cart.length) {
      list.innerHTML = '';
      empty.hidden = false;
      form.hidden = true;
      return;
    }
    empty.hidden = true;
    form.hidden = false;
    list.innerHTML = cartIds().map((id) => {
      const p = findProduct(id);
      const cur = bestCost(p, groupUnits(id), couponClaimed);
      const orig = groupOriginal(id);
      const rows = cart.map((e, i) => ({ e, i })).filter((x) => x.e.id === id);
      return `
        <li class="cart-item">
          <img src="${p.image}" alt="" class="cart-item-img">
          <div class="cart-item-main">
            <div class="cart-item-name">${esc(p.name)}</div>
            <div class="cart-item-plan">${esc(comboText(p, cur))}</div>
            <div class="cart-item-sum">${couponClaimed && orig > cur.total ? `<s class="price-old">${money(orig)}</s> ` : ''}${money(cur.total)}</div>
            <div class="cart-lines">
              ${rows.map(({ e, i }) => `
                <div class="cart-line">
                  <span class="cart-line-label">${e.variant ? esc(e.variant) : '數量'}</span>
                  <div class="qty-stepper">
                    <button type="button" data-dec="${i}" aria-label="減少">－</button>
                    <span>${e.units}</span>
                    <button type="button" data-inc="${i}" aria-label="增加">＋</button>
                  </div>
                  <button type="button" class="cart-item-del" data-del="${i}" aria-label="移除">✕</button>
                </div>`).join('')}
            </div>
          </div>
        </li>`;
    }).join('');
    document.getElementById('cartTotal').textContent = money(cartTotal());
    renderLottery();
  }

  /* 雙11活動：每滿 $1,111 送 1 張抽獎券（滿 $2,222 送 2 張，以此類推），以折扣後金額計算 */
  const LOTTERY_STEP = 1111;
  function lotteryTickets(total) { return Math.floor(total / LOTTERY_STEP); }
  function renderLottery() {
    const box = document.getElementById('cartLottery');
    if (!box) return;
    const total = cartTotal();
    const n = lotteryTickets(total);
    const gap = (n + 1) * LOTTERY_STEP - total;
    box.innerHTML = n === 0
      ? `🎟️ 雙11抽獎券：再 <strong>${money(gap)}</strong> 就可以拿到第 1 張囉！`
      : `🎟️ 雙11抽獎券：目前可得 <strong>${n} 張</strong>，再 <strong>${money(gap)}</strong> 可多 1 張！`;
  }

  function openCart() {
    renderCart();
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeCart() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (!sheet.classList.contains('open')) document.body.classList.remove('no-scroll');
  }

  function addToCart(id, units, variantCounts) {
    const add = (variant, n) => {
      if (n <= 0) return;
      const existing = cart.find((e) => e.id === id && e.variant === variant);
      if (existing) existing.units += n;
      else cart.push({ id, variant, units: n });
    };
    if (variantCounts) Object.keys(variantCounts).forEach((v) => add(v, variantCounts[v]));
    else add('', units);
    saveCart();
    renderCart();
    bumpFab();
  }

  function bumpFab() {
    fab.classList.remove('bump');
    void fab.offsetWidth;
    fab.classList.add('bump');
  }

  /* ---------- 訂單文字 + 送 LINE ---------- */
  function buildOrderText(info) {
    const lines = [];
    lines.push('【黏黏麻開團 訂單】');
    lines.push('');
    cartIds().forEach((id, i) => {
      const p = findProduct(id);
      const cur = bestCost(p, groupUnits(id), couponClaimed);
      lines.push(`${i + 1}. ${p.name} × ${groupUnits(id)} ${p.unit}`);
      lines.push(`   方案：${comboText(p, cur)} = ${money(cur.total)}`);
      const vs = cart.filter((e) => e.id === id && e.variant);
      if (vs.length) lines.push(`   ${p.variantLabel || '款式'}：${vs.map((e) => `${e.variant} × ${e.units}`).join('、')}`);
    });
    lines.push('');
    lines.push(`商品合計：${money(cartTotal())}（方案價已含運費）`);
    lines.push(`雙11抽獎券：${lotteryTickets(cartTotal())} 張`);
    lines.push(couponClaimed
      ? `折扣碼：${CHECKOUT.couponCode || ''}（已套用折扣價）`
      : `折扣碼：${CHECKOUT.couponCode || ''}（尚未套用，請依折扣碼折抵）`);
    lines.push('');
    lines.push(`收件人：${info.name}`);
    lines.push(`電話：${info.phone}`);
    lines.push(`地址：${info.address}`);
    lines.push(`發票載具：${info.carrier || '無（不使用載具）'}`);
    if (info.note) lines.push(`備註：${info.note}`);
    return lines.join('\n');
  }

  async function submitOrder(e) {
    e.preventDefault();
    if (!cart.length) return;
    const f = e.target;
    const info = {
      name: f.elements.name.value.trim(),
      phone: f.elements.phone.value.trim(),
      address: f.elements.address.value.trim(),
      carrier: f.elements.carrier.value.trim().toUpperCase(),
      note: f.elements.note.value.trim()
    };
    if (!info.name || !info.phone || !info.address) {
      toast('請填寫收件人、電話與地址 🐾');
      return;
    }
    if (info.carrier && !/^\/[0-9A-Z.+-]{7}$/.test(info.carrier)) {
      toast('載具條碼格式是「/」加 7 碼英數字，例如 /ABC1234');
      return;
    }
    const text = buildOrderText(info);
    const fallback = document.getElementById('orderFallback');
    const fallbackText = document.getElementById('orderFallbackText');
    fallback.hidden = true;

    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (err) { copied = false; }

    /* 直接開啟黏黏麻 LINE 並把訂單文字帶進輸入框，買家只要按送出；同時也複製一份當備用 */
    const lineLink = CHECKOUT.lineId
      ? `https://line.me/R/oaMessage/${CHECKOUT.lineId}/?${encodeURIComponent(text)}`
      : CHECKOUT.lineUrl;
    if (copied) toast('訂單已帶入 LINE，按「送出」就完成囉 🐾');
    else toast('正在開啟 LINE，請確認訂單內容後送出 🐾');
    fallbackText.value = text;
    fallback.hidden = false;
    setTimeout(() => { window.location.href = lineLink; }, 600);
  }

  /* ---------- 領取折扣碼 → 全站改顯示折扣價 ---------- */
  function applyCoupon(claimed) {
    couponClaimed = claimed;
    try { localStorage.setItem(COUPON_KEY, claimed ? '1' : '0'); } catch (e) { /* 忽略 */ }
    renderProducts();
    renderCart();
    if (sheet.classList.contains('open')) renderPlanArea();
  }

  const claimTrigger = document.getElementById('claimCouponBtn');
  const couponBox = document.getElementById('couponCardBox');
  if (claimTrigger) {
    claimTrigger.addEventListener('click', () => {
      if (!couponClaimed) applyCoupon(true);
    });
  }
  /* 之前已領取過：直接展開票券、套用折扣價 */
  if (couponClaimed && couponBox && claimTrigger) {
    couponBox.classList.add('show-coupon');
    claimTrigger.style.display = 'none';
  }

  /* ---------- 事件綁定 ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;

    if (t.dataset.fg !== undefined) { applyFilter(t.dataset.fg, 'all', { push: true, scroll: true }); return; }
    if (t.dataset.fs !== undefined) { applyFilter(filterGroup, t.dataset.fs, { push: false, scroll: false }); return; }
    if (t.dataset.open) { openSheet(t.dataset.open); return; }
    if (t.dataset.plan !== undefined && sheet.contains(t)) {
      currentPlan = Number(t.dataset.plan);
      resetPicks();
      renderPlanArea();
      return;
    }
    if (t.dataset.vinc !== undefined || t.dataset.vdec !== undefined) {
      const v = currentProduct.variants[+(t.dataset.vinc !== undefined ? t.dataset.vinc : t.dataset.vdec)];
      const need = currentProduct.plans[currentPlan].qty;
      if (t.dataset.vinc !== undefined) { if (pickedTotal() < need) picks[v] += 1; }
      else if (picks[v] > 0) picks[v] -= 1;
      renderPlanArea();
      return;
    }
    if (t.id === 'jumpPlanBtn') {
      const area = document.getElementById('planArea');
      if (area) area.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (t.id === 'sheetClaimBtn') {
      if (claimTrigger && claimTrigger.style.display !== 'none') claimTrigger.click();
      else applyCoupon(true);
      return;
    }
    if (t.id === 'sheetAddBtn') {
      addToCart(currentProduct.id, currentProduct.plans[currentPlan].qty, currentProduct.variants ? picks : null);
      toast('已加入購物車 🐾');
      closeSheet();
      return;
    }
    if (t.dataset.inc !== undefined) { cart[+t.dataset.inc].units += stepOf(findProduct(cart[+t.dataset.inc].id)); saveCart(); renderCart(); return; }
    if (t.dataset.dec !== undefined) {
      const it = cart[+t.dataset.dec];
      it.units -= stepOf(findProduct(it.id));
      if (it.units <= 0) cart.splice(+t.dataset.dec, 1);
      saveCart(); renderCart(); return;
    }
    if (t.dataset.del !== undefined) { cart.splice(+t.dataset.del, 1); saveCart(); renderCart(); return; }
  });

  fab.addEventListener('click', openCart);
  document.querySelectorAll('[data-close-sheet]').forEach((el) => el.addEventListener('click', closeSheet));
  document.querySelectorAll('[data-close-cart]').forEach((el) => el.addEventListener('click', closeCart));
  document.getElementById('cartCheckout').addEventListener('submit', submitOrder);
  document.getElementById('continueShopBtn').addEventListener('click', closeCart);
  document.getElementById('cartEmptyBtn').addEventListener('click', closeCart);

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (sheet.classList.contains('open')) closeSheet();
    else if (drawer.classList.contains('open')) closeCart();
  });

  /* 購物車按鈕只在開團專區顯示 */
  const shopView = document.getElementById('shopView');
  function syncFab() {
    const inShop = shopView && shopView.classList.contains('active-view');
    fab.classList.toggle('visible', !!inShop);
    if (!inShop) { closeSheet(); closeCart(); }
  }
  if (shopView) new MutationObserver(syncFab).observe(shopView, { attributes: true, attributeFilter: ['class'] });

  renderFilter();
  renderProducts();
  renderCart();
  syncFab();
  applyHash();
})();
