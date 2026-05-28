---
title: adbIME
---


# adb 输入法

通过 shell 命令在当前光标位置输入文字

:::tip
想象一下，你已经通过上面的 adbShell 连接到了设备，ok，以下用到的 adbShell 就是连接成功后返回的 AdbShell 对象
:::

## adbIMEShellCommand.enableAdbIME()

-   `return` string

```js
// 启用 adb 输入法
adbShell.exec(adbIMEShellCommand.enableAdbIME());
```

## adbIMEShellCommand.setAdbIME()

-   `return` string

```js
// 设置 adb 输入法为当前输入法
adbShell.exec(adbIMEShellCommand.setAdbIME());
```

## adbIMEShellCommand.resetIME()

-   `return` string

```js
// 重置输入法
adbShell.exec(adbIMEShellCommand.resetIME());
```

## adbIMEShellCommand.clearAllText()

-   `return` string

```js
// 清除所有文本
adbShell.exec(adbIMEShellCommand.clearAllText());
```

## adbIMEShellCommand.inputText(text)

-   `text` string
-   `return` string

```js
// 输入文本
adbShell.exec(adbIMEShellCommand.inputText("光标在哪我在哪"));
```

## adbIMEShellCommand.inputTextB64(text)

-   `text` string
-   `return` string

```js
// 将文本转成 base64 后输入? 吧
adbShell.exec(adbIMEShellCommand.inputTextB64("我将以 base64 的形态出击"));
```

## adbIMEShellCommand.inputKey(keyCode)

-   `keyCode` int
-   `return` string

```js
// 按下按键: v
adbShell.exec(adbIMEShellCommand.inputKey(50));
```

## adbIMEShellCommand.inputCombKey(metaKey, keyCode)

-   `metaKey` int
-   `keyCode` int
-   `return` string

```js
// 按下组合键: ctrl + v
adbShell.exec(adbIMEShellCommand.inputCombKey(4096, 50));
```

## adbIMEShellCommand.inputCombKey(metaKeyArr, keyCode)

-   `metaKeyArr` int[]
-   `keyCode` int
-   `return` string

```js
// 按下多 meta 组合键: ctrl + shift + v
adbShell.exec(adbIMEShellCommand.inputCombKey([4096, 1], 50));
```

# 一些 meta 键对照:

```js
const SHIFT = 1;
const SHIFT_LEFT = 64;
const SHIFT_RIGHT = 128;
const CTRL = 4096;
const CTRL_LEFT = 8192;
const CTRL_RIGHT = 16384;
const ALT = 2;
const ALT_LEFT = 16;
const ALT_RIGHT = 32;
```
