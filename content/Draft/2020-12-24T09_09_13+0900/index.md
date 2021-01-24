+++
slug = "install-tailwind-css-hugo"
image = "4ee819f2e4b608474d31dc79a15c9a59.png"
title = "Hugo に Tailwind CSS をインストールする"
publishDate = "2021-01-24T11:15:00+0900"
lastmod = "2021-01-24T11:15:00+0900"
tags = ["Tech", "Hugo", "Tailwind CSS", "CSS"]
weight = 0
googleAds = true
draft = true
+++

## 1. はじめに

　Hugo には，*assets* ディレクトリ下に配置している CSS ファイルやメディアファイルなどのアセットを処理する [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) が標準で実装されており，[PostCSS](https://gohugo.io/hugo-pipes/postcss/) も操作することも出来ます。Tailwind CSS をインストールする方法として Tailwind CLI や CDN を活用した方法の他，PostCSS のプラグインとしてインストールする方法があります。本記事では，これらの機能と特徴を活用して Hugo に Tailwind CSS をインストールする手順について記述します。

　本記事で行っている作業は，以下の環境下で実行したものです。また，npm と Hugo はインストール済みの前提で記述しており，インストール手順は割愛していることをご了承ください

* npm Ver.6.14.11
* Hugo Ver.0.80.0
* Zorin OS 15 Core (Ubuntu 18.04 LTS)

## 2. XXX

```bash
$ hugo new site quickstart
$ cd quickstart
$ mkdir assets
$ touch assets/style.css
$ touch layouts/index.html

$ npm init -y
$ npm install tailwindcss@latest postcss-cli@latest autoprefixer@latest
```