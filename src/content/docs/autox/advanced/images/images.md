---
title: images
---


# Images

:::tip 稳定性: 稳定

:::

images 模块提供了一些手机设备中常见的图片处理函数，包括截图、读写图片、图片剪裁、旋转、二值化、找色找图等。

该模块分为两个部分，找图找色部分和图片处理部分。

需要注意的是，image 对象创建后尽量在不使用时进行回收，同时避免循环创建大量图片。因为图片是一种占用内存比较大的资源，尽管 Auto.js 通过各种方式（比如图片缓存机制、垃圾回收时回收图片、脚本结束时回收所有图片）尽量降低图片资源的泄漏和内存占用，但是糟糕的代码仍然可以占用大量内存。

Image 对象通过调用`recycle()`函数来回收。例如：

```js
// 读取图片
var img = images.read("./1.png");
//对图片进行操作
...
// 回收图片
img.recycle();
```

例外的是，`caputerScreen()`返回的图片不需要回收。

## 图片处理

## images.read(path)

-   `path` {string} 图片路径

读取在路径 path 的图片文件并返回一个 Image 对象。如果文件不存在或者文件无法解码则返回 null。

## images.load(url)

-   `url` {string} 图片 URL 地址

加载在地址 URL 的网络图片并返回一个 Image 对象。如果地址不存在或者图片无法解码则返回 null。

## images.copy(img)

-   `img` {Image} 图片
-   返回 {Image}

复制一张图片并返回新的副本。该函数会完全复制 img 对象的数据。

## images.save(image, path[, format = "png", quality = 100])

-   `image` {Image} 图片
-   `path` {string} 路径
-   `format` {string} 图片格式，可选的值为:
    -   `png`
    -   `jpeg`/`jpg`
    -   `webp`
-   `quality` {number} 图片质量，为 0~100 的整数值

把图片 image 以 PNG 格式保存到 path 中。如果文件不存在会被创建；文件存在会被覆盖。

```js
//把图片压缩为原来的一半质量并保存
var img = images.read("/sdcard/1.png");
images.save(img, "/sdcard/1.jpg", "jpg", 50);
app.viewFile("/sdcard/1.jpg");
```

## images.fromBase64(base64)

-   `base64` {string} 图片的 Base64 数据
-   返回 {Image}

解码 Base64 数据并返回解码后的图片 Image 对象。如果 base64 无法解码则返回`null`。

## images.toBase64(img[, format = "png", quality = 100])

-   `image` {image} 图片
-   `format` {string} 图片格式，可选的值为:
    -   `png`
    -   `jpeg`/`jpg`
    -   `webp`
-   `quality` {number} 图片质量，为 0~100 的整数值
-   返回 {string}

把图片编码为 base64 数据并返回。

## images.fromBytes(bytes)

-   `bytes` {byte[]} 字节数组

解码字节数组 bytes 并返回解码后的图片 Image 对象。如果 bytes 无法解码则返回`null`。

## images.toBytes(img[, format = "png", quality = 100])

-   `image` {image} 图片
-   `format` {string} 图片格式，可选的值为:
    -   `png`
    -   `jpeg`/`jpg`
    -   `webp`
-   `quality` {number} 图片质量，为 0~100 的整数值
-   返回 {byte[]}

把图片编码为字节数组并返回。

## images.clip(img, x, y, w, h)

-   `img` {Image} 图片
-   `x` {number} 剪切区域的左上角横坐标
-   `y` {number} 剪切区域的左上角纵坐标
-   `w` {number} 剪切区域的宽度
-   `h` {number} 剪切区域的高度
-   返回 {Image}

从图片 img 的位置(x, y)处剪切大小为 w \* h 的区域，并返回该剪切区域的新图片。

```js
var src = images.read("/sdcard/1.png");
var clip = images.clip(src, 100, 100, 400, 400);
images.save(clip, "/sdcard/clip.png");
```

