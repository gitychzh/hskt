---
title: thread
---


# Thread

线程对象，`threads.start()`返回的对象，用于获取和控制线程的状态，与其他线程交互等。

Thread 对象提供了和 timers 模块一样的 API，例如`setTimeout()`, `setInterval()`等，用于在该线程执行相应的定时回调，从而使线程之间可以直接交互。例如：

```js
var thread = threads.start(function () {
    //在子线程执行的定时器
    setInterval(function () {
        log("子线程:" + threads.currentThread());
    }, 1000);
});

log("当前线程为主线程:" + threads.currentThread());

//等待子线程启动
thread.waitFor();
//在子线程执行的定时器
thread.setTimeout(function () {
    //这段代码会在子线程执行
    log("当前线程为子线程:" + threads.currentThread());
}, 2000);

sleep(30 * 1000);
thread.interrupt();
```

## Thread.interrupt()

中断线程运行。

## Thread.join([timeout])

-   `timeout` {number} 等待时间，单位毫秒

等待线程执行完成。如果 timeout 为 0，则会一直等待直至该线程执行完成；否则最多等待 timeout 毫秒的时间。

例如:

```js
var sum = 0;
//启动子线程计算1加到10000
var thread = threads.start(function () {
    for (var i = 0; i < 10000; i++) {
        sum += i;
    }
});
//等待该线程完成
thread.join();
toast("sum = " + sum);
```

## Thread.isAlive()

-   返回 {boolean}

返回线程是否存活。如果线程仍未开始或已经结束，返回`false`; 如果线程已经开始或者正在运行中，返回`true`。

## Thread.waitFor()

等待线程开始执行。调用`threads.start()`以后线程仍然需要一定时间才能开始执行，因此调用此函数会等待线程开始执行；如果线程已经处于执行状态则立即返回。

```js
var thread = threads.start(function () {
    //do something
});
thread.waitFor();
thread.setTimeout(function () {
    //do something
}, 1000);
```

## Thread.setTimeout(callback, delay\[, ...args\])

参见[timers.setTimeout](timers.md#settimeoutcallback-delay-args)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。

```js
log("当前线程(主线程):" + threads.currentThread());

var thread = threads.start(function () {
    //设置一个空的定时来保持线程的运行状态
    setInterval(function () {}, 1000);
});

sleep(1000);
thread.setTimeout(function () {
    log("当前线程(子线程):" + threads.currentThread());
    exit();
}, 1000);
```

## Thread.setInterval(callback, delay\[, ...args\])

参见[timers.setInterval()](timers.md#setintervalcallback-delay-args)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。

## Thread.setImmediate(callback[, ...args])

参见[timers.setImmediate](timers.md#setimmediatecallback-args)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。

## Thread.clearInterval(id)

参见[timers.clearInterval()](timers.md#clearintervalid)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。

## Thread.clearTimeout(id)

参见[timers.clearTimeout()](timers.md#cleartimeoutid)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。

## Thread.clearImmediate(id)

参见[timers.clearImmediate()](timers.md#clearimmediateid)。

区别在于, 该定时器会在该线程执行。如果当前线程仍未开始执行或已经执行结束，则抛出`IllegalStateException`。
