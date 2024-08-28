# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-alipay-ionic7-demo)

## Install the Plugin

Replace with your own Alipay AppId

```shell
npm install ../cordova-plugin-alipay --variable ALIPAY_APP_ID=xxx
```

## Project Configuration

In the capacitor.config.json file, add your Alipay AppId variable configuration as shown below:

```ts
const config: CapacitorConfig = {
	...
	cordova: { 
    preferences: { 
      alipay_app_id: "2021003110xxxx"
    } 
  }
}
```

## iOS Project Configuration

### Modify the URL SCHEME

set the content format to "ali" + your Alipay AppId,

As shown in the image:

![img](/public/images/xcode-1.png)

### Add the Header file

In your App Target -> Build Settings, find "Objective-C Bridging Header" and add the following line:

```text
../capacitor-cordova-ios-plugins/sources/CordovaPluginAlipay/Alipay-Bridging-Header.h
```

As shown in the image:

![img](/public/images/xcode-2.png)

### Modify code

In the AppDelegate.swift file, locate the code position as shown below, and add the following code:

```swift
AlipayAttribution.shared().handleOpen(url)
```

As shown in the image:

![img](/public/images/xcode-3.png)
