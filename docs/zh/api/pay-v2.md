# 支付(payV2)

支付宝APP支付

接入前请参照[支付宝官方文档](https://opendocs.alipay.com/open/204/105051?pathHash=b91b9616)完成登录前的准备工作




## 参数

属性  | 类型   | 默认值          | 必填 | 说明   |
| ----- | ------ | --------------- |--| ------ |
| orderInfo | string |  | 是 | 服务端构造的订单字符串 |
| scheme | string |  | 否 | IOS下可以传入自己的scheme |



## 示例

```javascript
 window.Alipay.payV2(
    { orderInfo: "app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D" },
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```

