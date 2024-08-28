# Authorization (authV2)

Alipay APP Authorization Login

Before integrating, please refer to the [Alipay Official Documentation](https://opendocs.alipay.com/open/218/105329?pathHash=29c8f60b) to complete the preparation for login.

## Parameters

| Property  | Type   | Default Value   | Required | Description                                               |
| --------- | ------ | --------------- | -------- | --------------------------------------------------------- |
| authInfo  | string |                 | Yes      | The authorization string constructed by the server         |
| scheme    | string |                 | No       | Custom scheme for iOS                                      |

## Return Values

| Property       | Type   | Description                                                                                               |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| resultStatus   | string | The status return value of this operation, indicating the result of the call. For details, see the `result_status` code description. Example: 9000 |
| result         | string | The result data returned from this operation. The `result_code` specific status code is detailed in “result_code status codes.” Authorization is successful only when `resultStatus` is “9000” and `result_code` is “200”. The `auth_code` indicates the authorization code upon success. Example: success=true&auth_code=9c11732de44f4f1790b63978b6fbOX53&result_code=200 |
| memo           | string | Reserved parameter, usually empty. Example: Processing success                                              |

## Example

```javascript
window.Alipay.authV2(
    {
        authInfo: 'apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdMJcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D'
    },
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
