---
title: dialogs
---


# Dialogs

:::tip 稳定性: 稳定

:::

dialogs 模块提供了简单的对话框支持，可以通过对话框和用户进行交互。最简单的例子如下：

```js
alert("您好");
```

这段代码会弹出一个消息提示框显示"您好"，并在用户点击"确定"后继续运行。稍微复杂一点的例子如下：

```js
var clear = confirm("要清除所有缓存吗?");
if (clear) {
    alert("清除成功!");
}
```

`confirm()`会弹出一个对话框并让用户选择"是"或"否"，如果选择"是"则返回 true。

需要特别注意的是，对话框在 ui 模式下不能像通常那样使用，应该使用回调函数或者[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的形式。理解这一点可能稍有困难。举个例子:

```js
"ui";
//回调形式
confirm("要清除所有缓存吗?", function (clear) {
    if (clear) {
        alert("清除成功!");
    }
});
//Promise形式
confirm("要清除所有缓存吗?").then((clear) => {
    if (clear) {
        alert("清除成功!");
    }
});
```

## dialogs.alert(title[, content, callback])

-   `title` {string} 对话框的标题。
-   `content` {string} 可选，对话框的内容。默认为空。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。

该函数也可以作为全局函数使用。

```js
alert("出现错误~", "出现未知错误，请联系脚本作者”);
```

在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
alert("嘿嘿嘿").then(() => {
    //当点击确定后会执行这里
});
```

## dialogs.confirm(title[, content, callback])

-   `title` {string} 对话框的标题。
-   `content` {string} 可选，对话框的内容。默认为空。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 `true` ，否则返回 `false` 。

该函数也可以作为全局函数使用。

在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
confirm("确定吗").then((value) => {
    //当点击确定后会执行这里, value为true或false, 表示点击"确定"或"取消"
});
```

## dialogs.rawInput(title[, prefill, callback])

-   `title` {string} 对话框的标题。
-   `prefill` {string} 输入框的初始内容，可选，默认为空。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回 null。

该函数也可以作为全局函数使用。

```js
var name = rawInput("请输入您的名字", "小明");
alert("您的名字是" + name);
```

在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
rawInput("请输入您的名字", "小明").then((name) => {
    alert("您的名字是" + name);
});
```

当然也可以使用回调函数，例如:

```js
rawInput("请输入您的名字", "小明", (name) => {
    alert("您的名字是" + name);
});
```

## dialogs.input(title[, prefill, callback])

等效于 `eval(dialogs.rawInput(title, prefill, callback))`, 该函数和 rawInput 的区别在于，会把输入的字符串用 eval 计算一遍再返回，返回的可能不是字符串。

可以用该函数输入数字、数组等。例如：

```js
var age = dialogs.input("请输入您的年龄", "18");
// new Date().getYear() + 1900 可获取当前年份
var year = new Date().getYear() + 1900 - age;
alert("您的出生年份是" + year);
```

在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
dialogs.input("请输入您的年龄", "18").then((age) => {
    var year = new Date().getYear() + 1900 - age;
    alert("您的出生年份是" + year);
});
```

## dialogs.prompt(title[, prefill, callback])

相当于 `dialogs.rawInput()`;

## dialogs.select(title, items, callback)

-   `title` {string} 对话框的标题。
-   `items` {Array} 对话框的选项列表，是一个字符串数组。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。

```js
var options = ["选项A", "选项B", "选项C", "选项D"];
var i = dialogs.select("请选择一个选项", options);
if (i >= 0) {
    toast("您选择的是" + options[i]);
} else {
    toast("您取消了选择");
}
```

在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
dialogs.select("请选择一个选项", ["选项A", "选项B", "选项C", "选项D"]).then((i) => {
    toast(i);
});
```

## dialogs.singleChoice(title, items[, index, callback])

-   `title` {string} 对话框的标题。
-   `items` {Array} 对话框的选项列表，是一个字符串数组。
-   `index` {number} 对话框的初始选项的位置，默认为 0。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.multiChoice(title, items[, indices, callback])

-   `title` {string} 对话框的标题。
-   `items` {Array} 对话框的选项列表，是一个字符串数组。
-   `indices` {Array} 选项列表中初始选中的项目索引的数组，默认为空数组。
-   `callback` {Function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回`[]`。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.build(properties)

-   `properties` {Object} 对话框属性，用于配置对话框。
-   返回 {Dialog}

创建一个可自定义的对话框，例如：

```js
dialogs
    .build({
        //对话框标题
        title: "发现新版本",
        //对话框内容
        content: "更新日志: 新增了若干了BUG",
        //确定键内容
        positive: "下载",
        //取消键内容
        negative: "取消",
        //中性键内容
        neutral: "到浏览器下载",
        //勾选框内容
        checkBoxPrompt: "不再提示",
    })
    .on("positive", () => {
        //监听确定键
        toast("开始下载....");
    })
    .on("neutral", () => {
        //监听中性键
        app.openUrl("https://www.autojs.org");
    })
    .on("check", (checked) => {
        //监听勾选框
        log(checked);
    })
    .show();
```

选项 properties 可供配置的项目为:

-   `title` {string} 对话框标题
-   `titleColor` {string} | {number} 对话框标题的颜色
-   `buttonRippleColor` {string} | {number} 对话框按钮的波纹效果颜色
-   `icon` {string} | {Image} 对话框的图标，是一个 URL 或者图片对象
-   `content` {string} 对话框文字内容
-   `contentColor`{string} | {number} 对话框文字内容的颜色
-   `contentLineSpacing`{number} 对话框文字内容的行高倍数，1.0 为一倍行高
-   `items` {Array} 对话框列表的选项
-   `itemsColor` {string} | {number} 对话框列表的选项的文字颜色
-   `itemsSelectMode` {string} 对话框列表的选项选择模式，可以为:
    -   `select` 普通选择模式
    -   `single` 单选模式
    -   `multi` 多选模式
-   `itemsSelectedIndex` {number} | {Array} 对话框列表中预先选中的项目索引，如果是单选模式为一个索引；多选模式则为数组
-   `positive` {string} 对话框确定按钮的文字内容(最右边按钮)
-   `positiveColor` {string} | {number} 对话框确定按钮的文字颜色(最右边按钮)
-   `neutral` {string} 对话框中立按钮的文字内容(最左边按钮)
-   `neutralColor` {string} | {number} 对话框中立按钮的文字颜色(最左边按钮)
-   `negative` {string} 对话框取消按钮的文字内容(确定按钮左边的按钮)
-   `negativeColor` {string} | {number} 对话框取消按钮的文字颜色(确定按钮左边的按钮)
-   `checkBoxPrompt` {string} 勾选框文字内容
-   `checkBoxChecked` {boolean} 勾选框是否勾选
-   `progress` {Object} 配置对话框进度条的对象：
    -   `max` {number} 进度条的最大值，如果为-1 则为无限循环的进度条
    -   `horizontal` {boolean} 如果为 true, 则对话框无限循环的进度条为水平进度条
    -   `showMinMax` {boolean} 是否显示进度条的最大值和最小值
-   `cancelable` {boolean} 对话框是否可取消，如果为 false，则对话框只能用代码手动取消
-   `canceledOnTouchOutside` {boolean} 对话框是否在点击对话框以外区域时自动取消，默认为 true
-   `inputHint` {string} 对话框的输入框的输入提示
-   `inputPrefill` {string} 对话框输入框的默认输入内容

通过这些选项可以自定义一个对话框，并通过监听返回的 Dialog 对象的按键、输入事件来实现交互。下面是一些例子。

模拟 alert 对话框：

```js
dialogs
    .build({
        title: "你好",
        content: "今天也要元气满满哦",
        positive: "好的",
    })
    .show();
```

模拟 confirm 对话框:

```js
dialogs
    .build({
        title: "你好",
        content: "请问你是笨蛋吗?",
        positive: "是的",
        negative: "我是大笨蛋",
    })
    .on("positive", () => {
        alert("哈哈哈笨蛋");
    })
    .on("negative", () => {
        alert("哈哈哈大笨蛋");
    })
    .show();
```

模拟单选框:

```js
dialogs
    .build({
        title: "单选",
        items: ["选项1", "选项2", "选项3", "选项4"],
        itemsSelectMode: "single",
        itemsSelectedIndex: 3,
    })
    .on("single_choice", (index, item) => {
        toast("您选择的是" + item);
    })
    .show();
```

"处理中"对话框:

```js
var d = dialogs
    .build({
        title: "下载中...",
        progress: {
            max: -1,
        },
        cancelable: false,
    })
    .show();

setTimeout(() => {
    d.dismiss();
}, 3000);
```

输入对话框:

```js
dialogs
    .build({
        title: "请输入您的年龄",
        inputPrefill: "18",
    })
    .on("input", (input) => {
        var age = parseInt(input);
        toastLog(age);
    })
    .show();
```

使用这个函数来构造对话框，一个明显的不同是需要使用回调函数而不能像 dialogs 其他函数一样同步地返回结果；但也可以通过 threads 模块的方法来实现。例如显示一个输入框并获取输入结果为：

```js
var input = threads.disposable();
dialogas
    .build({
        title: "请输入您的年龄",
        inputPrefill: "18",
    })
    .on("input", (text) => {
        input.setAndNotify(text);
    })
    .show();
var age = parseInt(input.blockedGet());
tosatLog(age);
```
