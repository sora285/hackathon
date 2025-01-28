FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをすべてコピー
COPY . .

# ビルドを実行
RUN npm run build

# 使用するポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
