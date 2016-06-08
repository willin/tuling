# 图灵机器人SDK

[![npm](https://img.shields.io/npm/v/tuling.svg?style=plastic)](https://npmjs.org/package/tuling) [![npm](https://img.shields.io/npm/dm/tuling.svg?style=plastic)](https://npmjs.org/package/tuling)
[![npm](https://img.shields.io/npm/dt/tuling.svg?style=plastic)](https://npmjs.org/package/tuling)

## 安装

```bash
npm install --save tuling
```

## 使用

ES7:

```js
import TULING from 'tuling';

const tuling = new TULING({key: 'xxx'});

(async() => {
  const result = await tuling.send({
    userid: 1,
    info: '你好吗',
    loc: '南京市'
  });
  console.log(result);
})();
```

ES5:

```js
var TULING = require('tuling');

var tuling = new TULING({key: 'xxx'});

tuling.send({
  userid: 1,
  info: '你好吗',
  loc: '南京市'
}).then(function(result) {
  console.log(result);
})
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
