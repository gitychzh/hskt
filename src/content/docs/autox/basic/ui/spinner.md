---
title: spinner
---


# 下拉菜单控件: spinner

**官方教程：**

点击下拉箭头，可弹出多个选项供用户选择。

参见 Android [Spinner](https://developer.android.google.cn/reference/android/widget/Spinner)

`spinnerMode`:

-   {string}

下拉菜单的呈现模式。默认为 dropdown 下拉菜单形式。

-   `dialog` 使用对话框模式菜单来选择 spinner 选项。
-   `dropdown`使用下拉模式菜单来选择 spinner 选项。

`dropDownHorizontalOffset`:

-   {string}

为 spinner 的选择弹出窗口设置水平偏移。仅在 spinnerMode=`dropdown`时有效。

`dropDownVerticalOffset`:

-   {string}

为 spinner 的选择弹出窗口设置垂直偏移。仅在 spinnerMode=`dropdown`时有效。

`dropDownWidth`:

-   {string}

设置 spinner 的选择弹出窗口的宽度。仅在 spinnerMode=`dropdown`时有效。

`popupBackground`:

-   {string}

为 spinner 的选择弹出窗口设置背景。仅在 spinnerMode=`dropdown`时有效。

`prompt`：

-   {string}

设置显示对话框时显示的提示。

`textStyle`:

-   {string}

设置 spinner 当前被选择的项目文本的样式，例如`bold`(加粗), `italic`(斜体)等。

`textColor`:

-   {string}

设置 spinner 当前被选择的项目文本的颜色，例如`bold`(加粗), `italic`(斜体)等。

`textSize`:

-   {string}

设置 spinner 当前被选择的项目文本的字体尺寸大小。

`entries`:

-   {string}

下拉菜单的选项具体内容。若有多个选项，可使用|隔开，例如 entries="选项 1|选项 2|选项 3"。在代码中也可动态修改，比如`$ui.spinner.attr('entries', '选项A|选项B|选项C|选项D')`。

`entryTextStyle`:

-   {string}

下拉菜单的选项具体内容的文本样式。

`entryTextColor`:

-   {string}

下拉菜单的选项具体内容的文本颜色。

`entryTextSize`:

-   {string}

下拉菜单的选项具体内容的字体尺寸大小。
