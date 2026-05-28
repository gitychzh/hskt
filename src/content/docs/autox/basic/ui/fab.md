---
title: fab
---


# 浮动按钮控件: fab

**官方教程：**

浮动按钮是 UI 界面上的一个浮动的图标，它的颜色、图标、位置在 UI 界面中有着明显的区别，通常是为了突出一个重要的功能点，引导用户点击来执行重要/频繁的操作。

`src`:

指定浮动按钮的图标，其格式与图片控件属性[src](#src)一致，比如`@drawable/ic_add_black_48dp`，`https://图片网址`等。

以下是一个放在右下角的浮动按钮的例子：

```js
"ui";

ui.layout(
    <frame>
        <fab id="add" w="auto" h="auto" src="@drawable/ic_add_black_48dp" margin="16" layout_gravity="bottom|right" tint="#ffffff" />
    </frame>
);

ui.add.on("click", () => {
    toastLog("浮动按钮被点击了");
});
```
