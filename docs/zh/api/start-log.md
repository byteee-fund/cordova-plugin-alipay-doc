# 开启日志(startLog)

> 此接口仅限IOS下使用
>
> 此接口仅为了方便调试使用，生成环境请勿开启。



## 参数

无



## 示例

```javascript
window.Alipay.startLog(
    function(res) {
        console.log('get sdk version:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```