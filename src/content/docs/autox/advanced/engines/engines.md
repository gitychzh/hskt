---
title: engines
---


# Engines

:::tip 稳定性: 稳定

:::

engines 模块包含了一些与脚本环境、脚本运行、脚本引擎有关的函数，包括运行其他脚本，关闭脚本等。

例如，获取脚本所在目录：

```js
toast(engines.myEngine().cwd());
```

# Engines

## engines.execScript(name, script[, config])

-   `name` {string} 要运行的脚本名称。这个名称和文件名称无关，只是在任务管理中显示的名称。
-   `script` {string} 要运行的脚本内容。
-   `config` {Object} 运行配置项
    -   `delay` {number} 延迟执行的毫秒数，默认为 0
    -   `loopTimes` {number} 循环运行次数，默认为 1。0 为无限循环。
    -   `interval` {number} 循环运行时两次运行之间的时间间隔，默认为 0
    -   `path` {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。

在新的脚本环境中运行脚本 script。返回一个[ScriptExectuion](#ScriptExecution)对象。

所谓新的脚本环境，指定是，脚本中的变量和原脚本的变量是不共享的，并且，脚本会在新的线程中运行。

最简单的例子如下：

```js
engines.execScript("hello world", "toast('hello world')");
```

如果要循环运行，则：

```js
//每隔 3 秒运行一次脚本，循环 10 次
engines.execScript("hello world", "toast('hello world')", {
    loopTimes: 10,
    interval: 3000,
});
```

用字符串来编写脚本非常不方便，可以结合 `Function.toString()`的方法来执行特定函数:

```js
function helloWorld() {
    //注意，这里的变量和脚本主体的变量并不共享
    toast("hello world");
}
engines.execScript("hello world", "helloWorld();\n" + helloWorld.toString());
```

如果要传递变量，则可以把这些封装成一个函数：

```js
function exec(action, args) {
    args = args || {};
    engines.execScript(action.name, action + "(" + JSON.stringify(args) + ");\n" + action.toString());
}

//要执行的函数，是一个简单的加法
function add(args) {
    toast(args.a + args.b);
}

//在新的脚本环境中执行 1 + 2
exec(add, { a: 1, b: 2 });
```

## engines.execScriptFile(path[, config])

-   `path` {string} 要运行的脚本路径。
-   `config` {Object} 运行配置项
    -   `delay` {number} 延迟执行的毫秒数，默认为 0
    -   `loopTimes` {number} 循环运行次数，默认为 1。0 为无限循环。
    -   `interval` {number} 循环运行时两次运行之间的时间间隔，默认为 0
    -   `path` {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。

在新的脚本环境中运行脚本文件 path。返回一个[ScriptExecution](#ScriptExecution)对象。

```js
engines.execScriptFile("/sdcard/脚本/1.js");
```

## engines.execAutoFile(path[, config])

-   `path` {string} 要运行的录制文件路径。
-   `config` {Object} 运行配置项
    -   `delay` {number} 延迟执行的毫秒数，默认为 0
    -   `loopTimes` {number} 循环运行次数，默认为 1。0 为无限循环。
    -   `interval` {number} 循环运行时两次运行之间的时间间隔，默认为 0
    -   `path` {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。

在新的脚本环境中运行录制文件 path。返回一个[ScriptExecution](#ScriptExecution)对象。

```js
engines.execAutoFile("/sdcard/脚本/1.auto");
```

## engines.stopAll()

停止所有正在运行的脚本。包括当前脚本自身。

## engines.stopAllAndToast()

停止所有正在运行的脚本并显示停止的脚本数量。包括当前脚本自身。

## engines.myEngine()

返回当前脚本的脚本引擎对象([ScriptEngine](#ScriptEngine))

**[v4.1.0 新增]**
特别的，该对象可以通过`execArgv`来获取他的运行参数，包括外部参数、intent 等。例如：

```js
log(engines.myEngine().execArgv);
```

普通脚本的运行参数通常为空，通过定时任务的广播启动的则可以获取到启动的 intent。

## engines.all()

-   返回 {Array}

返回当前所有正在运行的脚本的脚本引擎[ScriptEngine](#ScriptEngine)的数组。

```js
log(engines.all());
```
