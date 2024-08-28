# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-alipay-ionic7-demo)

## 安装插件

请替换为自己的支付宝AppId

```shell
npm install ../cordova-plugin-alipay --variable ALIPAY_APP_ID=xxx
```

## 项目配置

在`capacitor.config.json`文件里，写入你的支付宝AppId变量配置，如下所示：

```ts
const config: CapacitorConfig = {
	// 其他配置
	...
	
	// cordova相关配置
	cordova: { 
    preferences: { 
      alipay_app_id: "2021003110xxxx"
    } 
  }
}
```

## IOS工程配置

### 修改URL SCHEME

设置内容格式为 "ali"+ 你的支付宝AppId，如图所示：

![img](/public/images/xcode-1.png)

### 添加Header文件

App Target->Build Settings找到"Objective-C Bridging Header", 然后添加一行如下内容：

```text
../capacitor-cordova-ios-plugins/sources/CordovaPluginAlipay/Alipay-Bridging-Header.h
```

如图所示：

![img](/public/images/xcode-2.png)

### 修改代码
在AppDelegate.swift文件里，找到如下代码位置，添加代码：

```swift
AlipayAttribution.shared().handleOpen(url)
```

如图所示：

![img](/public/images/xcode-3.png)
