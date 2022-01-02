# WP REST API Auth Demos on Shifter

Examples for authenticated WordPress REST API requests using Shifter Headless and Static.

> Shifter HeadlessとStaticを使用した認証済みWordPress REST APIリクエストの例です。

## Getting Started
> はじめに
```
git clone https://github.com/getshifter/wp-auth-demos.git
cd wp-auth-demos
npm i
```

## Note: Minimum Requirements
> 注）最低限必要なもの
1. Installed version of Node JS >= 14
2. [An active Shifter Account](https://go.getshifter.io/sites)
2. Shifter Headless and Static sites

## WordPressアプリケーションのパスワード作成
> アプリケーションパスワードの作成

[Integration Guide on WP.org](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)

## Create/Setting Environment Variables
> 環境変数の作成/設定
```
cp .env.example .env
```

## Testing Demo Scripts
> デモスクリプトのテスト

### Shifter Static
```
node static.js
```

### Shifter Headless
```
node headless.js
```