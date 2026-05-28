---
title: images
---


# 图片与颜色 - Images

## images.captureScreen([newObj])

-   `newObj` boolean 是否返回新的对象
-   `return` Image

截取当前屏幕并返回一个[新的] Image 对象

```js
let img1 = images.captureScreen(true);
let img2 = images.captureScreen(true);
// img1: com.stardust.autojs.core.image.ImageWrapper@3d0494b
// img2: com.stardust.autojs.core.image.ImageWrapper@7d74441
```
