---
title: floatyWindow
---


# FloatyWindow

悬浮窗对象，可通过`FloatyWindow.{id}`获取悬浮窗界面上的元素。例如, 悬浮窗 window 上一个控件的 id 为 aaa, 那么`window.aaa`即可获取到该控件，类似于 ui。

## window.setAdjustEnabled(enabled)

-   `enabled` {boolean} 是否启用悬浮窗调整(大小、位置)

如果 enabled 为 true，则在悬浮窗左上角、右上角显示可供位置、大小调整的标示，就像控制台一样；
如果 enabled 为 false，则隐藏上述标示。

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

## window.getWidht()

返回悬浮窗宽度。

## window.getHeight()

返回悬浮窗高度。

## window.close()

关闭悬浮窗。如果悬浮窗已经是关闭状态，则此函数将不执行任何操作。

被关闭后的悬浮窗不能再显示。

## window.exitOnClose()

使悬浮窗被关闭时自动结束脚本运行。
