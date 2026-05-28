---
title: checkbox
---


# 复选框控件: checkbox

## 设置复选框控件色调

```js
"ui";
// 以下为不同色调的复选框控件示例
ui.layout(
    <vertical gravity="center">
        <checkbox id="checkbox" checked="true" tint="#ff0000|#00ff00" text="多选1" textColor="#00ff00" />
        <checkbox tint="#ff0000|#A895FF" text="多选2" />
        <checkbox tint="#A895FF|#00ff00" text="多选3" />
        <button id="btn">点我</button>
    </vertical>
);
// 动态改变复选框控件的色调
ui.btn.click(() => {
    ui.checkbox.setTint("#00ff00|#ff0000");
});
```

## checkbox.setTint(args)

-   `args` 色调颜色（不同颜色使用 | 分隔）
-   `return` void

设置复选框控件的色调（未选中|选中）
