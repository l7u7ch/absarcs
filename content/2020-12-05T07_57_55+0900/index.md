+++
slug = "tips-vanilla-javascript-lodash-accumulate-dictionary"
image = "d6afde5c20e6612530bd8afaf1695704.png"
title = "Vanilla JS と Lodash で連想配列を累計する"
publishDate = "2020-12-05T07:57:55+0900"
lastmod = "2020-12-05T07:57:55+0900"
weight = 0
googleAds = true
draft = true
tags = ["Tips", "JavaScript", "Lodash"]
+++
## 1. はじめに

　本記事では，JavaScript を用いて以下ような連想配列を累計する方法について考えます。様々な実装方法が考えられますが，本記事では Vanilla JS を用いた方法とユーティリティライブラリである [Lodash](https://lodash.com/) を用いた方法について記述します。

```bash
# 処理前

[
    { date: '2020-01-01', sales: 100 },
    { date: '2020-01-02', sales: 200 },
    { date: '2020-01-03', sales: 300 },
]

# 処理後

[
  { date: '2020-01-01', sales: 100, accumulation: 100 },
  { date: '2020-01-02', sales: 200, accumulation: 300 },
  { date: '2020-01-03', sales: 300, accumulation: 600 }
]
```

　本記事内で行っている作業は以下の環境下で実行したものです。また，Node.js や Lodash はインストール済みの前提で記述しており，インストール手順は割愛していることをご了承ください。

* Lodash Ver.4.17.20
* Node.js Ver.12.18.3
* Zorin OS 15.2 Core (Ubuntu 18.04 LTS)

## 2. Vanilla JS

　様々な実装が考えられますが，今回はインターネットで公開されている[記事](https://www.it-swarm-ja.tech/ja/javascript/javascript%E3%81%A7%E7%B4%AF%E7%A9%8D%E5%90%88%E8%A8%88%E3%81%AE%E9%85%8D%E5%88%97%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/1042626037/)を参考に，[reduce](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) を用いることで累計を実装しています。

```js
const after = before.reduce((acc, cur, idx) => {
    if (acc.length) {
        cur.accumulation = cur.sales + acc[idx - 1].accumulation;
    } else {
        cur.accumulation = cur.sales;
    }
    acc.push(cur);
    return acc;
}, []);

console.log(after);
```

　上記のソースコードを *app.js* というファイル名で任意のフォルダ内に保存します。app.js を実行すると，正常に累計されていることが確認できました。

```bash
$ node app.js
[
  { date: '2020-01-01', sales: 100, accumulation: 100 },
  { date: '2020-01-02', sales: 200, accumulation: 300 },
  { date: '2020-01-03', sales: 300, accumulation: 600 }
]
```

## 3. Lodash

## 4. おわりに