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

## Creating passwords for WordPress applications
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

{
  title: 'example-foo-bar-baz.on.getshifter.io',
  description: 'Just another WordPress site',
  url: 'https://foo-bar-baz.static.getshifter.net',
  email: 'foo@bar.baz',
  timezone: '',
  date_format: 'F j, Y',
  time_format: 'g:i a',
  start_of_week: 1,
  language: 'en_US',
  use_smilies: true,
  default_category: 1,
  default_post_format: '0',
  posts_per_page: 10,
  default_ping_status: 'open',
  default_comment_status: 'open',
  site_logo: null
}
```

### Shifter Headless
```
node headless.js
```