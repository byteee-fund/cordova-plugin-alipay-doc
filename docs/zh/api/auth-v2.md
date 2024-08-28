# 授权(authV2)

支付宝APP授权登录

接入前请参照[支付宝官方文档](https://opendocs.alipay.com/open/218/105329?pathHash=29c8f60b)完成登录前的准备工作



## 参数

| 属性  | 类型   | 默认值          | 必填 | 说明   |
| ----- | ------ | --------------- |--| ------ |
| authInfo | string |  | 是 | 服务端构造的授权字符串 |
| scheme | string |  | 否 | IOS下可以传入自己的scheme |


## 返回

| 属性    | 类型   | 说明                                                         |
| ------- | ------ | ----------------------------------------------------------- |
| resultStatus    | string | 本次操作的状态返回值，标识本次调用的结果。详情请参见 状态码 result_status 说明。示例值：9000                             |
| result   | string | 本次操作返回的结果数据。result_code具体状态码值请参见“result_code状态代码”。仅当resultStatus为“9000”且result_code为“200”时，代表授权成功。auth_code表示授权成功的授权码。示例值：success=true&auth_code=9c11732de44f4f1790b63978b6fbOX53&result_code=200 |
| memo | string | 保留参数，一般无内容。示例值：处理成功                                        |




##  示例

```javascript
 window.Alipay.authV2(
    { authInfo: 'apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdMJcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D' },
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```