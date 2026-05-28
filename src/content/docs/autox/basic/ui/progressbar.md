---
title: progressbar
---


# 进度条控件: progressbar

**官方教程：**

progressbar 即进度条控件，显示某种操作的进度及百分比。通过修改进度条控件的参数可以修改进度条的呈现形式，默认为无限圆形进度条。

参见 Android [ProgressBar](https://developer.android.google.cn/reference/android/widget/ProgressBar)

`indeterminate`:

-   {boolean}

是否为无限进度条，默认为`true`。可选的值为：

-   `true` 显示无限进度条
-   `false` 显示有限进度条

`progress`:

-   {number}

进度条的进度，为一个整数，默认范围是 0~100。

`min`:

-   {number}

进度条的最小进度，默认为 0。

`max`:

-   {number}

进度条的最大进度，默认为 100。

`progressDrawable`:

-   {string}

定义用于在 progress 模式下绘制进度条的 drawable。

`progressBackgroundTint`:

-   {string}

对 progress 的背景应用颜色。不修改当前的着色模式。

`progressBackgroundTintMode`:

-   "add" | "multiply" | "screen" | "src_atop" | "src_in" | "src_over"

将 progressBackgroundTint 指定的色调应用到进度背景的混合模式。

`progressTint`:

-   {string}

将颜色应用于整个可绘制的进度。不修改当前的着色模式。

`progressTintMode`:

-   "add" | "multiply" | "screen" | "src_atop" | "src_in" | "src_over"

将 progressTint 指定的色调应用到进度背景的混合模式。

`secondaryProgress`:

-   {number}

设置次要进度的值。如果进度条处于 indeterminate（无限进度条）模式，则不执行任何操作。

`secondaryProgressTint`:

-   {string}

对 secondaryProgress 应用色调（如果存在）。不修改当前的着色模式。

`secondaryProgressTintMode`:

-   "add" | "multiply" | "screen" | "src_atop" | "src_in" | "src_over"

将 secondaryProgressTint 指定的色调应用到辅助进度指示器的混合模式。

`style`:

-   {string}

设置进度条的宽度、布局样式。可选的值有：

-   `@style/Base.Widget.AppCompat.ProgressBar.Horizontal` 水平直线进度条
-   `@style/Base.Widget.AppCompat.ProgressBar` 圆形进度条
