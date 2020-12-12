+++
slug = "tips-turning-react-apps-into-desktop-apps-with-electron"
image = "45562a0ed573b34514e16ba628fcf473.png"
title = "React アプリを Electron でデスクトップアプリ化する"
publishDate = "2020-12-12T16:39:00+0900"
lastmod = "2020-12-12T16:39:00+0900"
tags = ["Tips", "React", "Electron"]
weight = 0
googleAds = true
draft = true
+++

## 1. はじめに

　XXX

## 2. React App の生成

　Create React App の [README.md](https://github.com/facebook/create-react-app) に従って，React アプリのテンプレートを任意のフォルダ内に生成します。[tree](https://www.atmarkit.co.jp/ait/articles/1802/01/news025.html) コマンドを用いて確認すると，正常に React アプリのテンプレートが生成されていることが確認できます。

```bash
$ npx create-react-app my-app
$ ls
my-app
$ cd my-app
$ tree -L 2
.
├── README.md
├── node_modules
│   ├── @babel
│   ├── @bcoe
│   ├── @cnakazawa
│   ├── (割愛)
│   ├── yaml
│   ├── yargs
│   └── yargs-parser
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

## 3. パッケージの追加

　electron-quick-start の [README.md](https://github.com/electron/electron-quick-start) に従って

[公式サイト](https://www.electronjs.org/)

```bash
$ git clone https://github.com/electron/electron-quick-start
$ ls
electron-quick-start
$ cd electron-quick-start
```

```bash
$ npm i -D electron@latest
```

## 4. JavaScript の追加

　XXX

## 5. package.json の編集

　XXX

## 6. 動作確認

　XXX

## 7. おわりに

　XXX