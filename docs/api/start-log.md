# Start Logging (startLog)

> This interface is available only on iOS.
>
> This interface is intended for debugging purposes only; do not enable it in production environments.

## Parameters

None

## Example

```javascript
window.Alipay.startLog(
    function(res) {
        console.log('Log started:', res);
    },
    function(err) {
        console.error(err);
    }
);
