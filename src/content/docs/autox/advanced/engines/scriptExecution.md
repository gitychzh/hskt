---
title: scriptExecution
---


# ScriptExecution

执行脚本时返回的对象，可以通过他获取执行的引擎、配置等，也可以停止这个执行。

要停止这个脚本的执行，使用`exectuion.getEngine().forceStop()`.

## ScriptExecution.getEngine()

返回执行该脚本的脚本引擎对象([ScriptEngine](#ScriptEngine))

## ScriptExecution.getConfig()

返回该脚本的运行配置([ScriptConfig](#ScriptConfig))
