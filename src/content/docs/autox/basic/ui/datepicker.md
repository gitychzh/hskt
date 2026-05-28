---
title: datepicker
---


# 日期选择控件: datepicker

**官方教程：**

用户可以选择日期，呈现内容为"MM/dd/yyyy"，日历样式日期选择模式还可呈现该日期的星期，如周二。

参见 Android [DatePicker](https://developer.android.google.cn/reference/android/widget/DatePicker)

`datePickerMode`:

-   {string}

日期选择界面的呈现模式。若用户在 datePicker 控件中未指定 datePickerMode，则默认使用日历样式`calendar`时间选择。

-   `spinner` 滑动样式日期选择模式。
-   `calendar` 日历样式选择模式。

`spinnersShown`:

-   {boolean}

设置是否显示 spinner 滑动样式日期选择模式。

`calendarViewShown`:

-   {boolean}

设置是否显示日历样式。

`firstDayOfWeek`:

-   {number}

设置一周的第一天。范围为 1~7，分别代表周日~周六。默认为 1，也即周日。

`maxDate`:

-   {string}

设置此 datePicker 支持的最大日期，格式为`yyyy/MM/dd`。

`minDate`:

-   {string}

设置此 datePicker 支持的最小日期，格式为`yyyy/MM/dd`。
