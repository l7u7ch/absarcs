+++
slug = "customize-tailwind-css-color-palette"
image = "c1090e2c651cce9c7b348fd3d5155914.png"
title = "Tailwind CSS のカラーパレットをカスタマイズする"
publishDate = "2021-01-05T15:28:40+0900"
lastmod = "2021-01-05T15:28:40+0900"
tags = ["Tailwind CSS", "CSS"]
weight = 0
googleAds = true
+++

## 1. はじめに

　[Tailwind CSS](https://tailwindcss.com/) は，合計 220 色の[カラーパレット](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)がデフォルトで提供されています。また，*tailwind.config.js* を編集することによって，カラーパレットをカスタマイズすることが出来ます。本記事では，Tailwind CSS のカラーパレットをカスタマイズする方法について記述します。

## 2. 上書きと拡張

　Tailwind CSS のカラーパレットをカスタマイズする方法として，デフォルトのカラーパレットを上書きする方法と，デフォルトのカラーパレットを拡張する方法が挙げられます。下記のように，root ➔ theme ➔ colors の直下にカラーネームとカラーコードを設定することで，デフォルトのカラーパレットを上書きすることが出来ます。下記の例では，*bg-regal-blue* や *text-regal-blue* などの設定したカラーパレットが使用可能な状態になります。しかし，
*bg-black* や *text-white* などのデフォルトで設定されているカラーパレットが*使用不可*の状態になることに注意が必要です。

```js
// tailwind.config.js

module.exports = {
  theme: {
    colors: {
    'regal-blue': '#243c5a',
    }
  }
}
```

　root ➔ theme ➔ extend ➔ colors の直下にカラーネームとカラーコードを設定することで，デフォルトのカラーパレットを拡張することが出来ます。下記の例では，上記の例とは異なり，*bg-regal-blue* や *text-regal-blue* などの設定したカラーパレットに加え，*bg-black* や *text-white* などのデフォルトで設定されているカラーパレットも使用することが出来ます。

```js
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    }
  }
}
```

　チームで開発する際に，使用するカラーパレットを統一する場合は*上書き*を，それ以外の場合は*拡張*でカラーパレットをカスタマイズするのがベストプラクティスだと思います。

<!-- 上書きをすることでビルド時のファイルサイズを削減することが出来ます。しかし，本番環境にデプロイする際に PurgeCSS を利用してファイルサイズを削減するため，大きなアドバンテージにはなりません。 -->

## 3. カスタムカラー

　上記の例では，カラーネームとカラーコードを 1 対 1 で設定しましたが，下記のようにネストして設定することも出来ます。下記の例で重要なのが『修飾子なし』を表す *DEFAULT* キーです。下記の設定でビルド処理を行った場合，*\*-blue-light* や *\*-blue*，*\*-blue-dark* は生成されますが，*\*-blue-DEFAULT* は生成されません。

```js
// tailwind.config.js

module.exports = {
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      }
    }
  }
}
```

## 4. キュレーションカラー

　上記のようにカラーネームとカラーコードを設定する方法の他，下記のように Tailwind CSS が提供しているカラーパレットをインポートしてカスタマイズする方法もあります。提供されているカラーパレットは，公式の[カラーパレットリファレンス](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)を参照して下さい。

```js
// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      colors: {
          emerald: colors.emerald,
          violet: colors.violet,
          rose: colors.rose,
      }
    }
  }
}
```

## 5. おわりに

　ここまで，Tailwind CSS のカラーパレットをカスタマイズする方法について記述してきました。Tailwind CSS では，ハイクオリティなカラーパレットがデフォルトで提供されているため，ベースカラーやブランドカラーが設定されていないプロジェクトでも，スムーズに開発を進めることが出来ます。