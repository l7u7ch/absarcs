+++
slug = "25c540e7e79ee9f2d838c462c0da4f22"
image = "e01071c3dfa4eccbc8fe58222210a8ab.png"
title = "badblocks の出力に含まれるエラーの詳細"
publishDate = "2019-05-28T00:00:00+09:00"
lastmod = "2019-05-28T00:00:00+09:00"
tags = ["Tips", "badblocks"]
googleAds = true
+++

## 1. はじめに
　badblocks は，ストレージデバイスの不良ブロックを検出するプログラムであり，ストレージデバイスの健康状態を測定するために使用されます。[map page](https://linux.die.net/man/8/badblocks) によると，Remy Card 氏によって開発され，現在は Theodore Ts'o 氏によってメンテナンスされているようです。

## 2. 疑問
　正常なストレージデバイスと不正ブロックが含まれるストレージデバイスに，それぞれ badblocks を実行すると以下のような結果が出力される。

```bash:正常なストレージデバイス
Pass completed, 0 bad blocks found. (0/0/0 errors)
```

```bash:不正ブロックが含まれるストレージデバイス
Pass completed, 128 bad blocks found. (128/0/0 errors)
```

　"Pass completed, X bad blocks found." の後ろに位置する丸括弧内には，3 つのエラーが表示されています。しかし，これらのエラーに関する情報は [map page](https://linux.die.net/man/8/badblocks) に記載されていません。それぞれのエラーが何を意味するのかを調べます。

## 3. 回答
　[ArchWiki](https://wiki.archlinux.jp/index.php/Badblocks) や Stack Exchange の[スレッド](https://unix.stackexchange.com/questions/65349/how-to-interpret-badblocks-output)によると「読み取りエラー・書き込みエラー・破損エラー」と分類されています。また，Server Fault の[スレッド](https://serverfault.com/questions/664705/badblocks-output-read-write-compare-errors-explanation)では 以下のように分類されています。

 * 読み取りエラー:　読み込めなかったブロック数
 * 書き込みエラー:　書き込めなかったブロック数
 * 破損エラー:　　　書き込んだデータと読み込んだデータが異なるブロック数

## 4. おわりに
　badblocks は OSS なので，もっと詳細が知りたい人は[ソースコード](https://git.kernel.org/pub/scm/fs/ext2/e2fsprogs.git/tree/misc/badblocks.c)を参照してみてください。