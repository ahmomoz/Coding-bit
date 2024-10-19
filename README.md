<p align="center">
  <img src="https://raw.githubusercontent.com/ahmomoz/Coding-bit/refs/heads/main/assets/images/logo.svg" alt="Coding-bit logo"/>
 
</p>

## 關於此專案

<a href="https://ahmomoz.github.io/Coding-bit/">DEMO</a>

![custom course page screenshot](https://github.com/ahmomoz/Coding-bit/blob/main/assets/images/custom-course-page-screenshot.png)

現今網路科技發達越來越多人會在網路上學習知識，但網路上的資訊學習，缺乏完整性系統性架構、遇到特定小問題常常糾結很久，找不到相關解法。

我們希望可以打造一個環境，除了主題式連貫性的課程影片外，還可以讓學習者發佈學習需求，讓講師針對這個需求提供解答，錄製教學影片。如果學習者還是不懂，可以再額外預約一對一課程，達到完整的學習體驗。

## 資料夾結構

```
├── README.md               # 本專案的README
├── assets                  # 靜態資源
│   ├── images              # 圖片
│   ├── js                  # 頁面javascript
│   └── scss                # SCSS樣式
│        └── base           # 文字樣式
│        └── components     # 元件樣式
│        └── layout         # ejs樣式
│        └── pages          # 獨立頁面樣式
│        └── utils          # 通用類別裝飾
│        └── vendors        # 第三方插件裝飾
├── layout                  # ejs樣式
├── main.js                 # 入口文件
├── package-lock.json       # 依賴套件具體來源和版本號
├── package.json            # 依賴套件與腳本
├── pages                   # HTML頁面
└── vite.config.js          # Vite 配置
```

## Node.js 版本

- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程說明

### Windows 版本

1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 修改 vite.config.js 第 28 行，將你的 Github Repo 的名字填入

4. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署

## 團隊成員

<table>
  <tbody style="border: none"> 
     <tr style="border: none; border-top: none;">
        <td align="center" valign="top" width="14.28%" style="border:none"><a href="https://github.com/ahmomoz"><img src="https://avatars.githubusercontent.com/u/134830436?v=4" width="100px;" alt="MY"/><br /><sub><b>MY</b></sub></a></td>
        <td align="center" valign="top" width="14.28%" style="border:none"><a href="https://github.com/z111048"><img src="https://avatars.githubusercontent.com/u/147981540?v=4" width="100px;" alt="詹姆士"/><br /><sub><b>詹姆士</b></sub></a></td>
        <td align="center" valign="top" width="14.28%" style="border:none"><a href="https://github.com/joker-cat"><img src="https://avatars.githubusercontent.com/u/67618773?v=4" width="100px;" alt="Chia Pin"/><br /><sub><b>Chia Pin</b></sub></a></td>
        <td align="center" valign="top" width="14.28%" style="border:none"><a href="https://github.com/annnnangan"><img src="https://avatars.githubusercontent.com/u/110728860?v=4" width="100px;" alt="Anna"/><br /><sub><b>Anna</b></sub></a></td>
    <tr>
  </tbody>
</table>
