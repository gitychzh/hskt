---
title: floatyRawWindow
---


# FloatyRawWindow

原始悬浮窗对象，可通过`window.{id}`获取悬浮窗界面上的元素。例如, 悬浮窗 window 上一个控件的 id 为 aaa, 那么`window.aaa`即可获取到该控件，类似于 ui。

## window.setTouchable(touchable)

-   `touchable` {Boolean} 是否可触摸

设置悬浮窗是否可触摸，如果为 true, 则悬浮窗将接收到触摸、点击等事件并且无法继续传递到悬浮窗下面；如果为 false, 悬浮窗上的触摸、点击等事件将被直接传递到悬浮窗下面。处于安全考虑，被悬浮窗接收的触摸事情无法再继续传递到下层。

可以用此特性来制作护眼模式脚本。

```js
var w = floaty.rawWindow(<frame gravity="center" bg="#44ffcc00" />);

w.setSize(-1, -1);
w.setTouchable(false);

setTimeout(() => {
    w.close();
}, 4000);
```

## window.setPosition(x, y)

-   `x` {number} x
-   `x` {number} y

设置悬浮窗位置。

## window.getX()

返回悬浮窗位置的 X 坐标。

## window.getY()

返回悬浮窗位置的 Y 坐标。

## window.setSize(width, height)

-   `width` {number} 宽度
-   `height` {number} 高度

设置悬浮窗宽高。

特别地，如果设置为-1，则为占满全屏；设置为-2 则为根据悬浮窗内容大小而定。例如：

```js
var w = floaty.rawWindow(
    <frame gravity="center" bg="#77ff0000">
        <text id="text">悬浮文字</text>
    </frame>
);

w.setSize(-1, -1);

setTimeout(() => {
    w.close();
}, 2000);
```

## window.getWidht()

返回悬浮窗宽度。

## window.getHeight()

返回悬浮窗高度。

## window.close()

关闭悬浮窗。如果悬浮窗已经是关闭状态，则此函数将不执行任何操作。

被关闭后的悬浮窗不能再显示。

## window.exitOnClose()

使悬浮窗被关闭时自动结束脚本运行。
