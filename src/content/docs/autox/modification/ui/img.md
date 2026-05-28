---
title: img
---


# 图片控件: img

## src

:::danger 稳定性: 实验

:::

使用相对路径显示本地图片

例: ui 显示当前脚本引擎工作目录下的图片

```js
"ui";
ui.layout(
    <frame>
        <img src="./pic.png"></img>
    </frame>
);
// ./ 等于 "file://" + files.cwd() + "/"
```
