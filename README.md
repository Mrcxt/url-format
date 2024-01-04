# @anys/url-format

## Install

```bash
npm install @anys/url-format

pnpm install @anys/url-format
```

## Demo

[Demo](https://boisterous-monstera-cc44b7.netlify.app/)

## Usage

```ts
import urlFormat from '@anys/url-format'

urlFormat('https://www.baidu.com').search 
// => ''

urlFormat('https://www.baidu.com?name=anys').search 
// => '?name=anys'

urlFormat('https://www.baidu.com#hash?name=anys&age=18').search 
// => '?name=anys&age=18'

urlFormat('https://www.baidu.com?sex=1#hash?name=anys&age=18').hash 
// => '?sex=1&name=anys&age=18'
```

## API

### urlFormat(url: string): URL

#### url

Type: `string`

## License
