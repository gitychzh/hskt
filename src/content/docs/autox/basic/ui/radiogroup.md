---
title: radiogroup
---


# 单选框组控件: radiogroup

示例代码:

```js
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请选择一个选项：" textSize="18sp" />
        <radiogroup id="rg">
            <radio id="rb1" text="选项1" checked="{{true}}" />
            <radio id="rb2" text="选项2" />
            <radio id="rb3" text="选项3" />
        </radiogroup>

        <text text="请选择一个或多个选项：" textSize="18sp" marginTop="16" />
        <horizontal>
            <checkbox id="cb1" text="复选选项1" checked="{{false}}" />
            <checkbox id="cb2" text="复选选项2" checked="{{true}}" />
            <checkbox id="cb3" text="复选选项3" checked="{{false}}" />
        </horizontal>
    </vertical>
);
```

**官方教程：**

radiogroup 单选框组合提供了几个单选框 radio 选项，但用户至多只能选择其中一个选项，即实现选项选中互斥功能。

参见 Android [RadioGroup](https://developer.android.google.cn/reference/android/widget/RadioGroup)

`checkedButton`:

设置 radiogroup 单选框组合中初始勾选的单选框 id。例如`checkedButton="@+id/radio5"`，则使 id 为 radio5 的单选框选项为初始勾选状态。

例子：

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <radiogroup checkedButton="@+id/radio5">
            <radio id="radio4" text="单选框4" />
            <radio id="radio5" text="初始勾选的单选框5" />
            <radio id="radio6" text="单选框6" />
        </radiogroup>
    </vertical>
);
```

`setOnCheckedChangeListener(listener)`:

`listener`{Function} 勾选监听的回调函数，其参数为:

-   `group` {RadioGroup} 发生勾选变化事件的 radiogroup 对象

-   `checkedId` {number} 被勾选的 radio 的 id，是一个整数；若当前没有任何单选框被勾选，则为`-1`

    设置某个 radiogroup 单选框组合中的单选框被选中时的监听。需要注意的是这里的`checkedId`是一个整数，并不是类似于`radio5`这样的 id 字符串，我们可以通过`findViewById()`函数来获取具体被勾选的单选框，比如：

    ```js
    "ui";

    $ui.layout(
        <vertical padding="16">
            <radiogroup id="radiogroup1">
                <radio id="radio1" text="单选框1" />
                <radio id="radio2" text="单选框2" />
                <radio id="radio3" text="单选框3" />
            </radiogroup>
        </vertical>
    );

    $ui.radiogroup1.setOnCheckedChangeListener((group, checkedId) => {
        // 根据整数id获取勾选的radio控件
        let checkedRadio = $ui.radiogroup1.findViewById(checkedId);
        switch (checkedRadio) {
            case $ui.radio1:
                toastLog("单选框1被勾选");
                break;
            case $ui.radio2:
                toastLog("单选框2被勾选");
                break;
            case $ui.radio3:
                toastLog("单选框3被勾选");
                break;
            default:
                toastLog("没有任何单选框被勾选");
                break;
        }
    });
    ```

`getCheckedRadioButtonId()`:

-   返回 {number}

获取单选框组合中的已勾选的单选框选项的整数 ID，若当前没有任何单选框被勾选，则为`-1`。

需要注意的是这里的`checkedId`是一个整数，并不是类似于`radio5`这样的 id 字符串，我们可以通过`findViewById()`函数来获取具体被勾选的单选框。

进一步，我们可以通过`indexOfChild`获取被勾选的单选框在 radiogroup 中的位置。

例如：

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <radiogroup id="radiogroup2">
            <radio id="radio4" text="单选框4" />
            <radio id="radio5" text="单选框5" />
            <radio id="radio6" text="单选框6" />
        </radiogroup>
        <button id="get" text="获取当前勾选项" />
    </vertical>
);

$ui.get.on("click", () => {
    // 获取radiogroup2勾选的单选框ID
    let checkedId = $ui.radiogroup2.getCheckedRadioButtonId();
    if (checkedId === -1) {
        toastLog("没有任何单选框被勾选");
    } else {
        // 根据id获取勾选的radio
        let checkedRadio = $ui.radiogroup2.findViewById(checkedId);
        // 获取勾选的位置
        let i = $ui.radiogroup2.indexOfChild(checkedRadio);
        toastLog("当前勾选的单选框的文本: " + checkedRadio.getText().toString() + ", 位置: " + i);
    }
});
```

`clearCheck()`:

清空单选框组合的各单选框选项的勾选状态。也即让单选框组合重置为未勾选状态。

例如:

```js
"ui";

$ui.layout(
    <vertical padding="16">
        <checkbox id="cb1" text="复选框" />
        <radiogroup id="radiogroup1">
            <radio id="radio1" text="单选框1" />
            <radio id="radio2" text="单选框2" />
            <radio id="radio3" text="单选框3" />
        </radiogroup>
        <button id="clear" text="清空选择" />
    </vertical>
);

$ui.clear.on("click", () => {
    // 清空单选框选择
    $ui.radiogroup1.clearCheck();
    // 设置复选框为不勾选
    $ui.cb1.attr("checked", "false");
});
```
