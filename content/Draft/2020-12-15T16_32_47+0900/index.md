+++
slug = "install-tailwind-css"
image = "c1090e2c651cce9c7b348fd3d5155914.png"
title = "Tailwind CSS をインストールする"
publishDate = "2020-12-15T16:32:47+0900"
lastmod = "2020-12-23T23:56:00+0900"
tags = ["Tech", "Tailwind CSS", "CSS"]
weight = 0
googleAds = true
draft = true
+++

## 1. はじめに

　[Tailwind CSS](https://tailwindcss.com/) は，FLOSS で開発されているユーティリティ指向の CSS フレームワークです。[Bootstrap](https://getbootstrap.com/) や [UIkit](https://getuikit.com/) などのコンポーネント指向の CSS フレームワークと比較すると知名度は高くないですが，新しいパラダイムの CSS フレームワークとして注目され初めています。

　本記事は，Tailwind CSS の公式ドキュメントに記載されている 3 つのインストール方法について，その手順や違いなどを記述しています。また，本記事内で行っている作業は以下の環境下で実行したものです。npm や npx はインストール済みの前提で記述しており，インストール手順は割愛していることをご了承ください。

* npm Ver.6.14.9
* npx Ver.6.14.9
* Zorin OS 15.2 Core (Ubuntu 18.04 LTS)

## 2. インストール

　Tailwind CSS の[公式ドキュメント](https://tailwindcss.com/docs/installation)では，Tailwind CSS をインストールする方法として，3 つのパターンが記載されています。1 つ目が，PostCSS Plugin として Tailwind CSS をインストールする方法。2 つ目が，Tailwind CLI を用いて Tailwind CSS をインストールする方法。3 つ目が，CDN 経由で Tailwind CSS をインストールする方法です。

### 2.1. PostCSS Plugin

　PostCSS Plugin として Tailwind CSS をインストールする方法が最もスタンダードであり，公式ドキュメントでも推奨されています。まずは，初期化処理で *package.json* を生成した後，動作に必要な 3 つのパッケージ (*tailwindcss*，*postcss*，*autoprefixer*) をインストールします。次に，PostCSS の設定ファイルである *postcss.config.js* と Tailwind CSS の設定ファイルである *tailwind.config.js*，動作確認用の *index.html* を生成します。

<!-- 初期化と必要なパッケージをインストールした後， -->

<!-- まずは，npm init コマンドを用いて *package.json* を生成します。次に，npm install コマンドを用いて必要なパッケージをインストールします。 -->

<!-- し (1 行目) ， (2 行目) 。次に *postcss.config.js* と *tailwind.config.js* を生成します (3-4 行目) 。 -->

<!-- { linenos=table } -->

```bash
$ npm init -y
$ npm install tailwindcss@latest postcss@latest autoprefixer@latest
$ touch postcss.config.js
$ npx tailwindcss init
$ touch index.html
$ ls
index.html    package-lock.json  postcss.config.js
node_modules  package.json       tailwind.config.js
```

　上記で生成した *package.json* と *postcss.config.js*，*index.html* を，それぞれ以下のように書き換えます。

```json {}
{
  "scripts": {
    "start": "tailwindcss build -o tailwind.css"
  },
  "dependencies": {
    "autoprefixer": "^10.1.0",
    "postcss": "^8.2.1",
    "tailwindcss": "^2.0.2"
  }
}
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="tailwind.css" rel="stylesheet" />
</head>

<body class="text-white bg-black">
    Hello world
</body>

</html>
```

　最後に，ビルド処理を行い，*tailwind.css* を出力します。*index.html* を任意の Web ブラウザで開き，黒背景に白文字が表示されれば，正常に Tailwind CSS がインストールされています。

```bash
$ npm start

> tailwindcss build -o tailwind.css
  
   tailwindcss 2.0.2
  
   🚀 Building from default CSS... (No input file provided)
  
   ✅ Finished in 2.3 s
   📦 Size: 3.74MB
   💾 Saved to tailwind.css

$ ls
index.html    package-lock.json  postcss.config.js   tailwind.css
node_modules  package.json       tailwind.config.js
```

### 2.2. Tailwind CLI

　PostCSS Plugin として Tailwind CSS をインストールする方法の他に，Tailwind CLI を用いて Tailwind CSS をインストールする方法があります。PostCSS Plugin として Tailwind CSS をインストールする方法とは異なり，Autoprefixer 以外の PostCSS Plugin と組み合わせることが出来ませんが，依存関係のパッケージをインストールすることなく Tailwind CSS を出力することが出来ます。そのため，Autoprefixer 以外の PostCSS Plugin を使用する予定が無い場合は，このインストール方法がオススメです。

　インストール手順は非常に簡単です。まず初めに，2.1 節で生成した動作確認用の *index.html* を任意のディレクトリに保存します。次に，Tailwind CSS の設定ファイルである *tailwind.config.js* を生成します。次に，ビルド処理を行い，*tailwind.css* を出力します。最後に，任意の Web ブラウザで index.html を開き，黒背景に白文字が表示されれば，正常に Tailwind CSS がインストールされています。

```bash
$ ls
index.html
$ npx tailwindcss-cli@latest init
  
   tailwindcss 2.0.2
  
   ✅ Created Tailwind config file: tailwind.config.js

$ npx tailwindcss-cli@latest build -o tailwind.css

> tailwindcss build -o tailwind.css
  
   tailwindcss 2.0.2
  
   🚀 Building from default CSS... (No input file provided)
  
   ✅ Finished in 2.3 s
   📦 Size: 3.74MB
   💾 Saved to tailwind.css

$ ls
index.html  tailwind.config.js  tailwind.css
```

### 2.3. CDN

　Bootstrap や UIkit などの CSS フレームワークと同じく，Tailwind CSS も CDN 経由で配布されています。しかし，カスタマイズや最適化が行えないなどの[理由](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn)から，公式ドキュメントでは非推奨のインストール方法となっています。そのため，Tailwind CSS の学習やモックアップの作成など，カスタマイズや最適化などを行う必要がない場合にのみ採用する，限定的なインストール方法になります。インストール方法は最も簡単で，ビルド済みの *tailwind.min.css* を読み込むだけです。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</head>

<body class="text-white bg-black">
    Hello world
</body>

</html>
```

## 3. カスタム CSS

## 4. 最適化

## 5. おわりに

　XXX