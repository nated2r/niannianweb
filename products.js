/* ==========================================================================
   黏黏麻開團商品資料（價格為官方供貨頁面標示金額；實際折抵以折扣碼 000349 為準）
   plans：方案組合價（含運費）。要改價格、新增商品，只要改這份檔案即可。
   couponPrice：領取折扣碼 000349 後顯示的折扣價（每個方案可各自填寫）；沒填就維持原價。
   couponOnly：只有領取折扣碼後才出現的方案（原價頁沒有這個組合）。
   couponHidden：領取折扣碼後不提供的方案（折扣頁沒有這個組合）。
   group：'pet'（毛孩好物）或 'human'（飼主專屬），決定在哪個分區顯示；notice：詳情頁的提醒文字。
   sub：子分類（eat 吃的／use 用的／apply 擦的，可在下方 NIAN_CATEGORIES 增減）。
   requires：加價購限定，填入需要先購買的商品 id（購物車裡有其中一個才能買）。
   kind：卡片上顯示的商品類型（一眼看出賣什麼）。
   variants / variantLabel：有多種香味或款式時，買家可混搭選擇；總數量仍合併計算方案價。
   descImages：商品介紹長圖（直接引用原供貨頁的圖片，點開「商品介紹」才會載入）。
   ========================================================================== */
