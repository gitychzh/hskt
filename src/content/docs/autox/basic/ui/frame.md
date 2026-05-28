---
title: frame
---


# 帧布局: frame

帧布局是最简单的布局，它默认从容器的左上角(0,0)坐标开始布局，多个子控件层叠排序，后面的控件会覆盖前面的控件。

参见 Android [FrameLayout](https://developer.android.google.cn/reference/android/widget/FrameLayout)。

`gravity`

设置布局的默认重力位置。默认为容器的左上角。比如设置`gravity="center"`后，它的子控件会默认居中显示。gravity 的详细字段说明参见[View.gravity](#gravity)。

可以用`layout_gravity`单独控制子控件的重力，参见[View.layout_gravity](#layout_gravity)。

以下是一个创建帧布局的示例代码：

```js
"ui";

$ui.layout(
    //设置前景图像及它的位置
    <frame gravity="left|top" foreground="@drawable/ic_android_black_48dp" foregroundGravity="right|bottom">
        <img w="*" h="*" />
        //text控件设置不同大小与背景色,依次覆盖
        <text w="300dp" h="300dp" background="#2F2F4F" />
        <text w="200dp" h="200dp" background="#FF1CAE" />
        <text w="100dp" h="100dp" background="#6B4226" />
    </frame>
);
```

`foreground`:

设置改帧布局容器的前景图像，前景图像将永远处于帧布局最上面，不会被覆盖。`foreground`属性的取值可以是颜色、图片路径等，和背景`bg`属性类似，参见[bg](#bg)。

`foregroundGravity`:

设置前景图像（`foreground`）显示的位置。属性与`gravity`属性相同。
