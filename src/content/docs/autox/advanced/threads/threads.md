---
title: threads
---


# Threads

:::danger 稳定性: 实验

:::

Threads 模块提供了多线程支持，可以启动新线程来运行脚本。

脚本主线程会等待所有子线程执行完成后才停止执行，因此如果子线程中有死循环，请在必要的时候调用`exit()`来直接停止脚本或`threads.shutDownAll()`来停止所有子线程。

通过`threads.start()`启动的所有线程会在脚本被强制停止时自动停止。

由于 JavaScript 自身没有多线程的支持，因此您可能会遇到意料之外的问题。

# threads

## threads.start(action)

-   `action` {Function} 要在新线程执行的函数
-   返回 [Thread](#thread)

启动一个新线程并执行 action。

例如:

```js
threads.start(function () {
    //在新线程执行的代码
    while (true) {
        log("子线程");
    }
});
while (true) {
    log("脚本主线程");
}
```

通过该函数返回的[Thread](#thread)对象可以获取该线程的状态，控制该线程的运行中。例如:

```js
var thread = threads.start(function () {
    while (true) {
        log("子线程");
    }
});
//停止线程执行
thread.interrupt();
```

更多信息参见[Thread](#thread)。

## threads.shutDownAll()

停止所有通过`threads.start()`启动的子线程。

## threads.currentThread()

-   返回 [Thread](#thread)

返回当前线程。

## threads.disposable()

-   返回 [Disposable](#disposable)

新建一个 Disposable 对象，用于等待另一个线程的某个一次性结果。更多信息参见[线程通信](#线程通信)以及[Disposable](#disposable)。

## threads.atomic([initialValue])

-   `initialValue` {number} 初始整数值，默认为 0
-   返回[AtomicLong](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/atomic/AtomicLong.html)

新建一个整数原子变量。更多信息参见[线程安全](#线程安全)以及[AtomicLong](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/atomic/AtomicLong.html)。

## threads.lock()

-   返回[ReentrantLock](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/ReentrantLock.html)

新建一个可重入锁。更多信息参见[线程安全](#线程安全)以及[ReentrantLock](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/ReentrantLock.html)。