window.NIAN_PRODUCTS = [
  {
    id: 'food-1150',
    sub: 'eat',
    kind: '貓狗主食｜凍乾益菌糧',
    descImages: ['https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250003/17643082337293.jpg',
      
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920313416451.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920313622851.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920313708928.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/1792031379921.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920313883156.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/179203139748.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920314063825.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920314154755.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920314244714.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/179203143328.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920315746837.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316378655.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316458761.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316540579.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316616747.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/1792031669051.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316771461.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316844026.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920316926615.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/17920317008868.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494250005/1792031708462.jpg'
    ],
    brand: '營養師毛小孩',
    name: '機能高端餐 1.15kg',
    fullName: '毛孩高端餐 專利凍乾益菌糧 1.15Kg／包（貓寶／狗寶營養餐）',
    image: 'images/products/food_1150g.jpg',
    flag: '👑 黏黏同款',
    hot: true,
    intro: '原肉凍乾添加！黏黏守護大包裝，高肉量營養均衡，超值囤糧首選。',
    tags: ['原肉凍乾', '1.15kg超值'],
    unit: '包',
    plans: [
      { label: '1 包', qty: 1, price: 1780, couponPrice: 1100 },
      { label: '2 包', qty: 2, price: 3490, couponPrice: 2130 },
      { label: '4 包', qty: 4, couponPrice: 4130, couponOnly: true },
      { label: '6 包', qty: 6, couponPrice: 6000, couponOnly: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '2.54lb/包（約 1.15Kg/包）'],
        ['葷素別', '葷食'],
        ['原產地', '台灣'],
        ['保存期限', '2 年，拆封後請 2 個月內食用完畢'],
        ['保存方式', '請置於陰涼乾燥處，避免高溫、陽光直射']
      ]},
      { title: '成分（貓寶營養餐）', text: '台灣鴨肉、澳洲雞肉、巴布亞紐幾內亞鮪魚、台灣鰹魚、澳洲牛肉、綜合纖維粉(木薯、鳳梨纖維)、凍乾雞肉粉、專利益菌配方（芽孢乳酸菌、羅伊氏乳桿菌、EC80酪酸菌、紅麴）、乳清蛋白、酪蛋白、膠原蛋白、阿拉斯加鱈魚油、鳳梨酵素、青木瓜酵素、大豆卵磷脂、酵母粉、碳酸鈣、綜合維生素、綜合礦物質' },
      { title: '營養成分（貓寶）', rows: [
        ['粗蛋白', '≥ 34.0%'], ['粗脂肪', '≥ 11.0%'], ['粗纖維', '≤ 4.0%'], ['灰份', '≤ 10.0%'],
        ['鈣', '≥ 1.9%'], ['磷', '≥ 1.3%'], ['水分', '≤ 10.0%'], ['代謝能', '394 kcal/100g']
      ]},
      { title: '貓咪每日建議餵食量', rows: [
        ['≤ 3kg', '35-40g'], ['3-4kg', '40-50g'], ['4-5kg', '50-65g'], ['5-6kg', '65-75g'],
        ['6-7kg', '75-90g'], ['7-8kg', '90-105g'], ['8-9kg', '105-115g'], ['9-10kg', '115-130g']
      ]},
      { title: '注意事項', text: '建議每日均分總量 2～3 次餵食，並隨時搭配充足飲用水。開封後請將夾鏈袋確實密封並盡快食用完畢。本產品使用天然食材不含色素，些微色差屬自然現象。食用相關問題可徵詢獸醫師。' }
    ]
  },
  {
    id: 'food-500',
    sub: 'eat',
    kind: '貓狗主食｜凍乾益菌糧',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920306373506.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920306772459.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920306870634.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920306984512.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/1792030707351.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920307168798.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920307258968.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/1792030734474.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920307433804.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920307528871.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920307629469.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308062954.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308151638.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308245712.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308339025.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/1792030842464.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/1792030851538.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308614446.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/1792030870382.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308799336.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308899566.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260003/17920308977617.jpg'
    ],
    brand: '營養師毛小孩',
    name: '機能高端餐 500g',
    fullName: '毛孩高端餐 專利凍乾益菌糧 500g／包（貓寶／狗寶營養餐）',
    image: 'images/products/food_500g.jpg',
    flag: '嘗鮮小包',
    intro: '頂級凍乾饗宴嘗鮮首選！適口性絕佳挑嘴必備，小包裝極致保鮮。',
    tags: ['原肉凍乾', '500g小包'],
    unit: '包',
    plans: [
      { label: '1 包', qty: 1, price: 1259, couponPrice: 790 },
      { label: '2 包', qty: 2, price: 2418, couponPrice: 1480 },
      { label: '4 包', qty: 4, couponPrice: 2860, couponOnly: true },
      { label: '6 包', qty: 6, couponPrice: 4140, couponOnly: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '500g/包'],
        ['葷素別', '葷食'],
        ['原產地', '台灣'],
        ['保存期限', '2 年，拆封後請 2 個月內食用完畢'],
        ['保存方式', '請置於陰涼乾燥處，避免高溫、陽光直射']
      ]},
      { title: '成分（貓寶營養餐）', text: '台灣鴨肉、澳洲雞肉、巴布亞紐幾內亞鮪魚、台灣鰹魚、澳洲牛肉、綜合纖維粉(木薯、鳳梨纖維)、凍乾雞肉粉、專利益菌配方（芽孢乳酸菌、羅伊氏乳桿菌、EC80酪酸菌、紅麴）、乳清蛋白、酪蛋白、膠原蛋白、阿拉斯加鱈魚油、鳳梨酵素、青木瓜酵素、大豆卵磷脂、酵母粉、碳酸鈣、綜合維生素、綜合礦物質' },
      { title: '營養成分（貓寶）', rows: [
        ['粗蛋白', '≥ 34.0%'], ['粗脂肪', '≥ 11.0%'], ['粗纖維', '≤ 4.0%'], ['灰份', '≤ 10.0%'],
        ['鈣', '≥ 1.9%'], ['磷', '≥ 1.3%'], ['水分', '≤ 10.0%'], ['代謝能', '394 kcal/100g']
      ]},
      { title: '貓咪每日建議餵食量', rows: [
        ['≤ 3kg', '35-40g'], ['3-4kg', '40-50g'], ['4-5kg', '50-65g'], ['5-6kg', '65-75g'],
        ['6-7kg', '75-90g'], ['7-8kg', '90-105g'], ['8-9kg', '105-115g'], ['9-10kg', '115-130g']
      ]},
      { title: '注意事項', text: '建議每日均分總量 2～3 次餵食，並隨時搭配充足飲用水。開封後請將夾鏈袋確實密封並盡快食用完畢。本產品使用天然食材不含色素，些微色差屬自然現象。食用相關問題可徵詢獸醫師。' }
    ]
  },
  {
    id: 'spray-100',
    sub: 'apply',
    kind: '皮膚舒緩｜寵物噴霧',
    descImages: ['https://dxpqg5f7jnxq8.cloudfront.net/editor/DI00447250009/17502382041354.jpg'],
    brand: 'AMDS 微量元素',
    name: '寵物噴霧大瓶 100ml',
    fullName: 'AMDS 阿瑪迪斯寵物皮麗舒噴霧 100ml',
    image: 'images/products/spray_100ml.png',
    flag: '居家常備',
    intro: '9大全球專利，終結頭套噩夢！不含藥物成分，日常舒緩修護常備款。',
    tags: ['無藥成分', '100ml大瓶'],
    unit: '瓶',
    plans: [
      { label: '1 瓶', qty: 1, price: 1900, couponPrice: 1250 },
      { label: '2 瓶', qty: 2, price: 3700, couponPrice: 2400 },
      { label: '3 瓶', qty: 3, price: 5500, couponPrice: 3550 },
      { label: '4 瓶', qty: 4, price: 7200, couponPrice: 4600 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['內容量', '100 克'],
        ['保存期限', '出廠後 3 年'],
        ['保存方法', '請置於室溫處，避免陽光直射']
      ]},
      { title: '成分', text: '純水、海水、乳酸薄荷酯、尿囊素、小分子玻尿酸鈉、丙二醇、氯苯甘醚' },
      { title: '注意事項', text: '只供外用。請置於嬰幼兒無法取得之處。使用後如有不適，請暫停使用並詢問專科醫師。若不慎誤入眼睛，請立即以清水沖洗。' }
    ]
  },
  {
    id: 'spray-20',
    sub: 'apply',
    kind: '皮膚舒緩｜寵物噴霧',
    descImages: ['https://dxpqg5f7jnxq8.cloudfront.net/editor/DI00447260012/17797622679948.jpg'],
    brand: 'AMDS 微量元素',
    name: '寵物噴霧小瓶 20ml',
    fullName: 'AMDS 寵物皮麗舒噴霧 20ml',
    image: 'images/products/spray_20ml.png',
    flag: '隨身攜帶',
    intro: '極致輕盈隨身瓶！外出看醫生、散步、旅行放包包隨手噴，舒緩保護。',
    tags: ['便攜隨身', '20ml'],
    unit: '瓶',
    plans: [
      { label: '1 瓶', qty: 1, price: 589, couponPrice: 380 },
      { label: '2 瓶', qty: 2, price: 1078, couponPrice: 660 },
      { label: '3 瓶', qty: 3, price: 1567, couponPrice: 940 },
      { label: '4 瓶', qty: 4, price: 2056, couponPrice: 1220 },
      { label: '6 瓶', qty: 6, price: 3034, couponPrice: 1780 },
      { label: '8 瓶', qty: 8, couponPrice: 2240, couponOnly: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['內容量', '20 克'],
        ['原產地', '台灣'],
        ['保存期限', '出廠後 3 年'],
        ['保存方法', '請置於室溫處，避免陽光直射']
      ]},
      { title: '成分', text: '純水、海水、乳酸薄荷酯、尿囊素、小分子玻尿酸鈉、丙二醇、氯苯甘醚' },
      { title: '注意事項', text: '只供外用。請置於嬰幼兒無法取得之處。使用後如有不適，請暫停使用並詢問專科醫師。若不慎誤入眼睛，請立即以清水沖洗。' }
    ]
  },
  {
    id: 'probiotics',
    sub: 'eat',
    kind: '寵物保健｜藍藻益生菌',
    descImages: ['https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260100/17852957373184.png',
      
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260100/17851404453471.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260100/17851404539706.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260100/17851404616282.jpg'
    ],
    brand: 'NutriMin',
    name: '藍藻益生菌（五效合一）',
    fullName: 'NutriMin 藍藻益生菌膠囊 30粒／瓶（犬貓專用）',
    image: 'images/products/probiotics_nian.jpg',
    flag: '👑 黏黏實拍',
    hot: true,
    intro: '黏黏親自實拍代言！熟齡營養、腸胃排便、體態管理五效合一好法寶。',
    tags: ['五效合一', '30顆/瓶'],
    unit: '瓶',
    plans: [
      { label: '1 瓶', qty: 1, price: 1780, couponPrice: 1180 },
      { label: '2 瓶', qty: 2, price: 3460, couponPrice: 2260 },
      { label: '4 瓶', qty: 4, price: 6820, couponPrice: 4420 },
      { label: '6 瓶', qty: 6, couponPrice: 6580, couponOnly: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['內容量', '0.575 公克/粒；30 粒/瓶'],
        ['適用寵物', '犬、貓'],
        ['原物料產地', '台灣'],
        ['保存期限', '未拆封 2 年'],
        ['保存條件', '請置於通風陰涼處，避免日光直曬']
      ]},
      { title: '建議用量', text: '可直接餵食或打開膠囊混入食物中餵食。10 公斤（含）以下：每日 1-2 粒；11-20 公斤：每日 2-3 粒；20 公斤以上：每日 3-4 粒。' },
      { title: '成分', text: '螺旋藻（藍藻）、玉米來源可溶性纖維、雞肉粉、異麥芽寡糖、木寡糖、半乳寡糖、硬脂酸鎂，以及多種複合乳酸菌粉（植物乳桿菌、副乾酪乳桿菌、克菲爾乳桿菌、鼠李糖乳桿菌、德氏乳桿菌乳酸亞種等）。膠囊成分：羥丙基甲基纖維素、純水、鹿角菜膠、食用色素。' },
      { title: '注意事項', text: '本產品無法替代主食。本產品為寵物食品並非動物用藥品，若有醫療相關問題請先諮詢獸醫師。含天然雞肉粉，若有輕微結塊屬正常現象。含有牛奶及其製品。' }
    ]
  },
  {
    id: 'wipes',
    sub: 'use',
    kind: '清潔用品｜寵物濕紙巾',
    descImages: ['https://dxpqg5f7jnxq8.cloudfront.net/editor/SH00169200014/16341187829456.jpg'],
    brand: 'Platinm 白金盾',
    name: '抗菌濕式衛生紙 80抽',
    fullName: '白金盾 濕式衛生紙 80抽／包',
    image: 'images/products/wipes_80.jpg',
    flag: '溫柔親膚',
    intro: '抑制 99.9% 細菌！專為毛孩肌膚打造，擦手擦腳擦屁屁超安心，加厚柔韌。',
    tags: ['寵物友善', '80抽厚型'],
    unit: '包',
    plans: [
      { label: '1 包', qty: 1, price: 480, couponPrice: 380 },
      { label: '買三送一（4 包）', qty: 4, price: 1620, couponPrice: 1220 },
      { label: '2 包', qty: 2, couponPrice: 660, couponOnly: true },
      { label: '8 包', qty: 8, couponPrice: 2370, couponOnly: true },
      { label: '12 包', qty: 12, couponPrice: 3360, couponOnly: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '80 抽/包'],
        ['尺寸', '20×15cm/外包裝'],
        ['保存期限', '3 年（正常保存下）'],
        ['保存方法', '放置於乾燥陰涼處；使用後務必將封口貼紙貼回原位']
      ]},
      { title: '成分', text: '可沖式植物纖維、EDI 純化水、維他命E、白金奈米、蘆薈萃取物' },
      { title: '注意事項', text: '請勿置於陽光直射或高溫處；請置於兒童拿不到的地方；避免直接接觸眼睛及傷口處。本產品使用可沖式植物纖維，但請勿一次丟入多張，以免阻塞馬桶。' }
    ]
  },
  /* ===================== 新增商品：毛孩好物 ===================== */
  {
    id: 'shampoo-2000',
    sub: 'apply',
    kind: '洗澡用品｜寵物洗毛露',
    group: 'pet',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260016/17829840419322.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260016/17829840555408.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260016/17829840626001.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260016/17829840692814.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260016/17829840754034.jpg'
    ],
    brand: 'Love is Pet',
    name: '寵物洗毛露 2000ml',
    fullName: 'Love is Pet 寵物洗毛露系列 2000ml/瓶',
    image: 'images/products/shampoo_2000ml.jpg',
    flag: '大容量',
    intro: '燕麥修護、神經醯胺配方，三種香味任選，2000ml 大容量全家洗澡好安心。',
    tags: ['三種香味', '2000ml'],
    unit: '瓶',
    variantLabel: '香味',
    variants: ['向日葵（燕麥修護）', '貓薄荷（舒敏）', '英國橡木（神經醯胺）'],
    plans: [
      { label: '1 瓶', qty: 1, price: 2290, couponPrice: 1490 },
      { label: '2 瓶', qty: 2, price: 4380, couponPrice: 2780 },
      { label: '3 瓶', qty: 3, price: 6570, couponPrice: 4170 },
      { label: '4 瓶', qty: 4, price: 8760, couponPrice: 5560 },
      { label: '5 瓶', qty: 5, price: 10950, couponHidden: true }
    ],
    details: [
      { title: '香味與配方', rows: [
        ['向日葵', '燕麥修護洗毛露（葵花籽配方）'],
        ['貓薄荷', '舒敏洗毛露（積雪草屏障配方）'],
        ['英國橡木', '神經醯胺洗毛露（銀離子防護配方）']
      ]},
      { title: '商品資訊', rows: [
        ['容量', '2000ml'],
        ['原產地', '台灣製造（ISO22716 及化妝品 GMP 認證廠）'],
        ['保存期限', '3 年'],
        ['製造日期', '標示於瓶底（西元年/月/日）'],
        ['保存方法', '請置於陰涼乾燥處，避免陽光直射']
      ]},
      { title: '成分（向日葵款）', text: '純水、植物來源清潔因子、甜菜鹼系清潔因子、海鹽、葵花籽油、保濕多元醇抑菌劑、燕麥精華、維生素B5、維生素E、毛髮柔順因子、神經醯胺、積雪草萃取物。貓薄荷款以貓薄荷純露取代葵花籽油；英國橡木款另含銀離子。' },
      { title: '使用方法與注意事項', text: '取適量於濕潤毛髮上搓揉起泡後，以清水沖洗。寵物外用，避免接觸到眼睛，如不慎誤入請以大量清水沖洗。如有不適請停止使用並諮詢獸醫。請放置兒童拿不到高處，如有誤食請先催吐並立即送醫診治。' }
    ]
  },
  {
    id: 'slowbowl',
    sub: 'use',
    kind: '餵食用品｜慢食碗＋舔食墊',
    group: 'pet',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260017/17829849279805.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260017/1782984933994.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260017/17829849396583.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/GA00494260017/17829849467892.jpg'
    ],
    brand: 'Love is Pet',
    name: '矽膠防噎慢食碗+墊',
    fullName: 'Love is Pet 寵物食品級矽膠防噎慢食碗+墊',
    image: 'images/products/slowbowl.jpg',
    flag: '防噎慢食',
    intro: '食品級矽膠慢食碗加舔食墊，延長用餐時間、舒緩焦躁，犬貓通用。',
    tags: ['食品級矽膠', '犬貓通用'],
    unit: '組',
    plans: [
      { label: '1 組', qty: 1, price: 1180, couponPrice: 680 },
      { label: '2 組', qty: 2, price: 2290, couponPrice: 1290 },
      { label: '4 組', qty: 4, price: 4320, couponPrice: 2320 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['材質', '食品級矽膠'],
        ['規格', '餐盤 350g／餐墊 155g'],
        ['適用對象', '犬貓通用'],
        ['產地', 'Made in PRC／Supervised by Taiwan team']
      ]},
      { title: '使用方式', text: '適合飼料、凍乾、鮮食、罐罐、肉泥、蔬果泥等，均勻塗抹於舔食墊上，可搭配冷藏或冷凍使用，延長舔食時間。使用後請以溫水與清潔劑洗乾淨後晾乾。' },
      { title: '注意事項', text: '若產品出現破損，請立即停止使用。避免接觸尖碎物品以免刮傷。手工調色，每款紋理皆獨一無二，請以實品為準。' }
    ]
  },

  /* ===================== 新增商品：飼主專屬 ===================== */
  {
    id: 'spirulina-300',
    sub: 'glow',
    kind: '飼主保健｜藍藻錠',
    group: 'human',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027230015/17144633664145.jpg'
    ],
    brand: 'Double Power',
    name: '原粹藍藻錠 300顆',
    fullName: 'Double Power 原粹藍藻錠 300顆／瓶',
    image: 'images/products/spirulina_300.jpg',
    flag: '飼主專屬',
    intro: '美國加州藍藻原料，素食可食，每日 5 錠輕鬆補充日常保養。',
    tags: ['素食', '300錠/瓶'],
    unit: '瓶',
    plans: [
      { label: '1 瓶', qty: 1, price: 3400, couponPrice: 2250 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['產品淨重', '510mg/錠（含藍藻 500mg），300 錠/瓶'],
        ['葷素別', '素食'],
        ['原物料產地', '美國加州'],
        ['保存期限', '未拆封二年'],
        ['有效日期', '標示於瓶身（西元年/月/日）']
      ]},
      { title: '成分', text: '藍藻、麥芽糊精、二氧化矽、硬脂酸鎂' },
      { title: '食用方式', text: '每日 5 錠，餐前餐後均可搭配開水食用，多食無益。' },
      { title: '營養標示（每份 0.5 公克/錠，本包裝含 300 份）', rows: [
        ['熱量', '1.92 大卡'], ['蛋白質', '0.34 公克'], ['脂肪', '0.04 公克'], ['碳水化合物', '0.07 公克'], ['鈉', '4 毫克']
      ]},
      { title: '注意事項', text: '請置於兒童無法取得之處。置於乾燥陰涼處，避免陽光直射、高溫、潮濕，拆封後請盡速食用完畢。總代理：專注唯一有限公司。' }
    ]
  },
  {
    id: 'enzyme-30',
    sub: 'shape',
    kind: '飼主保健｜夜酵素',
    group: 'human',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00208250006/17395239190746.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00208250006/17395239287749.jpg'
    ],
    brand: 'Simply 新普利',
    name: '夜酵素薑黃錠PLUS+ 30錠',
    fullName: 'Simply新普利 夜酵素薑黃錠PLUS+（30錠／盒）',
    image: 'images/products/enzyme_30.jpg',
    flag: '飼主專屬',
    intro: '每日睡前 2 錠，薑黃加酵素與乳酸菌，睡前保養好習慣。',
    tags: ['奶素', '30錠/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 2200, couponPrice: 1700 },
      { label: '2 盒', qty: 2, price: 4300, couponPrice: 3300 },
      { label: '3 盒', qty: 3, price: 6400, couponPrice: 4900 },
      { label: '4 盒', qty: 4, price: 8500, couponPrice: 6500 },
      { label: '6 盒', qty: 6, price: 12700, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '0.75g × 30 錠'],
        ['葷素別', '奶素'],
        ['原產地', '台灣'],
        ['保存期限', '3 年'],
        ['保存方式', '請放置陰涼乾燥處，避免受潮']
      ]},
      { title: '建議食用方式', text: '每日睡前食用 2 錠，配合開水食用。' },
      { title: '營養標示（每份，本包裝含 15 份）', rows: [
        ['熱量', '4.6 大卡'], ['蛋白質', '0.5 公克'], ['脂肪', '0.0 公克'], ['碳水化合物', '0.5 公克'], ['鈉', '7.7 毫克']
      ]},
      { title: '過敏源與注意事項', text: '本產品含有牛奶、大豆、芒果、堅果、芝麻、奇異果、麩質之穀物及其製品，不適合對其過敏體質者食用。孕婦、哺乳婦、服用藥物或有其他疾病者，請先徵詢醫（藥）師意見再行食用。開封後請密封保存並置於陰涼乾燥處，避免陽光直接照射，並儘速食用完畢。' }
    ]
  },
  {
    id: 'enzyme-80',
    sub: 'shape',
    kind: '飼主保健｜夜酵素',
    group: 'human',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00208250005/17399442066701.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00208250005/17399442154846.jpg'
    ],
    brand: 'Simply 新普利',
    name: '夜酵素薑黃錠PLUS+ 80錠',
    fullName: 'Simply新普利 夜酵素薑黃錠PLUS+（80錠／盒）',
    image: 'images/products/enzyme_80.jpg',
    flag: '大盒超值',
    intro: '80 錠大盒裝，每日睡前 2 錠，適合長期保養囤貨。',
    tags: ['奶素', '80錠/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 5600, couponPrice: 3980 },
      { label: '2 盒', qty: 2, price: 11100, couponPrice: 7860 },
      { label: '3 盒', qty: 3, price: 16600, couponPrice: 11740 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '0.75g × 80 錠'],
        ['葷素別', '奶素'],
        ['原產地', '台灣'],
        ['保存期限', '3 年'],
        ['保存方式', '請放置陰涼乾燥處，避免受潮']
      ]},
      { title: '建議食用方式', text: '每日睡前食用 2 錠，配合開水食用。' },
      { title: '營養標示（每份，本包裝含 40 份）', rows: [
        ['熱量', '4.6 大卡'], ['蛋白質', '0.5 公克'], ['脂肪', '0.0 公克'], ['碳水化合物', '0.5 公克'], ['鈉', '7.7 毫克']
      ]},
      { title: '過敏源與注意事項', text: '本產品含有牛奶、大豆、芒果、堅果、芝麻、奇異果、麩質之穀物及其製品，不適合對其過敏體質者食用。孕婦、哺乳婦、服用藥物或有其他疾病者，請先徵詢醫（藥）師意見再行食用。開封後請密封保存並置於陰涼乾燥處，避免陽光直接照射，並儘速食用完畢。' }
    ]
  },
  /* ===================== 新增商品（第三批） ===================== */
  {
    id: 'virusout',
    group: 'pet',
    sub: 'use',
    kind: '清潔消毒｜環境抗菌錠',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00024250001/17453847153338.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00024250001/17453847296401.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/CH00024250001/17453847390246.jpg'
    ],
    brand: '病毒盾 VirusOUT',
    name: '病毒盾 菌切錠 12錠',
    fullName: '病毒盾VirusOUT菌切錠 12錠／盒',
    image: 'images/products/virusout.jpg',
    flag: '居家清潔',
    intro: '微酸性奈米次氯酸鋅，一錠泡水即可，貓砂、跳台、外出籠、推車都能清潔抗菌。',
    tags: ['外用非食品', '12錠/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 3600, couponPrice: 1980 },
      { label: '2 盒', qty: 2, price: 7200, couponHidden: true },
      { label: '8 盒', qty: 8, price: 28800, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['成份', 'TiAKi™ 微酸性奈米次氯酸鋅複合物'],
        ['內容物', '病毒盾每錠 2g，12 錠入'],
        ['原產地', '台灣'],
        ['有效日期', '3 年']
      ]},
      { title: '使用方式', text: '本產品為乾燥錠劑外用產品。一般抗菌抗病毒使用：一錠投入 1000ml 飲用水，靜置五分鐘錠片溶解後即可使用。高風險環境使用：建議一錠投入 500ml 飲用水，其餘使用方式相同。開封後請即刻使用完畢（一次使用一顆，切勿將錠片分次使用）。' },
      { title: '保存與注意事項', text: '妥善放置於陰涼乾燥處，避免陽光紫外線直射與接觸濕氣及熱源。本產品非食品，請勿食用，並避免放置兒童容易取得之處。' }
    ]
  },
  {
    id: 'gebe-cloth',
    group: 'human',
    sub: 'beauty',
    kind: '飼主美容｜卸妝潔顏巾',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/AI00039230001/17007336237159.jpg'
    ],
    brand: '愛比堤',
    name: '悅白美顏魔法鍺巾',
    fullName: '愛比堤 悅白美顏魔法鍺巾',
    image: 'images/products/gebe_cloth.jpg',
    flag: '飼主專屬',
    intro: '鍺奈米纖維加極光紗，只用清水就能卸妝、清潔、去角質。',
    tags: ['卸妝清潔', '去角質'],
    unit: '條',
    plans: [
      { label: '1 條', qty: 1, price: 3160, couponPrice: 1580 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['成份', '鍺奈米科技纖維紗、極光紗、奈米離子鋅抗菌材料'],
        ['尺寸', '22cm ± 10% × 22cm ± 10%'],
        ['顏色', '粉色（以實品為主）'],
        ['用途', '卸妝、清潔、去角質專用'],
        ['原產地', '台灣']
      ]},
      { title: '使用方式', text: '1. 請用清水將美容鍺巾全部沾濕，捏半乾後使用。2. 以旋轉方式擦拭臉部；臉上有彩妝需要比較多下，重複旋轉使用才會乾淨。3. 每次使用後，請務必用一般肥皂清洗乾淨，清洗過程中鍺巾要互搓。' },
      { title: '注意事項', text: '不能使用滾水燙鍺巾，不能直接曝曬。請使用肥皂清洗，不能用洗手乳、沐浴乳或洗面乳。本產品可連續使用三至六個月，請適時更換新品。個人清潔用品，經拆封使用後恕不退換。如有過敏現象請停用並諮詢醫師。' }
    ]
  },
  {
    id: 'seaweed-fish',
    group: 'human',
    sub: 'snack',
    kind: '飼主零食｜海苔脆魚捲',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/SH00348230001/16735051964808.jpg'
    ],
    brand: '好食光',
    name: '海苔脆魚捲 80g',
    fullName: '好食光 海苔脆魚捲',
    image: 'images/products/seaweed_fish.jpg',
    flag: '秒殺商品',
    intro: '虱目魚加海苔，酥脆好入口，一盒 10 根的台灣製零食。',
    tags: ['虱目魚', '10根/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 500, couponPrice: 300 },
      { label: '2 盒', qty: 2, price: 900, couponPrice: 500 },
      { label: '4 盒', qty: 4, price: 1730, couponPrice: 930 },
      { label: '6 盒', qty: 6, price: 2530, couponHidden: true },
      { label: '8 盒', qty: 8, price: 3330, couponHidden: true },
      { label: '10 盒', qty: 10, price: 4130, couponHidden: true },
      { label: '16 盒', qty: 16, price: 6560, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['內容量', '80g（10 根裝）'],
        ['葷素別', '葷食'],
        ['原產地', '台灣'],
        ['保存期限', '7 個月']
      ]},
      { title: '成份', text: '虱目魚、砂糖、豬油、醬油（含大豆、小麥）、食用鹽、海苔、香料。' },
      { title: '營養標示（每份 80 公克）', rows: [
        ['熱量', '337 大卡'], ['蛋白質', '33 公克'], ['脂肪', '13.2 公克'], ['碳水化合物', '20 公克'], ['鈉', '446 毫克']
      ]},
      { title: '過敏源與保存', text: '本產品含有堅果種子、大豆及其製品，不適合過敏體質者食用。未拆封前放置陰涼處即可，已拆封請盡速食用完畢。本產品使用真空包裝，未過期時未拆產品膨脹請與購買商家更換。' }
    ]
  },
  {
    id: 'chitose-tea',
    group: 'human',
    sub: 'shape',
    kind: '飼主保健｜纖體沖泡飲',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027240071/17924642509244.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027240071/17924642606872.jpg'
    ],
    brand: 'Double Power',
    name: '纖歲茶系列 30包',
    fullName: 'Double Power 纖歲茶系列（纖歲抹茶／纖歲奶茶）',
    image: 'images/products/chitose_tea.jpg',
    flag: '兩種口味',
    intro: '每日一包沖泡飲，抹茶與奶茶兩種口味，加入蔬果酵素與可溶性纖維。',
    tags: ['抹茶／奶茶', '30包/盒'],
    unit: '盒',
    variantLabel: '口味',
    variants: ['纖歲抹茶', '纖歲奶茶'],
    plans: [
      { label: '1 盒', qty: 1, price: 5840, couponPrice: 3480 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['內容量', '每包 10 公克；30 包入'],
        ['原產地', '台灣'],
        ['保存期限', '未拆封三年'],
        ['食用方法', '每日一包，溶於冷水或溫水中即可飲用，可依喜好調整濃淡，多食無益']
      ]},
      { title: '營養標示（每份 10 公克，本包裝含 30 份）', rows: [
        ['熱量', '24.6 大卡'], ['蛋白質', '0.3 公克'], ['碳水化合物', '7.1 公克'], ['膳食纖維', '2.7 公克']
      ]},
      { title: '注意事項', text: '本產品含有牛奶、芒果、穀物、大豆及其製品與奇異果，不適合對其過敏體質者食用。含有車前子殼粉，請配合足量水一起食用，對車前子過敏者請勿食用。不建議嬰幼兒、兒童、孕婦與真菌過敏者使用。部分原料為天然來源，產品顏色會因季節、採收批次不同而改變。請放置陰涼乾燥處，避免高溫及陽光直射。完整成分請見商品介紹圖。' }
    ]
  },
  {
    id: 'metawater',
    group: 'human',
    sub: 'glow',
    kind: '飼主保健｜氣泡飲',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/SH00169250048/17724337787086.jpg'
    ],
    brand: 'Meta Water',
    name: 'Meta Water 貴珀香檳風味 24瓶',
    fullName: 'Meta Water 貴珀香檳風味 24瓶／箱',
    image: 'images/products/metawater.jpg',
    flag: '一箱24瓶',
    intro: '香檳風味氣泡水，加入人參葉、珍珠萃取與維生素 B 群，每日一瓶。',
    tags: ['香檳風味', '24瓶/箱'],
    unit: '箱',
    plans: [
      { label: '1 箱', qty: 1, price: 7032, couponPrice: 3672 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '24 瓶／箱；每瓶 235 毫升'],
        ['食用方法', '每日 1 瓶'],
        ['咖啡因含量', '29.7mg／100mL'],
        ['原產地', '台灣'],
        ['保存期限', '18 個月']
      ]},
      { title: '營養標示（每份 235 毫升）', rows: [
        ['熱量', '84 大卡'], ['碳水化合物', '21 公克'], ['鈉', '44.9 毫克'], ['維生素 B2', '1.2 毫克'], ['維生素 B6', '0.9 毫克'], ['維生素 B12', '3.5 微克']
      ]},
      { title: '注意事項', text: '冷飲風味佳，請存放於陰涼乾燥處避免陽光照射，開罐後請盡早飲用完畢。孩童、孕婦及哺乳婦女與咖啡因敏感者不宜飲用。本產品有添加萃取物，若有沉澱或色澤變化屬正常現象。含有螺貝類及其製品，不適合其過敏體質者食用。' }
    ]
  },
  {
    id: 'beautystyle',
    group: 'human',
    sub: 'beauty',
    kind: '飼主保健｜發泡錠',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027250066/17478803160189.jpg'
    ],
    brand: 'Beauty Style',
    name: '水嫩模式 白皙加橙發泡錠 20錠',
    fullName: 'Beauty Style 水嫩模式 白皙加橙發泡錠 20錠／盒',
    image: 'images/products/beautystyle.jpg',
    flag: '飼主專屬',
    intro: '血橙萃取加維生素C，每日一錠沖泡飲用，補充日常所需。',
    tags: ['血橙萃取', '20錠/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 1480, couponPrice: 980 },
      { label: '2 盒', qty: 2, price: 2860, couponPrice: 1860 },
      { label: '3 盒', qty: 3, price: 4240, couponPrice: 2740 },
      { label: '4 盒', qty: 4, price: 5620, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '20 錠／盒；2.6 公克／錠'],
        ['食用建議', '每日 1 錠，以 150mL 冷（溫）水沖泡溶解後飲用，請勿直接吞食'],
        ['原產地', '台灣'],
        ['保存期限', '未拆封 2 年']
      ]},
      { title: '營養標示（每錠）', rows: [
        ['維生素 C', '1,000 毫克'], ['菸鹼素', '18 毫克 NE'], ['鋅', '10 毫克']
      ]},
      { title: '注意事項', text: '一日請勿超過 1 錠，多食無益。本產品容易受潮，開封後請儘早食用，鋁箔包裝隨儲藏時間有些微鼓脹屬正常。含植物萃取，不同批次外觀略有顏色差異。請置於陰涼乾燥（30℃以下）及兒童無法取得處存放，避免高溫及陽光直射。' }
    ]
  },
  /* ===================== 新增商品（第四批） ===================== */
  {
    id: 'bulio',
    group: 'human', sub: 'shape',
    kind: '飼主保健｜油切發泡錠',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027250198/17935854973716.png',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027250198/17669908061125.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027250198/17682972366797.jpg'
    ],
    brand: 'Beauty Style',
    name: '不油自主 油切發泡錠 14錠',
    fullName: 'Beauty Style BÜLIO 不油自主 油切發泡錠（14錠／管）',
    image: 'images/products/bulio.jpg',
    flag: '飼主專屬',
    intro: '餐前一錠，溶於水中飲用，素食可食的油切發泡錠。',
    tags: ['素食', '14錠/管'],
    unit: '管',
    plans: [
      { label: '2 管', qty: 2, price: 2860, couponPrice: 1180 },
      { label: '4 管', qty: 4, price: 5620, couponPrice: 2260 },
      { label: '6 管', qty: 6, price: 8380, couponPrice: 3340 },
      { label: '8 管', qty: 8, price: 11140, couponPrice: 4420 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '14 錠／管'],
        ['葷素別', '素食'],
        ['原產地', '台灣'],
        ['保存期限', '未拆封 3 年'],
        ['建議使用方式', '餐前一錠，溶於 150-200cc 冷水或溫水中，待發泡錠溶解後即可飲用']
      ]},
      { title: '營養標示（每份 1 錠，本包裝含 14 份）', rows: [
        ['熱量', '9.6 大卡'], ['碳水化合物', '2.4 公克'], ['鈉', '56 毫克']
      ]},
      { title: '注意事項', text: '本產品容易吸濕，開封後請蓋緊瓶蓋。發泡錠請勿直接吞食。15 歲以下小孩、懷孕或哺乳期間婦女及服用抗凝血藥品（warfarin）之病患，不宜食用。本產品含有大豆及含麩質之穀物製品。請置於低溫陰涼乾燥（30℃以下）及兒童不易取得之處。' }
    ]
  },
  {
    id: 'body-oil-set',
    group: 'human', sub: 'beauty',
    kind: '美體保養｜美體油＋經絡刷',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260030/17817583987008.png',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260002/1768297010396.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260002/17682970175321.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260002/17682970327936.jpg'
    ],
    brand: '每日疏通',
    name: '每日疏通刷刷組',
    fullName: '每日疏通刷刷組（極效美體全能油 2 瓶＋經絡刷 1 個）',
    image: 'images/products/body_oil_set.jpg',
    flag: '美體組合',
    intro: '美體全能油搭配經絡刷，每天按一按、刷一刷的疏通保養組。',
    tags: ['美體油2瓶', '經絡刷'],
    unit: '組',
    plans: [
      { label: '1 組', qty: 1, price: 2740, couponPrice: 1900 },
      { label: '2 組', qty: 2, price: 5380, couponPrice: 3700 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['組合內容', '極效美體全能油 2 瓶＋經絡刷 1 個'],
        ['原產地', '台灣'],
        ['保存期限', '3 年'],
        ['保存方法', '請至陰涼乾燥處保存，避免陽光直射']
      ]},
      { title: '注意事項', text: '僅供外用，使用後若有肌膚不適請立即停用，避免置於孩童可觸及處。' }
    ]
  },
  {
    id: 'scalp-set',
    group: 'human', sub: 'beauty',
    kind: '頭皮養護｜精粹露＋直髮梳',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260036/17817620914861.png',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498250017/17617257963156.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498250017/17617258028487.jpg'
    ],
    brand: '朵妮朵絲',
    name: '頭皮養護煥活套組',
    fullName: '朵妮朵絲 頭皮養護煥活套組（頭皮平衡精粹露 2 瓶＋不毛不躁直髮梳 1 把）',
    image: 'images/products/scalp_set.jpg',
    flag: '養護套組',
    intro: '頭皮平衡精粹露兩瓶，搭配直髮梳，日常頭皮養護一次到位。',
    tags: ['精粹露2瓶', '直髮梳'],
    unit: '組',
    plans: [
      { label: '1 組', qty: 1, price: 1460, couponPrice: 1150 },
      { label: '2 組', qty: 2, price: 2820, couponPrice: 2200 },
      { label: '3 組', qty: 3, price: 4180, couponPrice: 3250 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['組合內容', '頭皮平衡精粹露 2 瓶＋不毛不躁直髮梳 1 把'],
        ['原產地', '台灣'],
        ['保存期限', '3 年'],
        ['保存方式', '請置陰涼乾燥處保存，避免陽光直射']
      ]},
      { title: '注意事項', text: '僅供外用，若使用後有肌膚不適請立即停用，避免置於兒童可觸及處。' }
    ]
  },
  {
    id: 'boomca',
    group: 'human', sub: 'glow',
    kind: '飼主保健｜鈣補給軟糖',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/SH00169260048/17839348173237.jpg'
    ],
    brand: 'BoomCa+',
    name: 'BoomCa+ 彈力支點鈣軟糖 60顆',
    fullName: 'BoomCa+ 彈力支點 每日鈣補給軟糖 60顆桶裝',
    image: 'images/products/boomca.jpg',
    flag: '桶裝60顆',
    intro: '軟糖口感的每日鈣補給，孩童每日 2 顆、成人每日 4 顆。',
    tags: ['每日補鈣', '60顆/桶'],
    unit: '桶',
    plans: [
      { label: '1 桶', qty: 1, price: 2602, couponPrice: 1590 },
      { label: '2 桶', qty: 2, price: 5134, couponPrice: 3110 },
      { label: '3 桶', qty: 3, price: 7654, couponPrice: 4618 },
      { label: '4 桶', qty: 4, price: 10130, couponHidden: true },
      { label: '5 桶', qty: 5, price: 12630, couponHidden: true },
      { label: '6 桶', qty: 6, price: 15010, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '3.7 公克／顆，60 顆裝'],
        ['葷素別', '葷食'],
        ['原產地', '台灣'],
        ['保存期限', '18 個月']
      ]},
      { title: '食用方式', text: '孩童每日 2 顆，成人每日 4 顆。請咀嚼食用，勿直接吞食。' },
      { title: '營養標示（每份 3.7 公克，本包裝含 60 份）', rows: [
        ['熱量', '11.3 大卡'], ['脂肪', '0.5 公克'], ['碳水化合物', '2.6 公克'], ['糖醇', '2.5 公克'], ['鈉', '1.1 毫克']
      ]},
      { title: '注意事項', text: '本產品含有牛奶、魚類及其製品；該生產設備亦製造大豆及其製品。吞嚥咀嚼困難者、幼童、長者請細嚼慢嚥。請依建議攝取量食用，多食無益。請保存於陰涼乾燥處並避免陽光直射與受潮，開封後盡快食用完畢。' }
    ]
  },
  {
    id: 'amds-300',
    group: 'human', sub: 'beauty',
    kind: '肌膚護理｜速舒修護組',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DI00447240001/17046817246335.jpg'
    ],
    brand: 'AMDS 阿瑪迪斯',
    name: 'AMDS 速舒修護組 300ml',
    fullName: 'AMDS 阿瑪迪斯 速舒修護組 300ml',
    image: 'images/products/amds_300.jpg',
    flag: '修護組',
    intro: '微量元素速舒修護，長效保濕配方，換季、敏感不穩定的肌膚好幫手。',
    tags: ['300ml', '雙瓶組'],
    unit: '組',
    plans: [
      { label: '1 組', qty: 1, price: 4099, couponPrice: 3165 },
      { label: '2 組', qty: 2, price: 8098, couponPrice: 6230 },
      { label: '3 組', qty: 3, price: 12097, couponPrice: 9295 },
      { label: '4 組', qty: 4, price: 16096, couponHidden: true }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['容量', '300ml'],
        ['原產地', '台灣'],
        ['保存方法', '請置於室溫處，避免陽光直射']
      ]},
      { title: '注意事項', text: '只供外用。請置於嬰幼兒無法取得之處。使用後如有不適，請暫停使用並詢問專科醫師。若不慎誤入眼睛，請立即以清水沖洗。使用前可先試用於手腕內側或下巴局部，無過敏反應再塗抹其他部位。開封後請盡快使用完畢。' }
    ]
  },
  {
    id: 'combio8',
    group: 'human', sub: 'glow',
    kind: '飼主保健｜益生菌',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260106/17891184071609.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260106/17891184190033.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/JU00027260106/17891184317268.jpg'
    ],
    brand: 'Double Power',
    name: '全專利雙效益生菌 60包',
    fullName: 'Double Power 全專利雙效益生菌（1.5g × 60 包／盒）',
    image: 'images/products/combio8.jpg',
    flag: '專利益生菌',
    intro: '全專利雙效益生菌，每日 1-2 包，直接食用或搭配冷開水、果汁。',
    tags: ['專利益生菌', '60包/盒'],
    unit: '盒',
    plans: [
      { label: '1 盒', qty: 1, price: 4600, couponPrice: 2320 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['規格', '1.5g／包，60 包／盒'],
        ['原產地', '台灣'],
        ['保存期限', '兩年'],
        ['建議用量', '每日 1-2 包，多食無益；直接食用或搭配冷開水、果汁食用']
      ]},
      { title: '營養標示（每份 1.5 公克，本包裝含 60 份）', rows: [
        ['熱量', '4.3 大卡'], ['碳水化合物', '0.7 公克'], ['鈉', '3.3 毫克']
      ]},
      { title: '過敏源與保存', text: '本產品含有牛奶、大豆及其製品，不適合對其過敏體質者食用。請置於乾燥陰涼處，避免陽光直射，拆封後請盡速使用完畢。' }
    ]
  },
  {
    id: 'face-oil-set',
    group: 'human', sub: 'beauty',
    kind: '臉部保養｜精華油＋經絡梳',
    descImages: [
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260018/17817622530356.jpg',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260018/17816837312391.png',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260018/1781683742288.png',
      'https://dxpqg5f7jnxq8.cloudfront.net/editor/DU00498260018/17817622614266.jpg'
    ],
    brand: '全效修復',
    name: '全效修復精華油組',
    fullName: '全效修復精華油組（1094 精華油 1 瓶＋溫潤經絡梳 1 個）',
    image: 'images/products/face_oil_set.jpg',
    flag: '修復組合',
    intro: '植物萃取的 1094 精華油，搭配溫潤經絡梳，日常臉部保養與按摩。',
    tags: ['精華油20ml', '經絡梳'],
    unit: '組',
    plans: [
      { label: '1 組', qty: 1, price: 2920, couponPrice: 2380 },
      { label: '2 組', qty: 2, price: 5640, couponPrice: 4560 }
    ],
    details: [
      { title: '商品資訊', rows: [
        ['組合內容', '1094 精華油 1 瓶＋溫潤經絡梳 1 個'],
        ['原產地', '台灣'],
        ['保存期限', '三年'],
        ['保存方法', '請置陰涼乾燥處保存，避免陽光直射']
      ]},
      { title: '注意事項', text: '僅供外用，使用後若有肌膚不適請立即停用，避免置於孩童可觸及處。本產品成分為天然萃取，依批次不同、開封時間等因素，香氣、色澤略有不同及沉澱物屬正常現象。' }
    ]
  },
  {
    id: 'massage-comb',
    group: 'human', sub: 'beauty',
    kind: '加價購｜多功能按摩梳',
    descImages: [],
    brand: '加價購',
    name: '多功能按摩梳（加價購）',
    fullName: '多功能按摩梳（加價購）',
    image: 'images/products/comb.png',
    flag: '加價購',
    intro: '搭配每日疏通刷刷組、全效修復精華油組一起購買的加價購好物。',
    tags: ['加價購', '按摩梳'],
    unit: '個',
    requires: ['body-oil-set', 'face-oil-set'],
    notice: '加價購限定：需先把「每日疏通刷刷組」或「全效修復精華油組」加入購物車，才能加購按摩梳。',
    plans: [
      { label: '1 個', qty: 1, price: 390 }
    ],
    details: [
      { title: '加價購說明', text: '多功能按摩梳為「每日疏通刷刷組」與「全效修復精華油組」的加價購商品，需購買其中一款才能加購，單價 $390，不另提供折扣碼價。' }
    ]
  }
];

