+++
slug = "column-hugo-tailwind-alpine-netlify-cms-build-jamstack-blog"
image = "cfc29025d9a0575216282544e099e8d0.png"
title = "Hugo + Tailwind CSS + Alpine.js + Netlify CMS を用いた JAMStack なブログサイトの構築"
publishDate = 2020-12-03T16:57:01.472Z
lastmod = ""
tags = ["Column", "Hugo", "Tailwind CSS", "Alpine.js", "Netlify CMS"]
weight = 0
draft = false
googleAds = true
+++
## はじめに

　本ブログサイトは，Go 言語製の静的サイトジェネレーターである Hugo とユーティリティ指向の CSS ライブラリである Tailwind CSS，軽量型の JavaScript フレームワークである Alpine.js，Netlify 社が提供している静的ウェブサイトである Netlify，同じく Netlify 社が提供しているヘッドレス CMS である Netlify CMS を用いて構築しています。

　これらのソフトウェアやサービスは，Hugo と Gastby.js，Tailwind CSS と Boostrap，Alpine.js と Vue.js，Netlify と Vercel，Netlify CMS と microCMS など，類似するものが多く存在します。これらのソフトウェアやサービスから，自分に適したソフトウェアやサービスを比較，選択するのは大きな労力がかかります。

　そこで，本記事では JAMStack なブログサイトを構築，もしくは運用しようと考えている人に向け，上記のソフトウェアとサービスの概要，選択した理由，使用した感想などを記述します。また，ブログ記事を作成してから公開するまでのシステムアーキテクチャについても記述します。

## Hugo

[![Hugo](95a8716b0089229bb8afced7b37a656c.png)](https://gohugo.io/)

　Hugo は，Go 言語製の静的サイトジェネレーターであり，静的サイトジェネレーターの中でもトップクラスの[人気](https://jamstack.org/generators/)と[パフォーマンス](https://qiita.com/tnzk/items/4863e2c559f6b71b72e0#%E6%A4%9C%E8%A8%BC%E7%B5%90%E6%9E%9C)が特徴的です。

要求分析の段階では，Go 言語製の静的サイトジェネレーターということもあり，Go 言語に関する知識が必要になるかもしれないという懸念点がありました。しかし，ブログサイトを構築する分には Go 言語の知識が必要になる場面は存在しませんでした。

Hugo は Go 言語標準のテンプレートエンジンや組み込み関数を用いているため，Go 言語の知識があればスムーズに学習と開発が行えると思います。

## Tailwind CSS

[![Tailwind CSS](a1f75b55d405d9ac433e2983077071a0.png)](https://tailwindcss.com/)

　Tailwind CSS は，

## Alpine.js

　XXX

## Netlify

　XXX

## Netlify CMS

　XXX

## システムアーキテクチャ

　XXX

## おわりに

　XXX