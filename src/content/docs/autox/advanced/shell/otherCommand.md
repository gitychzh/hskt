---
title: otherCommand
---


## 其他命令

### 进行屏幕截图

screencap 命令是一个用于对设备显示屏进行屏幕截图的 shell 实用程序。在 shell 中，此语法为：

```
screencap filename
```

例如：

```js
shell("screencap /sdcard/screen.png");
```

### 列表文件

```
ls filepath
```

例如:

```js
log(shell("ls /system/bin").result);
```
