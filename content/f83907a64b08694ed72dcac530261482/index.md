+++
image = "06ebab7d097dc0f8eca4aaf2c3fa0e34.png"
title = "Zotero を Ubuntu にインストールする方法"
publishDate = "2020-01-03T01:14:00+09:00"
lastmod = "2020-04-10T05:22:00+09:00"
tags = [ "Linux", "Ubuntu", "Zotero" ]
googleAds = true
+++

## 1. はじめに

　Zotero は，オープンソースの文献管理ツールです。Windows と Mac 版は，それぞれインストーラーと dmg ファイルが提供されているので，簡単にインストールが可能できます。しかし，Linux 版はいくつかの手順を踏む必要があります。そこで，本記事では[公式のドキュメント](https://www.zotero.org/support/installation)に従って，Zotero を Ubuntu にインストールする方法について記述します。

## 2. インストール

　まず初めに，[公式のダウンロードページ](https://www.zotero.org/download/)から圧縮ファイルをダウンロードし，任意の場所に保存します。保存が完了したら以下の手順を実行します。

1. ダウンロードした圧縮ファイルを解凍します  
2. 解凍したフォルダを */opt/* の直下に *zotero* という名前で移動します  
3. *zotero* フォルダ内に存在する *set_launcher_icon* を用いてデスクトップエントリファイルを作成します  
4. *~/.local/share/applications/* の直下に (3) で作成したデスクトップエントリファイルへのシンボリックリンクを作成します

```bash
$ ls
Zotero-5.0.80_linux-x86_64.tar.bz2
$ tar -xf Zotero-5.0.80_linux-x86_64.tar.bz2 # (1)
$ ls
Zotero-5.0.80_linux-x86_64.tar.bz2  Zotero_linux-x86_64
$ sudo cp -r Zotero_linux-x86_64/ /opt/zotero/ # (2)
$ sudo /opt/zotero/set_launcher_icon # (3)
$ ls /opt/zotero/zotero.desktop
/opt/zotero/zotero.desktop
$ ln -s /opt/zotero/zotero.desktop ~/.local/share/applications/zotero.desktop # (4)
```

## 3. おわりに

　ここまで，Zotero を Ubuntu にインストールする方法について記述してきました。[公式のドキュメント](https://www.zotero.org/support/installation)によると，アップグレード機能が Zotero に備わっているので自動更新されるようです。そのため，アップグレードの度に本記事の手順を行う必要はありません。

## 環境情報

* Zotero Ver.5.0.80
* Bash Ver.4.4.20
* Zorin OS 15 Core (Ubuntu 18.04 LTS)