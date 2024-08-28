# 获取SDK版本(getVersion)

获取支付宝SDK版本号（非支付宝APP版本号）



## 参数

无



## 返回

版本号



## 示例

```javascript
 window.Alipay.getVersion(
    function (res) {
        console.log('get sdk version:', res);
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```