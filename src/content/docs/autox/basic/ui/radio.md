---
title: radio
---


# 单选框控件: radio

单选按钮用于在多个互斥的选项中选择一个。在 Auto.js 中，通常将多个单选按钮放在一个 RadioGroup 中，以确保只能选择其中一个。

创建单选按钮

以下是一个创建单选按钮的示例代码：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <radiogroup id="rg">
            <radio id="rb1" text="选项1" checked="{{true}}" />
            <radio id="rb2" text="选项2" />
            <radio id="rb3" text="选项3" />
        </radiogroup>
        <button id="btnGetSelected" text="获取选中的选项" />
    </vertical>
);
```

在上述代码中：

`<radiogroup id="rg">`:定义了一个单选按钮组，所有包含在其中的单选按钮将互斥。

`<radio id="rb1" text="选项1" checked="{{true}}" /> `:创建了一个单选按钮，并设置了初始状态为选中。
其他两个单选按钮（`rb2`和`rb3`）初始状态为未选中。

获取选中的单选按钮

要获取当前选中的单选按钮，可以通过遍历 RadioGroup 中的单选按钮来实现。

以下是一个获取选中单选按钮的示例代码：

```js
ui.btnGetSelected.on("click", function () {
    for (let i = 0; i < ui.rg.getChildCount(); i++) {
        let radio = ui.rg.getChildAt(i);
        if (radio.checked) {
            toast("选中的选项：" + radio.text);
            break;
        }
    }
});
```

在上述代码中：

`ui.rg.getChildCount()`:获取单选按钮组中的子控件数量。

`ui.rg.getChildAt(i)`:获取第 i 个子控件（即单选按钮）。

` radio.checked`:判断当前单选按钮是否被选中。

` toast("选中的选项：" + radio.text)`:显示当前选中的选项文本。

**官方教程：**

单选框只能选中一个选项，一般与 radiogroup 搭配使用。

参见 Android [RadioButton](https://developer.android.google.cn/reference/android/widget/RadioButton)

`text`:

radio 控件的文本，显示在单选框后面。实际上 radio 控件也继承于[text](http://localhost/docs/zh/v8/ui/advanced.html#文本控件-text)和[button](http://localhost/docs/zh/v8/ui/advanced.html#按钮控件-button)控件，它们的属性也可以用在 radio 上，比如`textSize`, `textStyle`。

`checked`:

设置 radio 单选框的选中状态，当`checked="true"`为选中选项框，否则为未选中选项框。

`enabled`:

设置单选框是否是启用的，若`enabled="false"`则为禁用状态，显示未灰色，无法交互。

`isChecked()`:

-   返回 {boolean}

返回选项框是否被选中，是则返回`true`，否则返回`false`。例如`$ui.radio1.isChecked()`。

`check`:

-   `checked` {boolean} 是否被勾选
-   `view` {View} 当前事件的 View

当用户勾选/取消勾选选项框时会触发该事件。

例子：

```js
"ui";

ui.layout(
    <vertical padding="16">
        <radio id="radio1" text="单选框1" />
        <radio id="radio2" text="单选框2" />
        <radio id="radio3" text="已勾选的单选框3" checked="true" />
    </vertical>
);
// 监听单个radio的选中
$ui.radio2.on("check", (checked) => {
    if (checked) {
        toastLog("单选框2被勾选了");
    } else {
        toastLog("单选框2被取消勾选了");
    }
});
```
