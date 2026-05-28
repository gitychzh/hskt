---
title: switch
---


# 开关控件: switch

## 设置按钮和轨道参数

```js
"ui";
// 以下为各种形状的开关示例
ui.layout(
    <vertical gravity="center">
        <horizontal gravity="center" margin="16">
            <switch id="switch" checked="false" thumbShape="168|88,66,88,66" trackShape="100|40,70,40,70" thumbTint="#A895FF" trackTint="#6D61A6" marginEnd="16" />
            <switch checked="true" thumbShape="140|70,70,40,40" trackShape="|70,70,40,40" thumbTint="#A895FF" trackTint="#6D61A6" />
        </horizontal>
        <horizontal gravity="center" margin="16">
            <switch checked="false" thumbShape="100|50" thumbTint="#A895FF" trackTint="#cfcfcf|#6D61A6" marginEnd="16" />
            <switch checked="true" thumbShape="120|50" thumbTint="#A895FF" />
        </horizontal>
        <horizontal gravity="center" margin="16">
            <switch checked="false" thumbShape="100|20" trackShape="|20" thumbTint="#888888|#A895FF" trackTint="#cfcfcf" marginEnd="16" />
            <switch checked="true" thumbShape="100|20" thumbTint="#888888|#A895FF" trackTint="#cfcfcf" />
        </horizontal>
        <horizontal gravity="center" margin="16">
            <switch checked="false" thumbShape="168|88" thumbTint="#888888|#A895FF" trackShape="168|168" trackTint="#cfcfcf|#6D61A6" marginEnd="16" />
            <switch checked="true" trackShape="200|500" thumbTint="#ff6666|#ff0000" trackTint="#cfcfcf|#6D61A6" />
        </horizontal>
        <button id="btn">点我</button>
    </vertical>
);
// 动态改变开关的按钮和滑块的色调
ui.btn.click(() => {
    ui.switch.setThumbTint("#ff6666|#ff0000");
    ui.switch.setTrackTint("#aaffaa|#00ffff");
});
```

## Switch.setThumbTint(args)

-   `args` 色调颜色（不同颜色使用 | 分隔）
-   `return` void

设置开关按钮的色调（关闭|打开）

## Switch.setThumbShape(args)

-   `args` 大小形状参数（大小和形状使用 | 分隔）
-   `return` void

设置开关按钮的大小形状（宽高|圆角半径）

## Switch.setThumbBackground(args)

-   `args` 背景（本地图片路径或颜色）
-   `return` void

设置开关按钮的背景

## Switch.setTrackTint(args)

-   `args` 色调颜色（不同颜色使用 | 分隔）
-   `return` void

设置开关轨道的色调（关闭|打开）

## Switch.setTrackShape(args)

-   `args` 大小形状参数（大小和形状使用 | 分隔）
-   `return` void

设置开关轨道的大小形状（宽高|圆角半径）

## Switch.setTrackBackground(args)

-   `args` 背景（本地图片路径或颜色）
-   `return` void

设置开关轨道的背景
