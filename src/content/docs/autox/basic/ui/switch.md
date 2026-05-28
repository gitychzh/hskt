---
title: switch
---


# 开关控件: switch

在 Auto.js 中，开关控件（Switch） 是一种常用的用户界面元素，用于表示两种互斥的状态，通常为“开”和“关”。用户可以通过滑动或点击来切换开关的状态。

以下是关于如何在 Auto.js 中使用开关控件的详细教程。

1.创建开关控件

要创建一个开关控件，可以使用 ui.Switch 函数，并传入相应的参数来设置其属性。

以下是一个创建开关控件的示例代码：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <Switch id="sw" text="启用功能" checked="{{false}}" />
    </vertical>
);
```

在上述代码中：

`id="sw"`:为开关控件设置了一个唯一的标识符，以便后续可以通过该 ID 来引用和操作该控件。

` text="启用功能"`:设置了开关控件旁边显示的文本标签，用于向用户说明该开关的功能。

` checked="{{false}}"`:初始化开关控件的状态为“关”（false）。如果希望初始状态为“开”，可以将值设置为 true。

2.获取和设置开关状态

获取开关状态

要获取开关控件的当前状态，可以使用 ui.sw.checked 属性。

以下是一个获取开关状态的示例代码：

```js
ui.sw.on("check", function (checked) {
    toast("当前开关状态：" + (checked ? "开" : "关"));
});
```

在上述代码中：

`ui.sw.on("check", function(checked) {...})`:为开关控件注册了一个`check`事件监听器，当开关的状态发生变化时，会触发该事件，并传递当前的状态（`checked`）作为参数。

` toast("当前开关状态：" + (checked ? "开" : "关"))`:使用`toast`函数显示当前的开关状态。如果`checked`为`true`，则显示“开”；否则显示“关”。

设置开关状态

要设置开关控件的状态，可以直接修改`ui.sw.checked`属性的值。

以下是一个设置开关状态的示例代码：

```js
ui.sw.checked = true; // 设置开关为“开”状态
```

或者，你也可以在创建开关控件时，通过`checked`属性来设置初始状态，如之前所示。

3.监听开关事件

除了`check`事件外，还可以为开关控件注册其他事件监听器，例如`click`事件。

以下是一个监听开关点击事件的示例代码：

```js
ui.sw.on("click", function () {
    toast("开关被点击");
});
```

在上述代码中：

`ui.sw.on("click", function() {...})`:为开关控件注册了一个`click`事件监听器，当用户点击开关时，会触发该事件。

` toast("开关被点击")`:使用`toast`函数显示一条提示信息，表示开关被点击。

4.完整示例

以下是一个完整的示例代码，演示了如何创建开关控件、获取和设置其状态，以及监听相关事件：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <Switch id="sw" text="启用功能" checked="{{false}}" />
        <button id="btnGetState" text="获取开关状态" />
        <button id="btnSetState" text="设置为开启" />
    </vertical>
);

// 监听开关的check事件
ui.sw.on("check", function (checked) {
    toast("当前开关状态：" + (checked ? "开" : "关"));
});

// 监听获取状态按钮的点击事件
ui.btnGetState.on("click", function () {
    toast("当前开关状态：" + (ui.sw.checked ? "开" : "关"));
});

// 监听设置状态按钮的点击事件
ui.btnSetState.on("click", function () {
    ui.sw.checked = true; // 设置开关为“开”状态
});
```

在上述代码中：

创建了一个开关控件（`id="sw"`），并设置了初始状态为“关”。
添加了两个按钮控件，分别用于获取开关的当前状态和设置开关为“开”状态。
为开关控件注册了`check`事件监听器，用于实时显示当前的开关状态。
为获取状态按钮注册了`click`事件监听器，用于显示当前的开关状态。
为设置状态按钮注册了`click`事件监听器，用于将开关设置为“开”状态。

**官方教程：**

开关控件用于表示一个选项是否被启用。

参见 Android [Switch](https://developer.android.google.cn/reference/android/widget/Switch)

`text`:

Switch 控件的文本，显示在框后面。实际上 Switch 控件也继承于[text](http://localhost/docs/zh/v8/ui/advanced.html#文本控件-text)和[button](http://localhost/docs/zh/v8/ui/advanced.html#按钮控件-button)控件，它们的属性也可以用在 Switch 上，比如`textSize`, `textStyle`。

`checked`:

设置 Switch 开关的开启状态，当`checked="true"`时为开启。

`enabled`:

设置 Switch 开关是否是启用的，若`enabled="false"`则为禁用状态，显示未灰色，无法交互。

`isChecked()`:

-   返回 {boolean}

返回 Switch 控件是否是开启状态。比如`$ui.switch1.isChecked()`。

事件: `check`:

-   `checked` {boolean} 是否被勾选
-   `view` {View} 当前事件的 View

当用户勾选/取消勾选选项框时会触发该事件。

例子：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <Switch id="sw" text="单选框1" />
    </vertical>
);

// 监听的选中
$ui.sw.on("check", (checked) => {
    if (checked) {
        toastLog("switch被打开了");
    } else {
        toastLog("switch被关闭了");
    }
});
```
