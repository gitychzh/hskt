---
title: floaty
---


# Floaty

floaty 模块提供了悬浮窗的相关函数，可以在屏幕上显示自定义悬浮窗，控制悬浮窗大小、位置等。

悬浮窗在脚本停止运行时会自动关闭，因此，要保持悬浮窗不被关闭，可以用一个空的 setInterval 来实现，例如：

```js
setInterval(() => {}, 1000);
```

# Floaty

## floaty.checkPermission()

**[4.2.17 新增]**

-   返回 {boolean}

返回当前应用是否有悬浮窗权限。（不会触发请求权限操作）

## floaty.requestPermission()

**[4.2.17 新增]**

跳转到系统的悬浮窗权限请求界面。

```js
if (!floaty.checkPermission()) {
    // 没有悬浮窗权限，提示用户并跳转请求
    toast("本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。");
    floaty.requestPermission();
    exit();
} else {
    toastLog("已有悬浮窗权限");
}
```

## floaty.window(layout)

-   `layout` {xml} | {View} 悬浮窗界面的 XML 或者 View

指定悬浮窗的布局，创建并**显示**一个悬浮窗，返回一个[FloatyWindow](#floatywindow)对象。

该悬浮窗自带关闭、调整大小、调整位置按键，可根据需要调用`setAdjustEnabled()`函数来显示或隐藏。

其中 layout 参数可以是 xml 布局或者一个 View，更多信息参见 ui 模块的说明。

例子：

```js
var w = floaty.window(
    <frame gravity="center">
        <text id="text">悬浮文字</text>
    </frame>
);
setTimeout(() => {
    w.close();
}, 2000);
```

这段代码运行后将会在屏幕上显示悬浮文字，并在两秒后消失。

另外，因为脚本运行的线程不是 UI 线程，而所有对控件的修改操作需要在 UI 线程执行，此时需要用`ui.run`，例如:

```js
ui.run(function () {
    w.text.setText("文本");
});
```

有关返回的`FloatyWindow`对象的说明，参见下面的`FloatyWindow`章节。

## floaty.rawWindow(layout)

-   `layout` {xml} | {View} 悬浮窗界面的 XML 或者 View

指定悬浮窗的布局，创建并**显示**一个原始悬浮窗，返回一个[FloatyRawWindow](#floatyrawwindow)对象。

与`floaty.window()`函数不同的是，该悬浮窗不会增加任何额外设施（例如调整大小、位置按钮），您可以根据自己需要编写任何布局。

而且，该悬浮窗支持完全全屏，可以覆盖状态栏，因此可以做护眼模式之类的应用。

```js
var w = floaty.rawWindow(
    <frame gravity="center">
        <text id="text">悬浮文字</text>
    </frame>
);

w.setPosition(500, 500);

setTimeout(() => {
    w.close();
}, 2000);
```

这段代码运行后将会在屏幕上显示悬浮文字，并在两秒后消失。

有关返回的`FloatyRawWindow`对象的说明，参见下面的`FloatyRawWindow`章节。

## floaty.closeAll()

关闭所有本脚本的悬浮窗。
