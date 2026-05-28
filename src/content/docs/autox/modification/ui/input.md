---
title: input
---


# 输入框控件: input

## 设置输入框控件色调

```js
"ui";
// 以下为不同色调的输入框控件示例
ui.layout(
    <vertical gravity="center">
        <input id="input" checked="true" tint="#ff0000|#00ff00" text="输入框1" textColor="#00ff00" />
        <input tint="#ff0000|#A895FF" text="输入框2" />
        <input tint="#A895FF|#00ff00" text="输入框3" />
        <button id="btn">点我</button>
    </vertical>
);
// 动态改变输入框控件的色调
ui.btn.click(() => {
    ui.input.setTint("#00ff00|#ff0000");
});
```

## input.setTint(args)

-   `args` 色调颜色（不同颜色使用 | 分隔）
-   `return` void

设置输入框控件的色调（未聚焦|聚焦）
