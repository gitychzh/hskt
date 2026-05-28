---
title: setScreenMetrics
---


## setScreenMetrics(width, height)

-   width {number} 屏幕宽度，单位像素
-   height {number} 屏幕高度，单位像素

设置脚本坐标点击所适合的屏幕宽高。如果脚本运行时，屏幕宽度不一致会自动放缩坐标。

例如在 1920\*1080 的设备中，某个操作的代码为

```js
setScreenMetrics(1080, 1920);
click(800, 200);
longClick(300, 500);
```

那么在其他设备上 AutoJs 会自动放缩坐标以便脚本仍然有效。例如在 540 \* 960 的屏幕中`click(800, 200)`实际上会点击位置(400, 100)。
