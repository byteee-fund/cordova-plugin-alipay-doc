# Get SDK Version (getVersion)

Retrieve the Alipay SDK version number (not the Alipay app version number).

## Parameters

None

## Return

The SDK version number.

## Example

```javascript
window.Alipay.getVersion(
    function (res) {
        console.log('get sdk version:', res);
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
