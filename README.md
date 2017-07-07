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
const TULING = require('tuling');

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

## 进阶

微信语音识别接入简单示例：

```js
var TULING = require('tuling');
var wechat = require('wechat');
var express = require('express');

// 填入配置项
var config = {
  token: 'xxxx',
  appid: 'xxxx',
  encodingAESKey: 'xxxx'
};
var tuling = new TULING({key: 'xxxx'});

var app = express();
app.use(express.query());

app.use('/', wechat(config, function (req, res, next) {
  var message = req.weixin;
  console.log(message);
  if(message.Event!==undefined && message.Event ==='subscribe'){
    return res.reply('欢迎关注xxxx，目前正处于测试阶段。');
  }
  if(message.MsgType==='text' || message.MsgType==='voice'){
    return tuling.send({
      userid: message.FromUserName,
      info: message.Content || message.Recognition
    }).then(function(result){
      switch (result.code) {
        case 200000:
          return res.reply('<a href="'+result.url+'">'+result.text+'</a>');
          break;
        case 302000:
          var html = result.text;
          for(item of result.list){
            if(item.article!==''){
              html+= ',<a href="'+item.detailurl+'">'+item.article+'</a>'
            }
          }

          return res.reply(html);
          break;
        case 308000:
            var html = result.text;
            for(item of result.list){
              html+=',<a href="'+item.detailurl+'">'+item.name+'</a>'
            }

            return res.reply(html);
            break;
        default:
         return res.reply(result.text);
      }
    });
  }
}));

app.listen(8080);
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
