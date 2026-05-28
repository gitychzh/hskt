---
title: checkbox
---


# 勾选框控件: checkbox

勾选框是一种用于表示选择状态的控件，用户可以通过点击来切换其选中状态。

1.创建勾选框控件

要创建一个勾选框控件，可以使用 ui.CheckBox 函数，并传入相应的参数来设置其属性。以下是一个创建勾选框控件的示例代码：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <checkbox id="cb" text="同意条款" checked="{{false}}" />
    </vertical>
);
```

在上述代码中：

` id="cb"`:为勾选框控件设置了一个唯一的标识符，以便后续可以通过该 ID 来引用和操作该控件。

` text="同意条款"`:设置了勾选框控件的文本标签，用于向用户显示相关信息。

`checked="{{false}}"`:初始化勾选框控件的选中状态为未选中（false）。如果希望初始状态为选中，可以将值设置为 true

2.获取和设置勾选框状态

获取勾选框状态

要获取勾选框控件的当前选中状态，可以使用 ui.cb.checked 属性。以下是一个获取勾选框状态的示例代码：

```js
ui.cb.on("check", function (checked) {
    toast("当前选中状态：" + checked);
});
```

在上述代码中：

` ui.cb.on("check", function(checked) {...})`:为勾选框控件注册了一个 check 事件监听器，当勾选框的状态发生变化时，会触发该事件，并传递当前的选中状态（checked）作为参数。

`toast("当前选中状态：" + checked)`:使用 toast 函数显示当前的选中状态。

设置勾选框状态

要设置勾选框控件的选中状态，可以直接修改 ui.cb.checked 属性的值。以下是一个设置勾选框状态的示例代码：

```js
ui.cb.checked = true; // 设置勾选框为选中状态
```

或者，你也可以在创建勾选框控件时，通过 checked 属性来设置初始状态，如之前所示。

3.监听勾选框事件

除了 check 事件外，还可以为勾选框控件注册其他事件监听器，例如 click 事件。以下是一个监听勾选框点击事件的示例代码：

```js
ui.cb.on("click", function () {
    toast("勾选框被点击");
});
```

在上述代码中：

` ui.cb.on("click", function() {...})`:为勾选框控件注册了一个 click 事件监听器，当用户点击勾选框时，会触发该事件。

`toast("勾选框被点击")`:使用 toast 函数显示一条提示信息，表示勾选框被点击。

4.完整示例

以下是一个完整的示例代码，演示了如何创建勾选框控件、获取和设置其状态，以及监听相关事件：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <checkbox id="cb" text="同意条款" checked="{{false}}" />
        <button id="btnGetState" text="获取选中状态" />
        <button id="btnSetState" text="设置为选中" />
    </vertical>
);

// 监听勾选框的check事件
ui.cb.on("check", function (checked) {
    toast("当前选中状态：" + checked);
});

// 监听获取状态按钮的点击事件
ui.btnGetState.on("click", function () {
    toast("当前选中状态：" + ui.cb.checked);
});

// 监听设置状态按钮的点击事件
ui.btnSetState.on("click", function () {
    ui.cb.checked = true; // 设置勾选框为选中状态
});
```

在上述代码中:

创建了一个勾选框控件（`id="cb"`），并设置了初始状态为未选中。

添加了两个按钮控件，分别用于获取勾选框的当前状态和设置勾选框为选中状态。

为勾选框控件注册了 check 事件监听器，用于实时显示当前的选中状态。

为获取状态按钮注册了 click 事件监听器，用于显示当前的选中状态。

为设置状态按钮注册了 click 事件监听器，用于将勾选框设置为选中状态。

**官方教程：**

checkbox 控件即复选框，提供勾选交互的控件。

参见 Android [CheckBox](https://developer.android.google.cn/reference/android/widget/CheckBox)

`text`:

checkbox 控件的文本，显示在勾选框后面。实际上 checkbox 控件继承于[text](http://localhost/docs/zh/v8/ui/advanced.html#文本控件-text)和[button](http://localhost/docs/zh/v8/ui/advanced.html#按钮控件-button)控件，它们的属性也可以用在 checkbox 上，比如`textSize`, `textStyle`。

`checked`:

设置 checkbox 的选中状态，当`checked="true"`为选中选项框，否则为未选中选项框。可以通过 attr 方法动态设置勾选框的状态。比如：`$ui.checkbox1.attr("checked", "true")`。

`enabled`:

设置复选框是否是启用的，若`enabled="false"`则为禁用状态，显示未灰色，无法交互。

`isChecked()`:

-   返回 {boolean}

通过 isChecked 可以检测选项框当前是否被选中。如果被选中则返回为`true`，否则为`false`。

事件: `check`:

-   `checked` {boolean} 是否被勾选
-   `view` {View} 当前事件的 View

当用户勾选/取消勾选选项框时会触发该事件。

例子:

```js
"ui";
ui.layout(
    <vertical padding="16">
        <checkbox id="cb1" text="复选框" />
        <checkbox id="cb2" checked="true" text="勾选的复选框" />
        <checkbox id="cb3" text="被禁用的复选框" enabled="false" />
    </vertical>
);

ui.cb1.on("check", (checked) => {
    if (checked) {
        toast("第一个框被勾选了");
    } else {
        toast("第一个框被取消勾选了");
    }
});

// 修改cb3的checked属性
$ui.cb3.attr("checked", "true");
```