/* 商品分類：group 是大分類，每個大分類各有自己的子分類 subs（名稱可自由改）。
   商品上的 sub 欄位填子分類的 key（eat／use／apply），顯示的名稱在這裡改。 */
window.NIAN_CATEGORIES = {
  groups: [
    { key: 'pet', title: '毛孩好物', icon: '🐾', sub: '黏黏同款，毛孩的日常照顧',
      subs: [
        { key: 'eat', title: '挑嘴也愛吃', icon: '🍗' },
        { key: 'use', title: '居家好幫手', icon: '🏡' },
        { key: 'apply', title: '洗香香護理', icon: '🛁' }
      ] },
    { key: 'human', title: '麻麻專屬', icon: '🌿', sub: '照顧毛孩的人，也要顧好自己',
      subs: [
        { key: 'beauty', title: '美容保養', icon: '💆' },
        { key: 'shape', title: '身材好幫手', icon: '🍃' },
        { key: 'glow', title: '吃出好氣色', icon: '✨' },
        { key: 'snack', title: '嘴饞必入手', icon: '🍘' }
      ] }
  ]
};

/* 結帳設定 */
window.NIAN_CHECKOUT = {
  couponCode: '000349',
  lineUrl: 'https://lin.ee/P8q4aqd',
  lineId: '@478ihlka' // 黏黏麻 LINE 官方帳號，用來帶入訂單文字
};
