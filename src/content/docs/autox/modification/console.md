---
title: console
---


# Console

## traceLog(msg [,path])

-   `msg` any 打印信息
-   `path` string? 追加到文件
-   `return` void

打印出调用这个函数所在的调用栈信息[追加到文件]

```js
function test1() {
    traceLog("测试", "/sdcard/log.txt");
}
function test2() {
    test1();
}
function test3() {
    test2();
}
test3();
```

控制台输出：(同时输出到文件: /sdcard/log.txt)

```log
<time>: 2025-04-14 12:31:41.382
	<line>: 10
	<line>: 8 (test3)
	<line>: 5 (test2)
	<line>: 2 (test1)
<msg>: 测试
```
