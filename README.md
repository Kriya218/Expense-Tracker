# Expense Tracter 
使用 Node.js, Express,以及 Handlebars 建立的簡易支出紀錄APP

## Features 功能
- 使用者可透過 email 註冊帳號
- 使用者可透過第三方網站 Google 帳戶註冊及登入
- 使用者可以檢視自己帳號的支出紀錄
- 使用者可以檢視支出總金額
- 使用者可以新增支出紀錄
- 使用者可以編輯自己的支出紀錄
- 使用者可以刪除自己的支出紀錄
- 使用者可以透過類別篩選支出，並顯示該類別總支出金額

## Screen Shot 頁面截圖
### 登入頁面
![image](https://github.com/user-attachments/assets/3dcb278f-fccd-4fc4-bccb-bb62b079e9de)
### 註冊頁面
![image](https://github.com/user-attachments/assets/4dfa31f3-4663-4621-a6e7-8d90ad390b68)
### 主頁面
![image](https://github.com/user-attachments/assets/3ee7f82a-e2e9-493d-930c-b9fd1e4cf622)
### 類別篩選
![image](https://github.com/user-attachments/assets/d88bb6e0-2372-4008-aae8-4b412e0605ca)
### 編輯頁面
![image](https://github.com/user-attachments/assets/70459caf-2ecf-48e8-81cd-2a5fbc1932ac)





## Prerequisities 環境設置
- __[Node.js](https://nodejs.org/en/download/package-manager)__
- __[MySQL(v8.0.37)](https://www.mysql.com/downloads/)__

### Inatallation and execution 安裝與執行步驟
1. Clone repo to local 複製專案到本地
``` 
git clone https://github.com/Kriya218/Expense-Tracker
```
2. Change directory to Expense-Tracker 移動至專案資料夾
``` 
git cd Expense-Tracker
```
3. Install npm 安裝 npm 套件
``` 
npm install 
```
4. Set .env file 設置環境變數 .env 檔案，將值根據個人開發環境設置，並取得  __[Google](https://console.developers.google.com/)__ APP ID及密鑰
``` 
cp .env.example .env
```
5. DB migration 同步資料庫 schema
``` 
npx sequelize db:migrate
```
6. Run seeder file 載入種子檔案
``` 
npm run seed
```
7. Run on server 啟動伺服器，點擊URL http://localhost:3000
``` 
npm run dev 
```

### Author
__[Kriya](https://github.com/Kriya218)__
