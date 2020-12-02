+++
image = "06ebab7d097dc0f8eca4aaf2c3fa0e34.png"
title = "メイン OS を Windows から Linux にするメリット・デメリット"
date = "2020-01-12T00:41:40+09:00"
lastmod = ""
tags = [ "Column", "Linux", "Windows" ]
googleAds = true
+++

## 1. はじめに

　筆者がメインマシンのストレージにインストールされている OS を Windows から Linux に置き換え，Linux をメイン OS として運用し始めてから約 4 年が経過します。本記事では，その過程で得られたメリット・デメリットについて記述します。

## 2. メリット

### 2.1. ジャンクハードを復活可能

　OS がインストールされていないノート PC や Windows 10 にサポートしていないマザーボードなど，世間一般的にジャンク品といわれるようなレガシーハードウェアも，[Puppy Linux](http://puppylinux.com/) などの軽量 Linux ディストリビューションを使用することでコンピューターとして再活用可能です。筆者も中古で購入した ThinkPad に Linux をインストールしてメインマシンとして利用しています。

### 2.2. プログラミングの環境構築が容易

　コンパイルをインストールしてパスを通すというプログラミング初心者が躓きやすい開発環境構築も，Linux であればパッケージ管理システムが代行してくれるのでコマンド 1 つで解決可能です。しかし，近年は [paiza.io](https://paiza.io/) などのブラウザ上でプログラミング可能なサービスがリリースされているので，「プログラミングの環境構築が容易」が Linux のメリットではなくなる日も近いかもしれません。

### 2.3. 様々なデスクトップ環境が存在

　Linux では，[GNOME](https://www.gnome.org/) や [KDE](https://kde.org/) などの古参デスクトップ環境から [Budgie Desktop](https://wiki.archlinux.jp/index.php/Budgie_Desktop) や [Pantheon](https://wiki.archlinux.jp/index.php/Pantheon) などのモダンデスクトップ環境まで多種多様なデスクトップ環境が利用可能です。ユーザーは自分が気に入ったデスクトップ環境を導入してカスタマイズすることも可能です。筆者は，GNOME ベースのデスクトップ環境を愛用しています。

## 3. デメリット

### 3.1. Microsoft Office が使用不可

　ブラウザ上で動作する [Office Online](https://products.office.com/ja-jp/free-office-online-for-the-web) や Office 互換フリーソフトである [LibreOffice](https://ja.libreoffice.org/) などが登場しているが，世間一般では未だに Microsoft Office がデファクトスタンダードとして君臨しています。そのため，チーム内でファイル共有をする度に互換性や作業効率の問題が発生します。筆者も Linux と Windows のデュアルブート構成にしたり，Microsoft Office 用に Windows 機を準備したりと模索しましたが，作業効率の低下は避けられませんでした。チーム全体で脱 Microsoft Office しない限り，この問題は解決できないと思います。

### 3.2. ドキュメントがない場合が多々存在

　ここ数年で Linux の知名度が上がったとはいえ Linux は未だマイナー OS です。そのため，Wi-Fi やプリンターの設定ドキュメントに Linux の項目だけないことが多々存在します。そのため，ユーザー自身でドライバーを見つけてインストールするなどの専門的な知識が要求されることも珍しくありません。

### 3.3. 実行不可のゲームが多々存在

　Linux 対応のゲームプラットフォームである [Steam](https://store.steampowered.com/) や Windows アプリケーションを Linux 上で動作可能にする [Wine](https://www.winehq.org/) などの技術が発展しているが，Linux 上で動作可能なゲームタイトルは多々存在する。また，Wine を使用するとゲームのパフォーマンスが本来より下がるため AAA 級や競技性が高いゲームタイトルは事実上プレイ不可な場合が多いです。

## 4. おわりに

　ここまで，メイン OS を Windows から Linux にするメリット・デメリットについて記述してきました。5G やゲームストリーミングサービスである Google Stadia など，通信や Web の技術が飛躍的に進歩しているので OS による差異は，今後どんどんなくなっていくと思われます。しかし，ネイティブアプリケーションでしか動作しないものも多々存在するので，ユーザーのライフスタイルに合わせる必要はあると思います。