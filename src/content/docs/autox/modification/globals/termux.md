---
title: termux
---


:::info 前情提要

安装 termux(版本需 0.95 以上)

编辑 ~/.termux/termux.properties 文件, 将 allow-external-apps=true 前面的注释 # 去掉, 保存退出

(如果有)比如小米：手机需要开启 USB 调试(安全设置) - 可在开发者选项里找到

(如果有)比如 oppo：手机需要开启 禁止权限监控 - 可在开发者选项里找到

授予 termux 执行命令权限

可在应用权限页面授予，找不到或者懒得找可以通过 shell 命令授予

```shell
# adb 连接手机后授予 termux 权限， autoxjs 或者打包后的应用
adb shell pm grant 包名 com.termux.permission.RUN_COMMAND
```

:::

:::info 提示

如果执行命令没反应的话, 可以先手动打开 termux
:::

# termux.exec(command)

```js
// 只是发送命令, 无法获取结果
// 示例:
termux.exec("pwd");
```

# termux.exec(command, callback)

```js
// 向 termux 发送命令, 并通过回调获取结果
// 示例:
termux.exec("pwd", (result) => {
    log(result); // 日志应打印出: {stdout=/data/data/com.termux/files/home, stderr=, exitCode=0, errmsg=, err=-1}
});
```

---

:::warning 稳定性: 弃用

65824 之后修改为 termux.exec(command, callback)
:::

# termux(command [,options])

```js
// 输出字符串到文件
termux("echo 'hello world' > /sdcard/termuxRunResult.autox");

// 获取执行结果
termux("ls /sdcard/", {
    outputPath: "/sdcard/termux_output.txt",
    callback: (result) => {
        log("输出结果:\n" + result);
        toast(result);
    },
    runBackground: false, // 需要打开 termux 的悬浮窗、后台弹出界面权限
    sessionAction: 0, //指定 会话动作
    clean: false, // 执行完后清理输出文件
    top: true, // 不创建新的活动
    checkGap: 100, // 检查间隔时间，单位毫秒
    checkCount: 600, // 检查次数
});
```

## sendTermuxIntent(intent)

-   `intent` Intent 意图
-   `return` void

发送 Intent 到 Termux

```js
// 自己构建 intent
function getTermuxIntent(command, runBackground, sessionAction, top) {
    let intent = new Intent();
    let args = stringArray("-c", command);
    intent.setClassName("com.termux", "com.termux.app.RunCommandService");
    intent.setAction("com.termux.RUN_COMMAND");
    intent.putExtra("com.termux.RUN_COMMAND_PATH", "/data/data/com.termux/files/usr/bin/bash");
    intent.putExtra("com.termux.RUN_COMMAND_ARGUMENTS", args);
    intent.putExtra("com.termux.RUN_COMMAND_WORKDIR", "/data/data/com.termux/files/home");
    intent.putExtra("com.termux.RUN_COMMAND_BACKGROUND", runBackground);
    intent.putExtra("com.termux.RUN_COMMAND_SESSION_ACTION", sessionAction);
    if (top) {
        intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
    }
    return intent;
}
let myIntent = getTermuxIntent("echo 'termux 运行成功' > " + files.cwd() + "/termuxRunResult.autox", true, 0, true);
// 发送 intent 执行 Termux 命令
sendTermuxIntent(myIntent);
```
