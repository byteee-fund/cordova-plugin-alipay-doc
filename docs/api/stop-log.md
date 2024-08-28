# Stop Logging (stopLog)

> This interface is available only on iOS.
>
> This interface is intended for debugging purposes only; do not enable it in production environments.

## Parameters

None

## Example

```javascript
window.Alipay.stopLog(
    function(res) {
        console.log('Log stopped:', res);
    },
    function(err) {
        console.error(err);
    }
);
