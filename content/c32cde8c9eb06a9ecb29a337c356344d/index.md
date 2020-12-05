+++
slug = "c32cde8c9eb06a9ecb29a337c356344d"
image = "bb7b624e657bd39fb3a942413151bf49.png"
title = "UWP 版の Inkscape の設定を初期化する方法"
publishDate = "2019-09-05T00:00:00+09:00"
lastmod = "2020-04-07T01:37:00+09:00"
tags = ["Tips", "Inkscape", "UWP" ]
googleAds = true
+++

## 1. はじめに

　Inkscape はオープンソースで開発されているベクトル画像編集ソフトウェアです。ネイティブ版の Inkscape に関する初期化方法はネット上に公開されています。しかし，UWP 版の Inkscape に関する初期化方法が調査した範囲ないで確認できませんでした。そこで，本記事では，UWP 版の Inkscape の設定を初期化する方法について記述します。

## 2. ネイティブ版

　[ネット記事](https://npokasc.com/pc/post-14020/)によると，ネイティブ版の Inkscape は *%username%\AppData\Roaming\inkscape\\* の直下に存在する *preferences.xml* を削除することで初期化されるそうです。しかし，UWP 版の Inkscape は，ネイティブ版の Inkscape と異なった場所にフォルダを作成するので，ネイティブ版の Inkscape と同じ手順で初期化することができません。

## 3. UWP 版

　[Stack Overflow](https://stackoverflow.com/questions/52934042/uwp-settings-file) によると，UWP アプリケーションは *%username%\AppData\Local\Packages\\* の直下にアプリケーションフォルダを作成するのが通例だそうです。ローカルマシンで確認すると，*%username%\AppData\Local\Packages\\* の直下に Inkscape の名前が入ったフォルダを確認することができます。更に，LocalCache → Roaming → inkscape とフォルダを移動すると，*preferences.xml* ファイルが確認できます。*preferences.xml* ファイルを削除し，Inkscape の設定が初期化されれば成功です。

## 4. おわりに

　ここまで，UWP 版の Inkscape の設定を初期化する方法について記述してきました。本記事が，UWP 版の Inkscape を愛用しているユーザーの一助になれば幸いです。

## 環境情報

 * Inkscape Ver.0.92.4 
 * Windows 10 Ver.1809