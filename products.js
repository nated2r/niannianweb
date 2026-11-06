/* ==========================================================================
   黏黏麻開團商品資料（價格為官方供貨頁面標示金額；實際折抵以折扣碼 000349 為準）
   plans：方案組合價（含運費）。要改價格、新增商品，只要改這份檔案即可。
   couponPrice：領取折扣碼 000349 後顯示的折扣價（每個方案可各自填寫）；沒填就維持原價。
   couponOnly：只有領取折扣碼後才出現的方案（原價頁沒有這個組合）。
   couponHidden：領取折扣碼後不提供的方案（折扣頁沒有這個組合）。
   group：'pet'（毛孩好物）或 'human'（飼主專屬），決定在哪個分區顯示；notice：詳情頁的提醒文字。
   variants / variantLabel：有多種香味或款式時，買家可混搭選擇；總數量仍合併計算方案價。
   descImages：商品介紹長圖（直接引用原供貨頁的圖片，點開「商品介紹」才會載入）。
   ========================================================================== */
window.NIAN_PRODUCTS = [
  {
    id: 'food-1150',
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
  }
];

/* 結帳設定 */
window.NIAN_CHECKOUT = {
  couponCode: '000349',
  lineUrl: 'https://lin.ee/P8q4aqd'
};
