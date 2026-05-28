---
title: button
---


# 按钮控件: button

## 设置渐变背景

```js
"ui";
// 以下为两种圆形渐变背景按钮示例
ui.layout(
    <vertical gravity="center">
        <button id="btn" gravity="center" w="168" h="168" gradient="colors=#ff66FF,#ccccFF|corner=168|ori=tl_br">
            点我
        </button>
        <button marginTop="10" gravity="center" w="168" h="168" gradient="shape=oval|colors=#ff66FF,#ccccFF|ori=tl_br">
            椭圆
        </button>
    </vertical>
);
// 通过触摸事件动态改变渐变颜色方向
ui.btn.addListener("touch", (event) => {
    if (event.getAction() == 0) {
        ui.btn.setBackgroundGradient("colors=#ff66FF,#ccccFF|corner=150|ori=br_tl");
    } else if (event.getAction() == 1) {
        ui.btn.setBackgroundGradient("colors=#ff66FF,#ccccFF|corner=150|ori=tl_br");
    }
});
```

## 动态设置渐变背景

Button.setBackgroundGradient(args)

-   `args` 渐变参数
-   `return` void

设置按钮渐变背景（每个参数之间使用 | 分隔，具体参考如下）

```
参数：
shape: rect(方形-默认)、line(线)、ring(圆环)、oval(椭圆)
colors: 渐变颜色数组
ori: 渐变方向 top_bottom、bottom_top、left_right、right_left、tl_br、br_tl、tr_bl、bl_tr
type: 渐变类型 linear(线性-默认) radial(辐射) sweep(扫描)
center: 渐变中心 0.5,0.5 默认(x:0.5, y:0.5)
corner: 圆角 默认 16px

注: 有些可能不符合预期，暂时不深入研究 *.*
```
