---
title: relative
---


# 相对布局: relative

相对布局会把在它里面的控件以父容器和兄弟控件作为参照来确定控件的位置。

参见 Android [RelativeLayout](https://developer.android.google.cn/reference/android/widget/RelativeLayout)。

### 以父容器作为参照物

在相对布局中，可以以父容器作为参照物来确定其他控件的位置。

————— ————— ————— ————— ————— —————

| 控件 1：左上角 | | 控件 4：上居中 | | 控件 7：右上角 |

| 控件 2：左居中 | | 控件 5：（居中)| | 控件 8：右居中 |

| 控件 3：左下角 | | 控件 6：下居中 | | 控件 9：右下角 |

————— ————— ————— ————— ————— —————

在以父容器作为参照物中，属性如下：

-   `layout_alignParentLeft="true"` 以父容器为参照物，使控件贴在父容器的左边。
-   `layout_alignParentRight="true"` 以父容器为参照物，使控件贴在父容器的右边。
-   `layout_alignParentTop="true"` 以父容器为参照物，使控件贴在父容器的顶部。
-   `layout_alignParentBottom="true"` 以父容器为参照物，使控件贴在父容器的底部。
-   `layout_centerHorizontal="true"` 以父容器为参照物，使控件在父容器的水平方向居中。
-   `layout_centerVertical="true"` 以父容器为参照物，使控件在父容器的垂直方向居中。
-   `layout_centerInParent="true"` 以父容器为参照物，使控件在父容器的水平、垂直方向都居中。

可以通过这 6 个属性的组合让控件处于父容器的左上角、右上角、左下角、右下角、上居中、下居中、左居中、右居中、正居中的位置。例如给一个控件添加`layout_alignParentLeft="true"`和`layout_alignParentBottom="true"`属性后，该空间将以父容器为参照物，使控件位于父容器的左下角。

示例：

```js
"ui";

$ui.layout(
    <relative>
        <button text="居中" layout_centerInParent="true" />
        <button text="左上角" layout_alignParentLeft="true" layout_alignParentTop="true" />
        <button text="右上角" layout_alignParentRight="true" layout_alignParentTop="true" />
        <button text="左下角" layout_alignParentLeft="true" layout_alignParentBottom="true" />
        <button text="右下角" layout_alignParentRight="true" layout_alignParentBottom="true" />
        <button text="上居中" layout_alignParentTop="true" layout_centerHorizontal="true" />
        <button text="下居中" layout_alignParentBottom="true" layout_centerHorizontal="true" />
        <button text="左居中" layout_alignParentLeft="true" layout_centerVertical="true" />
        <button text="右居中" layout_alignParentRight="true" layout_centerVertical="true" />
    </relative>
);
```

### 以兄弟控件作为参照物

在相对布局中，以兄弟控件（已经确定好位置的控件）作为参照物来确定其他控件的位置。

————— ————— ————— ————— ————— —————

| 控件 2：左上角 | | 控件 5：正上方 | | 控件 7：右上角 |

| 控件 3：正左方 | | 控件 1：基准兄弟控件| | 控件 8：正右方 |

| 控件 4：左下角 | | 控件 6：正下方 | | 控件 9：右下角 |

————— ————— ————— ————— ————— —————

在以兄弟控件（button1）作为参照物中，属性如下：

-   `layout_toRightOf="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件在兄弟控件 button1 的下方。
-   `layout_toRightOf="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件在兄弟控件 button1 的右方。
-   `layout_above="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件在兄弟控件 button1 的上方。
-   `layout_below="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件在兄弟控件 button1 的下方。
-   `layout_alignLeft="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件与兄弟控件 button1 的左方平齐。
-   `layout_alignRight="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件与兄弟控件 button1 的右方平齐。
-   `layout_alignTop="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件与兄弟控件 button1 的上方平齐。
-   `layout_alignBottom="@+id/button1"` 以兄弟控件（button1）作为参照物，使控件与兄弟控件 button1 的下方平齐。

可以通过这 8 个属性的组合让控件处于兄弟控件的左上角、右上角、左下角、右下角、正上方、正下方、正左方、正右方等位置。例如给一个控件添加`layout_toRightOf="@+id/button1"`和`layout_above="@+id/button1"`属性后，该空间将以兄弟控件为参照物，使控件位于兄弟控件的右上角（两个控件的右侧边缘在同一垂线）。

相对布局里以兄弟控件为参照物确定控件的位置的示例如下：

```js
"ui";

$ui.layout(
    <relative>
        <button id="button1" text="控件1:兄弟控件" layout_centerInParent="true" />
        <button text="左上角" layout_above="@+id/button1" layout_toLeftOf="@+id/button1" />
        <button text="右上角" layout_above="@+id/button1" layout_toRightOf="@+id/button1" />
        <button text="左下角" layout_below="@+id/button1" layout_toLeftOf="@+id/button1" />
        <button text="正上方" layout_above="@+id/button1" layout_alignLeft="@+id/button1" />
        <button text="正下方" layout_below="@+id/button1" layout_alignLeft="@+id/button1" />
        <button text="右下角" layout_toRightOf="@+id/button1" layout_below="@+id/button1" />
        <button text="正左方" layout_alignTop="@+id/button1" layout_toLeftOf="@+id/button1" />
        <button text="正右方" layout_toRightOf="@+id/button1" layout_alignTop="@+id/button1" />
    </relative>
);
```