## images.resize(img, size[, interpolation])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `size` {Array} 两个元素的数组[w, h]，分别表示宽度和高度；如果只有一个元素，则宽度和高度相等
-   `interpolation` {string} 插值方法，可选，默认为"LINEAR"（线性插值），可选的值有：

    -   `NEAREST` 最近邻插值
    -   `LINEAR` 线性插值（默认）
    -   `AREA` 区域插值
    -   `CUBIC` 三次样条插值
    -   `LANCZOS4` Lanczos 插值
        参见[InterpolationFlags](https://docs.opencv.org/3.4.4/da/d54/group__imgproc__transform.html#ga5bb5a1fea74ea38e1a5445ca803ff121)

-   返回 {Image}

调整图片大小，并返回调整后的图片。例如把图片放缩为 200\*300：`images.resize(img, [200, 300])`。

参见[Imgproc.resize](https://docs.opencv.org/3.4.4/da/d54/group__imgproc__transform.html#ga47a974309e9102f5f08231edc7e7529d)。

## images.scale(img, fx, fy[, interpolation])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `fx` {number} 宽度放缩倍数
-   `fy` {number} 高度放缩倍数
-   `interpolation` {string} 插值方法，可选，默认为"LINEAR"（线性插值），可选的值有：

    -   `NEAREST` 最近邻插值
    -   `LINEAR` 线性插值（默认）
    -   `AREA` 区域插值
    -   `CUBIC` 三次样条插值
    -   `LANCZOS4` Lanczos 插值
        参见[InterpolationFlags](https://docs.opencv.org/3.4.4/da/d54/group__imgproc__transform.html#ga5bb5a1fea74ea38e1a5445ca803ff121)

-   返回 {Image}

放缩图片，并返回放缩后的图片。例如把图片变成原来的一半：`images.scale(img, 0.5, 0.5)`。

参见[Imgproc.resize](https://docs.opencv.org/3.4.4/da/d54/group__imgproc__transform.html#ga47a974309e9102f5f08231edc7e7529d)。

## images.rotate(img, degress[, x, y])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `degress` {number} 旋转角度。
-   `x` {number} 旋转中心 x 坐标，默认为图片中点
-   `y` {number} 旋转中心 y 坐标，默认为图片中点
-   返回 {Image}

将图片逆时针旋转 degress 度，返回旋转后的图片对象。

例如逆时针旋转 90 度为`images.rotate(img, 90)`。

## images.concat(img1, image2[, direction])

**[v4.1.0 新增]**

-   `img1` {Image} 图片 1
-   `img2` {Image} 图片 2
-   direction {string} 连接方向，默认为"RIGHT"，可选的值有：
    -   `LEFT` 将图片 2 接到图片 1 左边
    -   `RIGHT` 将图片 2 接到图片 1 右边
    -   `TOP` 将图片 2 接到图片 1 上边
    -   `BOTTOM` 将图片 2 接到图片 1 下边
-   返回 {Image}

连接两张图片，并返回连接后的图像。如果两张图片大小不一致，小的那张将适当居中。

## images.grayscale(img)

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   返回 {Image}

灰度化图片，并返回灰度化后的图片。

## images.threshold(img, threshold, maxVal[, type])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `threshold` {number} 阈值
-   `maxVal` {number} 最大值
-   `type` {string} 阈值化类型，默认为"BINARY"，参见[ThresholdTypes](https://docs.opencv.org/3.4.4/d7/d1b/group__imgproc__misc.html#gaa9e58d2860d4afa658ef70a9b1115576), 可选的值:
    -   `BINARY`
    -   `BINARY_INV`
    -   `TRUNC`
    -   `TOZERO`
    -   `TOZERO_INV`
    -   `OTSU`
    -   `TRIANGLE`
-   返回 {Image}

将图片阈值化，并返回处理后的图像。可以用这个函数进行图片二值化。例如：`images.threshold(img, 100, 255, "BINARY")`，这个代码将图片中大于 100 的值全部变成 255，其余变成 0，从而达到二值化的效果。如果 img 是一张灰度化图片，这个代码将会得到一张黑白图片。

可以参考有关博客（比如[threshold 函数的使用](https://blog.csdn.net/u012566751/article/details/77046445)）或者 OpenCV 文档[threshold](https://docs.opencv.org/3.4.4/d7/d1b/group__imgproc__misc.html#gae8a4a146d1ca78c626a53577199e9c57)。

## images.adaptiveThreshold(img, maxValue, adaptiveMethod, thresholdType, blockSize, C)

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `maxValue` {number} 最大值
-   `adaptiveMethod` {string} 在一个邻域内计算阈值所采用的算法，可选的值有：
    -   `MEAN_C` 计算出领域的平均值再减去参数 C 的值
    -   `GAUSSIAN_C` 计算出领域的高斯均值再减去参数 C 的值
-   `thresholdType` {string} 阈值化类型，可选的值有：
    -   `BINARY`
    -   `BINARY_INV`
-   `blockSize` {number} 邻域块大小
-   `C` {number} 偏移值调整量
-   返回 {Image}

对图片进行自适应阈值化处理，并返回处理后的图像。

可以参考有关博客（比如[threshold 与 adaptiveThreshold](https://blog.csdn.net/guduruyu/article/details/68059450)）或者 OpenCV 文档[adaptiveThreshold](https://docs.opencv.org/3.4.4/d7/d1b/group__imgproc__misc.html#ga72b913f352e4a1b1b397736707afcde3)。

## images.cvtColor(img, code[, dstCn])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `code` {string} 颜色空间转换的类型，可选的值有一共有 205 个（参见[ColorConversionCodes](https://docs.opencv.org/3.4.4/d8/d01/group__imgproc__color__conversions.html#ga4e0972be5de079fed4e3a10e24ef5ef0)），这里只列出几个：
    -   `BGR2GRAY` BGR 转换为灰度
    -   `BGR2HSV ` BGR 转换为 HSV
    -   ``
-   `dstCn` {number} 目标图像的颜色通道数量，如果不填写则根据其他参数自动决定。
-   返回 {Image}

对图像进行颜色空间转换，并返回转换后的图像。

可以参考有关博客（比如[颜色空间转换](https://blog.csdn.net/u011574296/article/details/70896811?locationNum=14&fps=1)）或者 OpenCV 文档[cvtColor](https://docs.opencv.org/3.4.4/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab)。

## images.inRange(img, lowerBound, upperBound)

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `lowerBound` {string} | {number} 颜色下界
-   `upperBound` {string} | {number} 颜色下界
-   返回 {Image}

将图片二值化，在 lowerBound~upperBound 范围以外的颜色都变成 0，在范围以内的颜色都变成 255。

例如`images.inRange(img, "#000000", "#222222")`。

## images.interval(img, color, interval)

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `color` {string} | {number} 颜色值
-   `interval` {number} 每个通道的范围间隔
-   返回 {Image}

将图片二值化，在 color-interval ~ color+interval 范围以外的颜色都变成 0，在范围以内的颜色都变成 255。这里对 color 的加减是对每个通道而言的。

例如`images.interval(img, "#888888", 16)`，每个通道的颜色值均为 0x88，加减 16 后的范围是[0x78, 0x98]，因此这个代码将把#787878~#989898 的颜色变成#FFFFFF，而把这个范围以外的变成#000000。

## images.blur(img, size[, anchor, type])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `size` {Array} 定义滤波器的大小，如[3, 3]
-   `anchor` {Array} 指定锚点位置(被平滑点)，默认为图像中心
-   `type` {string} 推断边缘像素类型，默认为"DEFAULT"，可选的值有：
    -   `CONSTANT` iiiiii|abcdefgh|iiiiiii with some specified i
    -   `REPLICATE` aaaaaa|abcdefgh|hhhhhhh
    -   `REFLECT` fedcba|abcdefgh|hgfedcb
    -   `WRAP` cdefgh|abcdefgh|abcdefg
    -   `REFLECT_101` gfedcb|abcdefgh|gfedcba
    -   `TRANSPARENT` uvwxyz|abcdefgh|ijklmno
    -   `REFLECT101` same as BORDER_REFLECT_101
    -   `DEFAULT` same as BORDER_REFLECT_101
    -   `ISOLATED` do not look outside of ROI
-   返回 {Image}

对图像进行模糊（平滑处理），返回处理后的图像。

可以参考有关博客（比如[实现图像平滑处理](https://www.cnblogs.com/denny402/p/3848316.html)）或者 OpenCV 文档[blur](https://docs.opencv.org/3.4.4/d4/d86/group__imgproc__filter.html#ga8c45db9afe636703801b0b2e440fce37)。

## images.medianBlur(img, size)

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `size` {Array} 定义滤波器的大小，如[3, 3]
-   返回 {Image}

对图像进行中值滤波，返回处理后的图像。

可以参考有关博客（比如[实现图像平滑处理](https://www.cnblogs.com/denny402/p/3848316.html)）或者 OpenCV 文档[blur](https://docs.opencv.org/3.4.4/d4/d86/group__imgproc__filter.html#ga564869aa33e58769b4469101aac458f9)。

## images.gaussianBlur(img, size[, sigmaX, sigmaY, type])

**[v4.1.0 新增]**

-   `img` {Image} 图片
-   `size` {Array} 定义滤波器的大小，如[3, 3]
-   `sigmaX` {number} x 方向的标准方差，不填写则自动计算
-   `sigmaY` {number} y 方向的标准方差，不填写则自动计算
-   `type` {string} 推断边缘像素类型，默认为"DEFAULT"，参见`images.blur`
-   返回 {Image}

对图像进行高斯模糊，返回处理后的图像。

可以参考有关博客（比如[实现图像平滑处理](https://www.cnblogs.com/denny402/p/3848316.html)）或者 OpenCV 文档[GaussianBlur](https://docs.opencv.org/3.4.4/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193fb0b11ac52cf1)。

## images.matToImage(mat)

**[v4.1.0 新增]**

-   `mat` {Mat} OpenCV 的 Mat 对象
-   返回 {Image}

把 Mat 对象转换为 Image 对象。
