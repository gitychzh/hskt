---
title: widgetsBasedAutomation
---


# 基于控件的操作

## UiSelector.find([isRefresh])

-   `isRefresh` 是否刷新控件
-   `return` UiCollection

```js
text("嘿嘿").find(true);
// 将会先刷新页面节点信息，然后再返回刷新后的寻找结果
// 一般用不到，除非屏幕发生变化之后寻找控件结果不变，例如某手国际版
```
