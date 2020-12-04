+++
image = "32e1fac4bef435a7183a87dd33874bd6.png"
title = "ブックレビュー: React.js & Next.js 超入門"
publishDate = "2020-07-10T15:42:09+09:00"
lastmod = ""
tags = [
    "Review",
    "Book",
    "React",
    "Next.js",
]
googleAds = true
+++

## 1. はじめに

　「React.js & Next.js 超入門」は，多数の技術書を執筆している[掌田氏](https://www.amazon.co.jp/%E6%8E%8C%E7%94%B0%E6%B4%A5%E8%80%B6%E4%B9%83/e/B004L5AED8/ref=dp_byline_cont_pop_ebooks_1)によって執筆された [React](https://ja.reactjs.org/) の入門書です。本記事では，「React.js & Next.js 超入門」から何を得られるかを各章ごとに要約しています。「React.js & Next.js 超入門」の購入を検討されている方の参考になれば幸いです。

## 2. 目次

### Chapter 1: React を準備しよう！

　Chapter 1 では，まず初めにクライアントサーバモデルや仮想 DOM などの Web に関する基本的な用語が解説されています。次に，Node.js のインストール方法や使い方が丁寧に解説されています。最後に，Visual Studio Code のインストール方法と使い方が解説されています。Chapter 1 を読むことで，Web 界隈における React の立ち位置と開発環境の構築方法を学ぶことが出来ます。

　Node.js と Visual Studio Code のインストール方法は，Windows 版と MacOS 版のみが掲載されているため，Linux ユーザーは注意が必要です。また，以降の Chapter で Visual Studio Code を使用していないと困る場面は特にありません。そのため，テキストエディタが無い場合は Visual Studio Code をインストールし，愛用しているテキストエディタがあればスキップして問題ありません。

### Chapter 2: JSX をマスターしよう！

　Chapter 2 では，代入や配列操作，レンダリングなどの JSX の基礎が解説されています。動作可能な複数のサンプルコードと解説が掲載されており，複雑な文法も使用していないため，プログラミング初心者の人でも問題なく読み進めることが可能だと思います。

### Chapter 3: コンポーネントをマスターしよう！

　Chapter 3 では，まず初めに関数コンポーネントが解説されています。関数コンポーネントに関しては基本的な部分のみが解説されており，[React Hooks](https://ja.reactjs.org/docs/hooks-intro.html) との関わりは解説されていません。次に，クラスコンポーネントが解説されています。最後に，ステートやイベンドバインド，コンテキストなどが解説されています。また，Chapter 3 の前半までは CDN を用いた React を用いていましたが，Chapter 3 の後半からは Node.js を用いた React に移行しています。

### Chapter 4: Redux で値を管理しよう！

　Chapter 4 では，まず初めに Redux の仕組みと使い方が解説されています。次に，簡易メモアプリの開発を例としたサンプルコードと解説が記載されています。最後に，Redux Persist を活用したデータの永続化が解説されています。Chapter 4 を読むことで，Redux の仕組みと CRUD 操作，データの永続化方法などを学ぶことが出来ます。

### Chapter 5: Next.js で React をパワーアップしよう！

　Chapter 5 では，まず初めに SSR や Next.js の基礎が解説されています。次にルーティンとコンポーネントについて解説されています。最後に，Next.js と Redux を組み合わせた足し算専用電卓のサンプルコードと解説が掲載されています。

### Chapter 6: Firebase でデータベースを使おう！

　Chapter 6 では，まず初めに [Firebase Realtime Database](https://firebase.google.com/docs/database) が解説されています。次に，React を用いて Firebase Realtime Database を CRUD する方法が解説されています。最後に，メッセージ機能付アドレスブックの開発を通して [Firebase Authentication](https://firebase.google.com/docs/auth) が解説されています。

### Addendum: JavaScript オブジェクト超入門

　Addendum では，JavaScript に関する基礎が解説されています。Chapter 1 から Chapter 6 で掲載されているソースコード内で使用されている文法は，Addendum で掲載されている内容でカバー出来るように配慮されています。そのため，Chapter 1 から Chapter 6 で掲載されているソースコードを理解する分には，追加で JavaScript に関する技術書を購入する必要は無いと思います。

## 3. おわりに

　ここまで，「React.js & Next.js 超入門」から何を得られるかを各章ごとに要約してきました。個人的な感想として，初心者が疑問に感じそうな点を Tips として全体に配置したり，掲載しているソースコードの文法はなるべくシンプルなものを使用したりと，全体的な印象としてプログラミング初心者に配慮してデザインされているなと感じました。

　Chapter 1 から Chapter 3 までは，プログラミング初心者の人でも問題なく読み進めることが出来ると思います。しかし，Chapter 4 から Chapter 6 は難易度が上がるためプログラミング初心者の人には難しいと感じる部分があると思います。しかし，上記でも述べたとおりプログラミング初心者に配慮したデザインになっているため，HTML や CSS，JavaScript に関する技術書を追加で購入する必要は無いと思います。その一方，React Hooks やアンチパターン，Next.js に関する情報が欲しい人にはオススメできません。