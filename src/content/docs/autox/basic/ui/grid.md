---
title: grid
---


# 网格布局

网格布局是将选择框控件按行和列的方式排列，适合选项较多的情况，可以更有效地利用屏幕空间。

示例代码:

```js
"ui";

ui.layout(
    <vertical>
        <grid id="iconsGrid" spanCount="3" h="auto">
            <img src="@drawable/{{this}}" h="80" margin="12" bg="?selectableItemBackgroundBorderless" />
        </grid>
        <grid id="checkboxGrid" spanCount="2" h="auto">
            <checkbox id="rb1" text="{{this}}" />
        </grid>
    </vertical>
);

var iconsGrid = ["ic_3d_rotation_black_48dp", "ic_accessibility_black_48dp", "ic_accessible_black_48dp", "ic_account_balance_black_48dp"];
var checkboxGrid = ["多选1", "多选2", "多选3", "多选4", "多选5"];

ui.iconsGrid.setDataSource(iconsGrid);
ui.checkboxGrid.setDataSource(checkboxGrid);
```

在上述代码中：

使用`<grid>`标签将选择框控件按网格方式排列。

`spanCount="3"`属性指定了每行显示三个控件。

`{{this}}`为数据来源对应的数据

图标和复选框都被包含在各自的`<grid>`标签中，实现网格布局。
