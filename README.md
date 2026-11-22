# 子育てまち試算

kosodate-machi-shisan.com の公開用ファイル。Cloudflare Pages で公開する。

- `index.html`：計算のページ（データと計算を1つのファイルに含む）
- `about/index.html`：運営者情報と個人情報の扱い
- `functions/t.js`：押された回数を受け取るプログラム。D1 のデータベースを `DB` という名前でつなぐと記録が始まる
- `schema.sql`：記録用の表の定義
