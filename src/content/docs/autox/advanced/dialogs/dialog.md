---
title: dialog
---


# Dialog

`dialogs.build()`返回的对话框对象，内置一些事件用于响应用户的交互，也可以获取对话框的状态和信息。

## 事件: `show`

-   `dialog` {Dialog} 对话框

对话框显示时会触发的事件。例如：

```js
dialogs
    .build({
        title: "标题",
    })
    .on("show", (dialog) => {
        toast("对话框显示了");
    })
    .show();
```

## 事件: `cancel`

-   `dialog` {Dialog} 对话框

对话框被取消时会触发的事件。一个对话框可能按取消按钮、返回键取消或者点击对话框以外区域取消。例如：

```js
dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
    })
    .on("cancel", (dialog) => {
        toast("对话框取消了");
    })
    .show();
```

## 事件: `dismiss`

-   `dialog` {Dialog} 对话框

对话框消失时会触发的事件。对话框被取消或者手动调用`dialog.dismiss()`函数都会触发该事件。例如：

```js
var d = dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
    })
    .on("dismiss", (dialog) => {
        toast("对话框消失了");
    })
    .show();

setTimeout(() => {
    d.dismiss();
}, 5000);
```

## 事件: `positive`

-   `dialog` {Dialog} 对话框

确定按钮按下时触发的事件。例如：

```js
var d = dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
    })
    .on("positive", (dialog) => {
        toast("你点击了确定");
    })
    .show();
```

## 事件: `negative`

-   `dialog` {Dialog} 对话框

取消按钮按下时触发的事件。例如：

```js
var d = dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
    })
    .on("negative", (dialog) => {
        toast("你点击了取消");
    })
    .show();
```

## 事件: `neutral`

-   `dialog` {Dialog} 对话框

中性按钮按下时触发的事件。例如：

```js
var d = dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
        neutral: "稍后提示",
    })
    .on("positive", (dialog) => {
        toast("你点击了稍后提示");
    })
    .show();
```

## 事件: `any`

-   `dialog` {Dialog} 对话框
-   `action` {string} 被点击的按钮，可能的值为:
    -   `positive` 确定按钮
    -   `negative` 取消按钮
    -   `neutral` 中性按钮

任意按钮按下时触发的事件。例如:

```js
var d = dialogs
    .build({
        title: "标题",
        positive: "确定",
        negative: "取消",
        neutral: "稍后提示",
    })
    .on("any", (action, dialog) => {
        if (action == "positive") {
            toast("你点击了确定");
        } else if (action == "negative") {
            toast("你点击了取消");
        }
    })
    .show();
```

## 事件: `item_select`

-   `index` {number} 被选中的项目索引，从 0 开始
-   `item` {Object} 被选中的项目
-   `dialog` {Dialog} 对话框

对话框列表(itemsSelectMode 为"select")的项目被点击选中时触发的事件。例如：

```js
var d = dialogs
    .build({
        title: "请选择",
        positive: "确定",
        negative: "取消",
        items: ["A", "B", "C", "D"],
        itemsSelectMode: "select",
    })
    .on("item_select", (index, item, dialog) => {
        toast("您选择的是第" + (index + 1) + "项, 选项为" + item);
    })
    .show();
```

## 事件: `single_choice`

-   `index` {number} 被选中的项目索引，从 0 开始
-   `item` {Object} 被选中的项目
-   `dialog` {Dialog} 对话框

对话框单选列表(itemsSelectMode 为"singleChoice")的项目被选中并点击确定时触发的事件。例如：

```js
var d = dialogs
    .build({
        title: "请选择",
        positive: "确定",
        negative: "取消",
        items: ["A", "B", "C", "D"],
        itemsSelectMode: "singleChoice",
    })
    .on("item_select", (index, item, dialog) => {
        toast("您选择的是第" + (index + 1) + "项, 选项为" + item);
    })
    .show();
```

## 事件: `multi_choice`

-   `indices` {Array} 被选中的项目的索引的数组
-   `items` {Array} 被选中的项目的数组
-   `dialog` {Dialog} 对话框

对话框多选列表(itemsSelectMode 为"multiChoice")的项目被选中并点击确定时触发的事件。例如：

```js
var d = dialogs.build({
    title: "请选择",
    positive: "确定",
    negative: "取消",
    items: ["A", "B", "C", "D"],
    itemsSelectMode: "multiChoice"
}).on("item_select", (indices, items, dialog)=>{
    toast(util.format("您选择的项目为%o, 选项为%o", indices, items);
}).show();
```

## 事件: `input`

-   `text` {string} 输入框的内容
-   `dialog` {Dialog} 对话框

带有输入框的对话框当点击确定时会触发的事件。例如：

```js
dialogs
    .build({
        title: "请输入",
        positive: "确定",
        negative: "取消",
        inputPrefill: "",
    })
    .on("input", (text, dialog) => {
        toast("你输入的是" + text);
    })
    .show();
```

## 事件: `input_change`

-   `text` {string} 输入框的内容
-   `dialog` {Dialog} 对话框

对话框的输入框的文本发生变化时会触发的事件。例如：

```js
dialogs
    .build({
        title: "请输入",
        positive: "确定",
        negative: "取消",
        inputPrefill: "",
    })
    .on("input_change", (text, dialog) => {
        toast("你输入的是" + text);
    })
    .show();
```

## dialog.getProgress()

-   返回 {number}

获取当前进度条的进度值，是一个整数

## dialog.getMaxProgress()

-   返回 {number}

获取当前进度条的最大进度值，是一个整数

## dialog.getActionButton(action)

-   `action` {string} 动作，包括:
    -   `positive`
    -   `negative`
    -   `neutral`
