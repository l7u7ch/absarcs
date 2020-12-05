+++
slug = "efd3e0e8ee38175272f8cbea3d39f1ff"
image = "e7d8548680b6123c2361613f3ea0de1a.png"
title = "Python でシーザ暗号を実装する"
publishDate = "2018-01-01T00:00:00+09:00"
lastmod = "2018-12-20T00:00:00+09:00"
tags = ["Tips", "Python"]
googleAds = true
+++

## 1. はじめに
　Python には ROT13 が組み込まれているため，シーザー暗号をフルスクラッチで実装する必要はない。しかし，鍵が 13 で固定のため，汎用性に欠ける。そこで，本記事ではシーザー暗号の暗号化，復号化，及び，解析 (ブルートフォースアタック) を行うスクリプトを  Python で実装し，実行結果を確認する。  
　続く 2 章では，作業を行う環境について記述する。3 章では，暗号化スクリプトについて記述する。4 章では，復号化スクリプトについて記述する。5 章では，解析スクリプトについて記述する。6 章では，本記事のまとめを記述する。

## 2. 環境情報
　次章以降で行う作業は以下の環境下で行ったものである。

 * Python Ver.3.6.4
 * Antergos（Arch Linux）

## 3. 暗号化スクリプト
　平文を暗号化するスクリプトのソースコードと，その実行結果を以下に示す。

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def encrypt(str, key):
    ciphertext = ""

    for ch in list(str):
        if 'A' <= ch <= 'Z':
            ciphertext += chr((ord(ch) - ord('A') - key) % 26 + ord('A'))
        elif 'a' <= ch <= 'z':
            ciphertext += chr((ord(ch) - ord('a') - key) % 26 + ord('a'))
        else:
            ciphertext += ch

    return ciphertext

if __name__ == '__main__':
    plaintext = input("PLEASE INPUT PLAINTEXT : ")
    key = input("PLEASE INPUT KEY : ")
    ciphertext = encrypt(plaintext, int(key))

    print("CIPHERTEXT : " + ciphertext)

    input("PLEASE PRESS ANY")
```

```bash
PLEASE INPUT PLAINTEXT : Apple
PLEASE INPUT KEY : 13
CIPHERTEXT : Nccyr
PLEASE PRESS ANY
```

## 4. 復号化スクリプト
　暗号文を復号化するスクリプトのソースコードと，その実行結果を以下に示す。

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def deencrypt(str, key):
    plaintext = ""

    for ch in list(str):
        if 'A' <= ch <= 'Z':
            plaintext += chr((ord(ch) - ord('A') + key) % 26 + ord('A'))
        elif 'a' <= ch <= 'z':
            plaintext += chr((ord(ch) - ord('a') + key) % 26 + ord('a'))
        else:
            plaintext += ch

    return plaintext

if __name__ == '__main__':
    ciphertext = input("PLEASE INPUT CIPHERTEXT : ")
    key = input("PLEASE INPUT KEY : ")
    plaintext = deencrypt(ciphertext, int(key))

    print("PLAINTEXTtext : " + plaintext)

    input("PLEASE PRESS ANY")
```

```bash
PLEASE INPUT CIPHERTEXT : Nccyr
PLEASE INPUT KEY : 13
PLAINTEXTtext : Apple
PLEASE PRESS ANY
```

## 5. 解析スクリプト
　暗号文をブルートフォースアタックによって解析するスクリプトのソースコードと，その実行結果を以下に示す。

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def deencrypt(str, key):
    plaintext = ""

    for ch in list(str):
        if 'A' <= ch <= 'Z':
            plaintext += chr((ord(ch) - ord('A') + key) % 26 + ord('A'))
        elif 'a' <= ch <= 'z':
            plaintext += chr((ord(ch) - ord('a') + key) % 26 + ord('a'))
        else:
            plaintext += ch

    return plaintext

if __name__ == '__main__':
    ciphertext = input("PLEASE INPUT CIPHERTEXT : ")

    for i in range(1, 26):
        print('{0:2d}'.format(i) + " : " + deencrypt(ciphertext, i))

    input(input("PLEASE PRESS ANY"))
```

```bash
PLEASE INPUT CIPHERTEXT : Nccyr
 1 : Oddzs
 2 : Peeat
 3 : Qffbu
 4 : Rggcv
 5 : Shhdw
 6 : Tiiex
 7 : Ujjfy
 8 : Vkkgz
 9 : Wllha
10 : Xmmib
11 : Ynnjc
12 : Zookd
13 : Apple
14 : Bqqmf
15 : Crrng
16 : Dssoh
17 : Ettpi
18 : Fuuqj
19 : Gvvrk
20 : Hwwsl
21 : Ixxtm
22 : Jyyun
23 : Kzzvo
24 : Laawp
25 : Mbbxq
PLEASE PRESS ANY
```

## 6. おわりに
　本記事では，シーザー暗号の暗号化，復号化，及び，解析 (ブルートフォースアタック) を行うスクリプトを Python で実装し，その実行結果を確認してきた。世の中には，シーザー暗号の他にユニークな古典暗号が数多く存在している。そこで，今後はそれらの暗号の実装にも取り組んでいきたいと考えている。

## 参考資料

 * [3.6.1 Documentation](https://docs.python.jp/3/)
 * [暗号技術入門 第3版](http://www.hyuki.com/cr/)
