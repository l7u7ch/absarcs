+++
slug = "5a24503b476cde19486f123da98b1991"
image = "e7d8548680b6123c2361613f3ea0de1a.png"
title = "Python 3 + OpenCV を用いて動画の長さを取得する"
publishDate = "2018-02-06T00:00:00+09:00"
lastmod = "2018-12-19T00:00:00+09:00"
tags = [ "OpenCV", "Programming", "Python" ]
googleAds = true
weight = 3
+++

## 1. 概要

本記事は Python 3 + OpenCV を用いて動画の長さを取得するスクリプトの解説・実行結果を記述した記事である。

## 2. 環境情報

下記で行う作業は以下の環境下で行ったものである。

 * Antergos（Arch Linux）
 * Python Ver.3.6.4
 * OpenCV Ver.3.4.0

## 3. スクリプトと実行結果

以下に指定した動画の長さを計算・出力するスクリプト（VideoLen.py）と，その実行結果を示す。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import cv2

if __name__ == '__main__':
    cap = cv2.VideoCapture("sample.mp4")            # 動画を読み込む
    video_frame = cap.get(cv2.CAP_PROP_FRAME_COUNT) # フレーム数を取得する
    video_fps = cap.get(cv2.CAP_PROP_FPS)           # FPS を取得する
    video_len_sec = frame / fps                     # 長さ（秒）を計算する
    print(video_len_sec)                            # 長さ（秒）を出力する
```

図 1 VideoLen.py

```bash
$ ./VideoLen.py
749.8741249999999
```

図 2 VideoLen.py の実行結果

## 4. まとめ

CAP_PROP_LENGTH のような動画の長さを格納するプロパティが標準で用意されているものと思い込んで沼にハマりました。

## 参考資料

 *  [Antergos（Arch Linux）に Python 3 + OpenCV の環境を構築する - Qiita](https://qiita.com/l7u7ch/items/a4c50a8c7c07ae538d40)
 * [OpenCV: Flags for video I/O](https://docs.opencv.org/3.2.0/d4/d15/group__videoio__flags__base.html#gaeb8dd9c89c10a5c63c139bf7c4f5704d)
 *  [OpenCVの動画プロパティを取得する - Qiita](https://qiita.com/takahiro_itazuri/items/e740f0a1b5165fafa6ac)


