---
title: shell
---


shell 即 Unix Shell，在类 Unix 系统提供与操作系统交互的一系列命令。

很多程序可以用来执行 shell 命令，例如终端模拟器。

在 Auto.js 大致等同于用 adb 执行命令 "adb shell"。

其实现包括两种方式：

-   通过`java.lang.Runtime.exec`执行(shell, Tap, Home 等函数)
-   通过内嵌终端模拟器执行(RootAutomator, Shell 等对象)

# shell 函数

:::tip 稳定性: 稳定

:::

## shell(cmd[, root])

-   cmd {string} 要执行的命令
-   root {Boolean} 是否以 root 权限运行，默认为 false。

一次性执行命令 cmd, 并返回命令的执行结果。返回对象的其属性如下:

-   code {number} 返回码。执行成功时为 0，失败时为非 0 的数字。
-   result {string} 运行结果(stdout 输出结果)
-   error {string} 运行的错误信息(stderr 输出结果)。例如执行需要 root 权限的命令但没有授予 root 权限会返回错误信息"Permission denied"。

示例（强制停止微信）：

```js
var result = shell("am force-stop com.tencent.mm", true);
log(result);

console.show();

if (result.code == 0) {
    toast("执行成功");
} else {
    toast("执行失败！请到控制台查看错误信息");
}
```

# Shell

shell 函数通过用来一次性执行单条命令并获取结果。如果有多条命令需要执行，用 Shell 对象的效率更高。这是因为，每次运行 shell 函数都会打开一个单独的 shell 进程并在运行结束后关闭他，这个过程需要一定的时间；而 Shell 对象自始至终使用同一个 shell 进程。

## new Shell(root)

-   root {Boolean} 是否以 root 权限运行一个 shell 进程，默认为 false。这将会影响其后使用该 Shell 对象执行的命令的权限

Shell 对象的"构造函数"。

```js
var sh = new Shell(true);
//强制停止微信
sh.exec("am force-stop com.tencent.mm");
sh.exit();
```

## Shell.exec(cmd)

-   `cmd` {string} 要执行的命令

执行命令 cmd。该函数不会返回任何值。

注意，命令执行是"异步"的、非阻塞的。也就是不会等待命令完成后才继续向下执行。

尽管这样的设计使用起来有很多不便之处，但受限于终端模拟器，暂时没有解决方式；如果后续能找到解决方案，则将提供`Shell.execAndWaitFor`函数。

## Shell.exit()

直接退出 shell。正在执行的命令会被强制退出。

## Shell.exitAndWaitFor()

执行"exit"命令并等待执行命令执行完成、退出 shell。

此函数会执行 exit 命令来正常退出 shell。

## Shell.setCallback(callback)

-   callback {Object} 回调函数

设置该 Shell 的回调函数，以便监听 Shell 的输出。可以包括以下属性：

-   onOutput {Function} 每当 shell 有新的输出时便会调用该函数。其参数是一个字符串。
-   onNewLine {Function} 每当 shell 有新的一行输出时便会调用该函数。其参数是一个字符串(不包括最后的换行符)。

例如:

```js
var sh = new Shell();
sh.setCallback({
    onNewLine: function (line) {
        //有新的一行输出时打印到控制台
        log(line);
    },
});
while (true) {
    //循环输入命令
    var cmd = dialogs.rawInput("请输入要执行的命令，输入exit退出");
    if (cmd == "exit") {
        break;
    }
    //执行命令
    sh.exec(cmd);
}
sh.exit();
```

# 附录: shell 命令简介

以下关于 shell 命令的资料来自[AndroidStudio 用户指南：Shell 命令](https://developer.android.com/studio/command-line/adb.html#shellcommands)。
