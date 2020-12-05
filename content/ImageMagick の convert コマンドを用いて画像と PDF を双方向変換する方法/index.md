+++
slug = "f350d46f4c44ab4d15f576626b441105"
image = "e01071c3dfa4eccbc8fe58222210a8ab.png"
title = "ImageMagick の convert コマンドを用いて画像と PDF を双方向変換する方法"
publishDate = "2019-11-06T01:25:54+09:00"
lastmod = "2019-11-06T01:25:54+09:00"
tags = ["Tips", "ImageMagick", "convert"]
googleAds = true
+++

## 1. はじめに

　[ImageMagick](https://imagemagick.org/index.php) は，200 種類以上のフォーマットに対応しているコマンドライン群です。本記事では，ImageMagick に同梱されている convert コマンドを用いて画像ファイルを PDF に変換する手順と PDF ファイルから画像ファイルを抽出する手順について記述します。

## 2. 環境構築

　画像ファイルを PDF に変換する際，*not authorized* というエラーが出力される場合があります。Ubuntu の場合は，*/etc/ImageMagick-6/policy.xml* の 76 行目に記述されている以下のコードを削除します。また，macOS 版の ImageMagick でも同様の手順でエラーを回避可能です。しかし，*policy.xml* の場所が Ubuntu とは異なるため，[ネット記事](https://qiita.com/atuyosi/items/b782ab2130570b72aa93)を参考にしてください。

```XML
<policy domain="coder" rights="none" pattern="PDF" />
```

## 3. 画像 ➔ PDF

　10 個の PNG ファイルを convert コマンドを用いて PDF に変換する手順を以下に示します。

```bash
$ ls -lh
合計 2.1M
-rw-r--r-- 1 admin admin 243K 11月  0 00:00 1.png
-rw-r--r-- 1 admin admin 208K 11月  0 00:00 10.png
-rw-r--r-- 1 admin admin 210K 11月  0 00:00 2.png
-rw-r--r-- 1 admin admin 232K 11月  0 00:00 3.png
-rw-r--r-- 1 admin admin 219K 11月  0 00:00 4.png
-rw-r--r-- 1 admin admin 203K 11月  0 00:00 5.png
-rw-r--r-- 1 admin admin 195K 11月  0 00:00 6.png
-rw-r--r-- 1 admin admin 218K 11月  0 00:00 7.png
-rw-r--r-- 1 admin admin 199K 11月  0 00:00 8.png
-rw-r--r-- 1 admin admin 207K 11月  0 00:00 9.png
$ convert `ls | sort -n` out.pdf
$ ls -lh out.pdf 
-rw-r--r-- 1 admin admin 2.2M 11月  0 00:01 out.pdf
```

　convert コマンドは，正規表現を用いて入力ファイルを選択することが可能です。しかし，正規表現を用いた場合は *10.png* が望ましくない位置に設定された PDF ファイルが出力されます。そこで，ls コマンドと sort コマンドを用いて調整しています。

## 4. PDF ➔ 画像

　PDF ファイルから画像ファイルを抽出する手順を以下に示します。

```bash
$ convert out.pdf img.png
$ ls -lh
合計 8.2M
-rw-r--r-- 1 admin admin 846K 11月  0 00:02 img-0.png
-rw-r--r-- 1 admin admin 743K 11月  0 00:02 img-1.png
-rw-r--r-- 1 admin admin 314K 11月  0 00:02 img-2.png
-rw-r--r-- 1 admin admin 333K 11月  0 00:02 img-3.png
-rw-r--r-- 1 admin admin 275K 11月  0 00:02 img-4.png
-rw-r--r-- 1 admin admin 689K 11月  0 00:02 img-5.png
-rw-r--r-- 1 admin admin 770K 11月  0 00:02 img-6.png
-rw-r--r-- 1 admin admin 708K 11月  0 00:02 img-7.png
-rw-r--r-- 1 admin admin 713K 11月  0 00:02 img-8.png
-rw-r--r-- 1 admin admin 733K 11月  0 00:02 img-9.png
-rw-r--r-- 1 admin admin 2.2M 11月  0 00:01 out.pdf
```

## 5. おわりに

　4 章の結果より，convert コマンドを用いた変換は不可逆であるということがわかりました。convert コマンドを用いて可逆的な変換が可能か。また，他のコマンドラインツールに関する情報収集などを今後の課題にしたいと思います。

## 環境情報

* ImageMagick Ver.6.9.7-4
* Zorin OS 15 Core (Ubuntu 18.04 LTS)