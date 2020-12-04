+++
slug = "33c3300936a09740c0cee182bf873825"
image = "2620ddaf171086ed984cf61b8d05795b.png"
title = "Hugo において JavaScript を用いずに擬似的な無限スクロールを実装する"
publishDate = "2019-10-23T11:39:00+09:00"
lastmod = "2019-10-23T21:41:00+09:00"
tags = [ "Develop", "Hugo", "Web" ]
googleAds = true
+++

## 1. はじめに

　[Hugo](https://gohugo.io/) は，ページネーションがテンプレートとして標準搭載されています。しかし，無限ページングのテンプレートは標準搭載されていないため，フルスクラッチで実装する必要があります。実装するに当たって (1) JavaScript を用いて実装する方法と (2) Hugo の機能で実装する方法が考えられます。(1) と (2) は，共に[ソースコード](https://mikeroibu.com/post/hugo-infinite-scrolling/)が公開されているので，公開されているソースコードを活用します。

## 2. ソースコード

　公開されているソースコードに手を加えたものを以下に示します。一般的な無限ページングは，JavaScript を用いて DOM を操作することで実現しています。しかし，公開されているソースコードは Hugo に標準搭載されているページネーションの機能を応用して擬似的な無限ページングを実現しています。

```HTML
<!-- {{ .Paginator 10 }} -->
{{ $range := .Pages }}
{{ $paginator := .Paginate $range }}
{{ $pageSize := $paginator.PageSize }}
{{ $totalPostsToShow := mul $paginator.PageNumber $pageSize }}
{{ range $index, $el := (first $totalPostsToShow .Pages) }}
	<div {{ if eq $index (sub $totalPostsToShow $pageSize) }} id="bottom" {{ end }}>
		<a href="{{ .Permalink }}">{{ .Title }}</a>
	</div>
{{ end }}
{{ if and (gt $paginator.TotalPages 1) ($paginator.HasNext) }}
	<a class="nextpage" href="{{ $paginator.Next.URL }}#bottom">More</a>
{{ end }}
```

　1 行目の `<!-- {{ .Paginator 10 }} -->` は，読み込むページ数を指定しています。[公式ドキュメント](https://gohugo.io/templates/pagination/)では，config.toml に `Paginate = 10` とを述する方法と `{{ range (.Paginator 10).Pages }}` を記述する方法が推奨されています。しかし，上記のソースコードでは正常に動作しませんでした。

## 3. おわりに

　本記事では，JavaScript を用いずに Hugo に標準搭載されている機能を用いて擬似的な無限スクロールを実装する方法について記述してきました。擬似的な無限スクロールですが，完全な無限ページングと比較しても機能的な差はなく，ストレスを感じるようなこともありませんでした。

## 環境情報

 * Hugo Ver.0.58.3
 * Google Chrome Ver.77.0.3865.75
 * Zorin OS 15 Core (Ubuntu 18.04 LTS)