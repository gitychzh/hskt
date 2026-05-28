---
title: image
---


# Image

表示一张图片，可以是截图的图片，或者本地读取的图片，或者从网络获取的图片。

## Image.getWidth()

返回以像素为单位图片宽度。

## Image.getHeight()

返回以像素为单位的图片高度。

## Image.saveTo(path)

-   `path` {string} 路径

把图片保存到路径 path。（如果文件存在则覆盖）

## Image.pixel(x, y)

-   `x` {number} 横坐标
-   `y` {number} 纵坐标

返回图片 image 在点(x, y)处的像素的 ARGB 值。

该值的格式为 0xAARRGGBB，是一个"32 位整数"(虽然 JavaScript 中并不区分整数类型和其他数值类型)。

坐标系以图片左上角为原点。以图片左侧边为 y 轴，上侧边为 x 轴。
