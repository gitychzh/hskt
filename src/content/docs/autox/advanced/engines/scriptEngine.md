---
title: scriptEngine
---


# ScriptEngine

脚本引擎对象。

## ScriptEngine.isDestroyed()

-   返回 {Boolean}

检测该脚本是否执行结束

```
let e = engines.execScriptFile("xx.js");
sleep(2000);
log(e.getEngine().isDestroyed())
```

## ScriptEngine.forceStop()

停止脚本引擎的执行。

## ScriptEngine.cwd()

-   返回 {string}

返回脚本执行的路径。对于一个脚本文件而言为这个脚本所在的文件夹；对于其他脚本，例如字符串脚本，则为`null`或者执行时的设置值。

## ScriptEngine.getSource()

-   返回 [ScriptSource](#scriptsource)

返回当前脚本引擎正在执行的脚本对象。

```js
log(engines.myEngine().getSource());
```

## ScriptEngine.emit(eventName[, ...args])

-   `eventName` {string} 事件名称
-   `...args` {any} 事件参数

向该脚本引擎发送一个事件，该事件可以在该脚本引擎对应的脚本的 events 模块监听到并在脚本主线程执行事件处理。

例如脚本 receiver.js 的内容如下：

```js
//监听 say 事件
events.on("say", function (words) {
    toastLog(words);
});
//保持脚本运行
setInterval(() => {}, 1000);
```

同一目录另一脚本可以启动他并发送该事件：

```js
//运行脚本
var e = engines.execScriptFile("./receiver.js");
//等待脚本启动
sleep(2000);
//向该脚本发送事件
e.getEngine().emit("say", "你好");
```
