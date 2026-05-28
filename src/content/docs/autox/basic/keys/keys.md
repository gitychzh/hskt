---
title: keys
---


# Keys

按键模拟部分提供了一些模拟物理按键的全局函数，包括Home、音量键、照相键等，有的函数依赖于无障碍服务，有的函数依赖于root权限。

一般来说，以大写字母开头的函数都依赖于root权限。执行此类函数时，如果没有root权限，则函数执行后没有效果，并会在控制台输出一个警告。

## back()
* 返回 {boolean}

模拟按下返回键。返回是否执行成功。
此函数依赖于无障碍服务。

## home()
* 返回 {boolean}

模拟按下Home键。返回是否执行成功。
此函数依赖于无障碍服务。

## powerDialog()
* 返回 {boolean}

弹出电源键菜单。返回是否执行成功。
此函数依赖于无障碍服务。

## notifications()
* 返回 {boolean}

拉出通知栏。返回是否执行成功。
此函数依赖于无障碍服务。

## quickSettings()
* 返回 {boolean}

显示快速设置(下拉通知栏到底)。返回是否执行成功。
此函数依赖于无障碍服务。

## recents()
* 返回 {boolean}

显示最近任务。返回是否执行成功。
此函数依赖于无障碍服务。

## splitScreen()
* 返回 {boolean}

分屏。返回是否执行成功。
此函数依赖于无障碍服务, 并且需要系统自身功能的支持。

## takeScreenshot()
* 返回 {boolean}
* 需要Android 9以上

模拟按键 **电源键+音量下键** 截屏
不返回截屏得到的图片对象，只返回是否截图成功，图片保存到系统相册

## lockScreen()
* 返回 {boolean}
* 需要Android 9以上

模拟按键 **电源键** 锁屏

## dismissNotificationShade()
* 返回 {boolean}
* 需要Android 12以上

关闭通知栏的操作

## keyCodeHeadsetHook()
* 返回 {boolean}
* 需要Android 12以上

发送KEYCODE_HEADSETHOOK KeyEvent的动作，用于接听/挂断通话和播放/停止媒体


## accessibilityShortcut()
* 返回 {boolean}
* 需要Android 12以上

触发辅助功能快捷方式的操作。此快捷方式有一个硬件触发器并且可以通过按住两个音量键来激活。

## accessibilityButtonChooser()
* 返回 {boolean}
* 需要Android 12以上

调出辅助功能按钮的选择器菜单的操作

## accessibilityButton()
* 返回 {boolean}
* 需要Android 12以上

触发辅助功能按钮的操作

## accessibilityAllApps()
* 返回 {boolean}
* 需要Android 12以上

显示 Launcher（启动器） 的所有应用的操作。

## Home()
模拟按下Home键。
此函数依赖于root权限。

## Back()
模拟按下返回键。
此函数依赖于root权限。

## Power()
模拟按下电源键。
此函数依赖于root权限。

## Menu()
模拟按下菜单键。
此函数依赖于root权限。

## VolumeUp()
按下音量上键。
此函数依赖于root权限。

## VolumeDown()
按键音量上键。
此函数依赖于root权限。

## Camera()
模拟按下照相键。

## Up()
模拟按下物理按键上。
此函数依赖于root权限。

## Down()
模拟按下物理按键下。
此函数依赖于root权限。

## Left()
模拟按下物理按键左。
此函数依赖于root权限。

## Right()
模拟按下物理按键右。
此函数依赖于root权限。

## OK()
模拟按下物理按键确定。
此函数依赖于root权限。

## Text(text)
* `text` {string} 要输入的文字，只能为英文或英文符号
输入文字text。例如`Text("aaa");`

## KeyCode(code)
* `code` {number} | <String> 要按下的按键的数字代码或名称。参见下表。
模拟物理按键。例如`KeyCode(29)`和`KeyCode("KEYCODE_A")`是按下A键。
