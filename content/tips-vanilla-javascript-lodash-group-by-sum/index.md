+++
image = "d6afde5c20e6612530bd8afaf1695704.png"
title = "Vanilla JS と Lodash で GROUP BY + SUM する"
date = "2020-07-09T03:58:24+09:00"
lastmod = ""
tags = [
  "Tips",
  "JavaScript",
  "Lodash",
]
googleAds = true
+++

## 1. はじめに

　本記事では，以下のデータ処理を JavaScript で行う方法について考えます。様々な実装方法が考えられますが，本記事では Vanilla JS を用いた方法とユーティリティライブラリである Lodash を用いた方法について記述します。

```js
# 処理前

[
    { date: '2020-01-01', sales: 100 },
    { date: '2020-01-01', sales: 200 },
    { date: '2020-01-01', sales: 300 },
    { date: '2020-01-02', sales: 100 },
    { date: '2020-01-02', sales: 200 },
    { date: '2020-01-03', sales: 100 },
]

# 処理後

[
    { date: '2020-01-01', sales: 600 },
    { date: '2020-01-02', sales: 300 },
    { date: '2020-01-03', sales: 100 },
]

```

　本記事内で行っている作業は以下の環境下で実行したものです。また，Node.js や Lodash はインストール済みの前提で記述しており，インストール手順は割愛していることをご了承ください。

* Lodash Ver.4.17.19
* Node.js Ver.12.18.1
* Zorin OS 15.2 Core (Ubuntu 18.04 LTS)

## 2. Vanilla JS

　インターネットで公開されている[記事](https://zukucode.com/2017/05/javascript-object-sql-group-by.html)を参考に，Vanilla JS で実装したソースコードと，その実行結果を以下に示します。[reduce](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) と [find](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find) を用いることで関数型プログラミングによる実装を実現しています。

```js {linenos=table}
const before = [
    { date: '2020-01-01', sales: 100 },
    { date: '2020-01-01', sales: 200 },
    { date: '2020-01-01', sales: 300 },
    { date: '2020-01-02', sales: 100 },
    { date: '2020-01-02', sales: 200 },
    { date: '2020-01-03', sales: 100 },
];

const after = before.reduce((acc, crt) => {
    const result = acc.find(elem => {
        return elem.date === crt.date
    });
    if (result) {
        result.sales += crt.sales;
    } else {
        acc.push({
            date: crt.date,
            sales: crt.sales
        });
    }
    return acc;
}, []);

console.log(after);
```

```js
$ node app.js
[
  { date: '2020-01-01', sales: 600 },
  { date: '2020-01-02', sales: 300 },
  { date: '2020-01-03', sales: 100 }
]
```

## 3. Lodash

　Lodash が提供している [groupBy](https://lodash.com/docs/4.17.15#groupBy) と [map](https://lodash.com/docs/4.17.15#map)，[sumBy](https://lodash.com/docs/4.17.15#sumBy) を組み合わせて実装したソースコードと，その実行結果を以下に示します。

```js {linenos=table}
const _ = require('lodash');

const before = [
    { date: '2020-01-01', sales: 100 },
    { date: '2020-01-01', sales: 200 },
    { date: '2020-01-01', sales: 300 },
    { date: '2020-01-02', sales: 100 },
    { date: '2020-01-02', sales: 200 },
    { date: '2020-01-03', sales: 100 },
];

const after = _(before)
    .groupBy(
        'date'
    )
    .map((value, key) => {
        return {
            'date': key,
            'sales': _.sumBy(value, 'sales'),
        };
    })
    .value();

console.log(after);
```

```js
$ node app.js
[
  { date: '2020-01-01', sales: 600 },
  { date: '2020-01-02', sales: 300 },
  { date: '2020-01-03', sales: 100 }
]
```

## 4. おわりに

　ここまで，Vanilla JS と Lodash を用いて GROUP BY + SUM する方法について記述してきました。Lodash を用いて実装したソースコードの方が直感的で理解しやすい印象を受けました。今回は実行速度を計測していないため，パフォーマンスの観点から比較することが出来ていません。