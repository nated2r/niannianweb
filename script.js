/**
 * 黏黏 Nian Nian 專屬互動腳本 (雙視圖 + 故事光圈 + 點圖片跳轉購買 + 折扣碼領取)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==============================================================
  // 1. 視圖切換管理 (Home View vs Shop View)
  // ==============================================================
  const homeView = document.getElementById('homeView');
  const shopView = document.getElementById('shopView');
  const openShopBtn = document.getElementById('openShopBtn');
  const backHomeBtn = document.getElementById('backHomeBtn');
  const bottomBackHomeBtn = document.getElementById('bottomBackHomeBtn');

  function showShopView(updateHash = true) {
    if (homeView && shopView) {
      homeView.classList.remove('active-view');
      shopView.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (updateHash) {
        history.pushState({ view: 'shop' }, '', '#shop');
      }
    }
  }

  function showHomeView(updateHash = true) {
    if (homeView && shopView) {
      shopView.classList.remove('active-view');
      homeView.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (updateHash) {
        history.pushState({ view: 'home' }, '', '#home');
      }
    }
  }

  if (openShopBtn) {
    openShopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showShopView();
    });
  }

  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showHomeView();
    });
  }

  if (bottomBackHomeBtn) {
    bottomBackHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showHomeView();
    });
  }

  window.addEventListener('popstate', () => {
    if (window.location.hash === '#shop') {
      showShopView(false);
    } else {
      showHomeView(false);
    }
  });

  if (window.location.hash === '#shop') {
    showShopView(false);
  }

  // ==============================================================
  // 2. 領取黏黏麻專屬折扣碼互動 (Claim & Copy Coupon Code)
  // ==============================================================
  const claimCouponBtn = document.getElementById('claimCouponBtn');
  const couponCardBox = document.getElementById('couponCardBox');
  const copyCouponBtn = document.getElementById('copyCouponBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const couponCodeText = document.getElementById('couponCodeText');
  const DISCOUNT_CODE = '000349';

  if (claimCouponBtn && couponCardBox) {
    claimCouponBtn.addEventListener('click', () => {
      couponCardBox.classList.add('show-coupon');
      claimCouponBtn.style.display = 'none'; // Hide trigger button once claimed
      
      // Spawn celebration particles
      const rect = couponCardBox.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + 30;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          spawnParticle(centerX + (Math.random() - 0.5) * 60, centerY + (Math.random() - 0.5) * 20);
        }, i * 60);
      }

      showToast('🎉 已領取黏黏麻專屬折扣碼！點擊即可複製代碼 000349');
    });
  }

  async function copyDiscountCode() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DISCOUNT_CODE);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = DISCOUNT_CODE;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      // Update button state
      if (copyCouponBtn && copyBtnText) {
        copyCouponBtn.classList.add('copied');
        copyBtnText.textContent = '已複製！✅';
        setTimeout(() => {
          copyCouponBtn.classList.remove('copied');
          copyBtnText.textContent = '點擊複製';
        }, 2500);
      }

      showToast('🐾 折扣碼【000349】已複製！底下選購輸入可兌換專屬優惠價！');
    } catch (err) {
      showToast('🐾 折扣代碼：' + DISCOUNT_CODE);
    }
  }

  if (copyCouponBtn) {
    copyCouponBtn.addEventListener('click', copyDiscountCode);
  }
  if (couponCodeText) {
    couponCodeText.addEventListener('click', copyDiscountCode);
  }

  // ==============================================================
  // 3. 摸摸黏黏互動 (Petting Interaction)
  // ==============================================================
  const petButton = document.getElementById('petButton');
  const petCountBadge = document.getElementById('petCountBadge');
  const heroAvatar = document.getElementById('heroAvatar');

  let petCount = parseInt(localStorage.getItem('niannian_pet_count'), 10);
  if (isNaN(petCount) || petCount < 1) {
    petCount = 99;
  }
  updatePetDisplay();

  function updatePetDisplay() {
    if (petCountBadge) {
      petCountBadge.textContent = `已被摸 ${petCount} 次`;
    }
  }

  let audioCtx = null;
  function playCuteSound() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.22);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {}
  }

  function spawnParticle(x, y) {
    const particles = ['🐾', '♥', '✨', '🌸', '🐱', '🤎'];
    const char = particles[Math.floor(Math.random() * particles.length)];
    const el = document.createElement('span');
    el.className = 'floating-particle';
    el.textContent = char;

    const dx = (Math.random() - 0.5) * 80;
    const rot = (Math.random() - 0.5) * 60;
    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--rot', `${rot}deg`);

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1200);
  }

  if (petButton) {
    petButton.addEventListener('click', (e) => {
      petCount++;
      localStorage.setItem('niannian_pet_count', petCount);
      updatePetDisplay();

      playCuteSound();

      if (heroAvatar) {
        heroAvatar.style.transform = 'scale(1.12) rotate(-4deg)';
        setTimeout(() => {
          heroAvatar.style.transform = '';
        }, 250);
      }

      const rect = petButton.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          spawnParticle(centerX + (Math.random() - 0.5) * 30, centerY + (Math.random() - 0.5) * 15);
        }, i * 80);
      }
    });
  }

  // ==============================================================
  // 4. 黏黏從小到大成長故事相片燈箱 (Lightbox)
  // ==============================================================
  const galleryData = [
    {
      src: 'images/cat_baby.jpg',
      stage: '階段 1 · 幼貓時期',
      title: '初次見面，我是小黏黏！',
      desc: '剛剛來到家裡的小萌神，大大的耳朵與圓滾滾的雙眼，脖子上掛著清脆的小鈴鐺，楚楚可憐又黏人。'
    },
    {
      src: 'images/cat_tree.jpg',
      stage: '階段 2 · 好奇探險家',
      title: '貓爬架是我的專屬瞭望台',
      desc: '開始會爬高高了！最喜歡趴在貓爬架的小圓台裡，把毛茸茸的小手掛在外面，東看西看觀察麻麻在幹嘛。'
    },
    {
      src: 'images/cat_sleeping.jpg',
      stage: '階段 3 · 軟爛充電中',
      title: '安心大睡，露出粉紅肉球！',
      desc: '在家裡已經完全放開了～趴在人體工學椅上拉長整個身體睡成一條貓，那對粉嫩小肉球簡直是世界上最治癒的存在。'
    },
    {
      src: 'images/cat_teen.png',
      stage: '階段 4 · 帥氣少年時期',
      title: '端莊優雅的小王子誕生',
      desc: '抽高變壯了！漂亮的橘色虎斑花紋越來越鮮明，坐姿端莊挺拔，眼神散發著靈動光芒，從小帥哥變成美少年。'
    },
    {
      src: 'images/cat_model.png',
      stage: '階段 5 · 專業代言喵',
      title: '本喵認證！機能高端餐代言人',
      desc: '守護在最愛的「營養師毛小孩」機能凍乾飼料旁邊，這堅定專業的小眼神，根本就是天生的貓界頂級小名模！'
    }
  ];

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxStage = document.getElementById('lightboxStage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryData[currentGalleryIndex];
    if (!item) return;

    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxStage.textContent = item.stage;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
  }

  function showPrev() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  }

  function showNext() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightboxContent();
  }

  // Bind Story Circle Buttons
  const storyCircles = document.querySelectorAll('.story-circle');
  storyCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
      const idx = parseInt(circle.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
  });

  const sleepingCardClick = document.getElementById('sleepingCardClick');
  if (sleepingCardClick) {
    sleepingCardClick.addEventListener('click', () => {
      openLightbox(2);
    });
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);

  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      showNext();
    } else if (touchEndX > touchStartX + 50) {
      showPrev();
    }
  }, { passive: true });

  // ==============================================================
  // 5. 分享按鈕與 Toast 提示
  // ==============================================================
  const shareBtn = document.getElementById('shareBtn');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(text) {
    if (!toastMessage) return;
    toastMessage.textContent = text;
    toastMessage.classList.add('show');
    setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 2800);
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: '黏黏 Nian Nian 🐾 橘貓成長日記與黏黏麻開團專區',
        text: '來看看橘貓黏黏的專屬小天地，輸入折扣碼 000349 享開團專屬優惠價！🐱',
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (err) {}
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast('🐾 已複製網頁連結！快分享給朋友吧！');
        } catch (err) {
          showToast('🐾 網頁連結：' + window.location.href);
        }
      } else {
        showToast('🐾 網頁連結：' + window.location.href);
      }
    });
  }

  // ==============================================================
  // 6. 回到頂部按鈕 (Back to Top)
  // ==============================================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
