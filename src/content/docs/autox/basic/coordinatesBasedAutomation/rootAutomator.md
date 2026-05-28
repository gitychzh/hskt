---
title: rootAutomator
---


# RootAutomator

:::tip 稳定性: 稳定

:::

RootAutomator 是一个使用 root 权限来模拟触摸的对象，用它可以完成触摸与多点触摸，并且这些动作的执行没有延迟。

一个脚本中最好只存在一个 RootAutomator，并且保证脚本结束退出他。可以在 exit 事件中退出 RootAutomator，例如：

```js
var ra = new RootAutomator();
events.on('exit', function(){
  ra.exit();
});
//执行一些点击操作
...

```

**注意以下命令需要 root 权限**

## RootAutomator.tap(x, y[, id])

-   `x` {number} 横坐标
-   `y` {number} 纵坐标
-   `id` {number} 多点触摸 id，可选，默认为 1，可以通过 setDefaultId 指定。

点击位置(x, y)。其中 id 是一个整数值，用于区分多点触摸，不同的 id 表示不同的"手指"，例如：

```js
var ra = new RootAutomator();
//让"手指1"点击位置(100, 100)
ra.tap(100, 100, 1);
//让"手指2"点击位置(200, 200);
ra.tap(200, 200, 2);
ra.exit();
```

如果不需要多点触摸，则不需要 id 这个参数。
多点触摸通常用于手势或游戏操作，例如模拟双指捏合、双指上滑等。

某些情况下可能存在 tap 点击无反应的情况，这时可以用`RootAutomator.press()`函数代替。

## RootAutomator.swipe(x1, x2, y1, y2[, duration, id])

-   `x1` {number} 滑动起点横坐标
-   `y1` {number} 滑动起点纵坐标
-   `x2` {number} 滑动终点横坐标
-   `y2` {number} 滑动终点纵坐标
-   `duration` {number} 滑动时长，单位毫秒，默认值为 300
-   `id` {number} 多点触摸 id，可选，默认为 1

模拟一次从(x1, y1)到(x2, y2)的时间为 duration 毫秒的滑动。

## RootAutomator.press(x, y, duration[, id])

-   `x` {number} 横坐标
-   `y` {number} 纵坐标
-   `duration` {number} 按下时长
-   `id` {number} 多点触摸 id，可选，默认为 1

模拟按下位置(x, y)，时长为 duration 毫秒。

## RootAutomator.longPress(x, y[\, id\])

-   `x` {number} 横坐标
-   `y` {number} 纵坐标
-   `duration` {number} 按下时长
-   `id` {number} 多点触摸 id，可选，默认为 1

模拟长按位置(x, y)。

以上为简单模拟触摸操作的函数。如果要模拟一些复杂的手势，需要更底层的函数。

## RootAutomator.touchDown(x, y[, id])

-   `x` {number} 横坐标
-   `y` {number} 纵坐标
-   `id` {number} 多点触摸 id，可选，默认为 1

模拟手指按下位置(x, y)。

## RootAutomator.touchMove(x, y[, id])

-   `x` {number} 横坐标
-   `y` {number} 纵坐标
-   `id` {number} 多点触摸 id，可选，默认为 1

模拟移动手指到位置(x, y)。

## RootAutomator.touchUp([id])

-   `id` {number} 多点触摸 id，可选，默认为 1

模拟手指弹起。
