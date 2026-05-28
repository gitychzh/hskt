---
title: timeUtils
---


# 时间工具

## dateFormat([timestamp, format])

-   `timestamp` string? 时间戳，默认为当前时间戳
-   `format` string? 格式，默认为 `yyyy-MM-dd HH:mm:ss.SSS`

时间戳格式化

```js
let format = "HH:mm:ss.SSS";
let ts = Date.now();
let fm = dateFormat(ts, format);
fm == "18:47:22.866";
```

## dateToTimestamp(dateStr, pattern)

-   `dateStr` string 时间字符串
-   `pattern` string 时间字符串格式，默认为 `yyyy-MM-dd HH:mm:ss.SSS`

时间转时间戳

```js
let ts = dateToTimestamp("2025-01-20", "yyyy-MM-dd");
```
