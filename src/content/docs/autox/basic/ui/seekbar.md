---
title: seekbar
---


# 拖动条控件: seekbar

**官方教程：**

可调节进度条，类似于 progressbar，但用户可以拖动控件来调节进度条。

参见 Android [SeekBar](https://developer.android.google.cn/reference/android/widget/SeekBar)

seekbar 继承自 progressbar，因此 progressbar 的属性它都能使用。

通过方法[setOnSeekBarChangeListener](<https://developer.android.google.cn/reference/android/widget/SeekBar#setOnSeekBarChangeListener(android.widget.SeekBar.OnSeekBarChangeListener)>)可监听 seekbar 的拖动进度，通过[getProgress](<https://developer.android.google.cn/reference/android/widget/ProgressBar#getProgress()>)方法可随时获得 seekbar 的当前进度。

例子：

```js
"ui";

$ui.layout(
    <vertical>
        <seekbar id="seekbar" max="200" />
        <button id="ok" text="确定" />
    </vertical>
);

$ui.ok.on("click", () => {
    toastLog("进度条当前进度:", $ui.seekbar.getProgress());
});
$ui.seekbar.setOnSeekBarChangeListener({
    onProgressChanged: (seekbar, progress, fromUser) => {
        consoloe.log("进度: ", progress);
    },
});
```
