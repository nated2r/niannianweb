# 🐾 黏黏 Nian Nian 官方品牌與開團專區網站

> **逸安國際商行（YI AN INTERNATIONAL TRADING）出品 · 用好的 • 陪你更好**

歡迎來到橘貓「黏黏」的官方小天地！本專案包含黏黏的相遇成長故事、官方社群傳送門，以及黏黏麻開團專區與專屬折扣碼。

---

## 🌐 線上正式站點

- **線上網址**：👉 **[https://niannianweb.vercel.app](https://niannianweb.vercel.app)**
- **託管平台**：Vercel（已與 GitHub 連動，推送到 `main` 分支自動秒級部署上架）
- **代碼庫**：[https://github.com/nated2r/niannianweb](https://github.com/nated2r/niannianweb)

---

## 🛠️ 技術特色

- **零依賴輕量架構**：純 HTML5 + CSS3 + 原生 JavaScript (ES6+)。
- **單頁雙視圖切換 (SPA)**：透過 URL Hash 平滑切換首頁 (`#home`) 與開團專區 (`#shop`)。
- **手機優先設計 (Mobile-First)**：專為手機閱讀手感深度優化（最大寬度 480px，電腦端精緻置中）。
- **暖色調無邊框設計系統**：燕麥奶茶底色、可可棕字體、乾燥玫瑰粉點綴，全面消除生硬框線，呈現輕盈柔和的日系雜誌美學。
- **互動體驗**：專屬折扣碼 `000349` 一鍵複製（含慶祝粒子與 Toast 提示）、成長光圈燈箱、活動海報展示。

---

## 📁 專案主要結構

```
├── index.html                   # 首頁與開團專區主結構
├── style.css                    # 品牌統一設計系統樣式表
├── script.js                    # 視圖切換、折扣碼複製、燈箱互動
├── CLAUDE.md                    # Claude 協作開發與完整交接指南
├── README.md                    # 專案介紹文件
└── images/                      # 高畫質品牌與商品圖庫
    ├── brand_logo.png           # 逸安國際商行商標
    ├── event_banner_home.png    # 首頁橫版雙11活動橫幅
    ├── event_poster_shop.jpg    # 開團區直版雙11促銷海報
    └── products/                # 6 款開團好物官方商品圖
```

---

## 🚀 本地開發與發布

```bash
# 1. 進入專案資料夾
cd "/Applications/放各種自制程式/黏黏網頁"

# 2. 檢視修改狀態
git status

# 3. 提交並同步發布至正式線上網站 (Vercel 自動部署)
git add .
git commit -m "更新說明"
git push origin main
```

---
*© 2026 逸安國際商行 YI AN INTERNATIONAL TRADING · All Rights Reserved.*
