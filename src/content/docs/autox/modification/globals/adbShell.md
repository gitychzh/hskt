---
title: adbShell
---


# 远程 AdbShell

手机需设置监听 adb 端口之后，使用 adbConnect 方法连接，可执行 adb shell 命令 (好像不支持远程配对)

## adbConnect(host, port)

-   `host` string
-   `port` int
-   `return` AdbShell

```js
// 连接设备
let adbShell = adbConnect("127.0.0.1", 5555);
```

# AdbShell

## adbShell.exec(command)

-   `command` string
-   `return` string?

执行 adb shell 命令

## adbShell.connection.getHost()

-   `return` string

获取当前连接主机名

## adbShell.connection.getPost()

-   `return` int

获取当前连接端口

## adbShell.close()

-   `return` void

断开连接
