---
title: radio
---


# 单选框控件: radio

## 设置单选框控件色调

```js
"ui";
// 以下为不同色调的单选框控件示例
ui.layout(
    <vertical gravity="center">
        <radiogroup>
            <radio id="radio" checked="true" tint="#ff0000|#00ff00" text="单选1" textColor="#00ff00" />
            <radio tint="#ff0000|#A895FF" text="单选2" />
            <radio tint="#A895FF|#00ff00" text="单选3" />
        </radiogroup>
        <button id="btn">点我</button>
    </vertical>
);
// 动态改变单选框控件的色调
ui.btn.click(() => {
    ui.radio.setTint("#00ff00|#ff0000");
});
```

## Radio.setTint(args)

-   `args` 色调颜色（不同颜色使用 | 分隔）
-   `return` void

设置单选框控件的色调（未选中|选中）
