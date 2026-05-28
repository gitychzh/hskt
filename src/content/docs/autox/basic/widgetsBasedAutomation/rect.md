---
title: rect
---


# Rect

`UiObject.bounds()`, `UiObject.boundsInParent()`返回的对象。表示一个长方形(范围)。

## Rect.left

-   {number}

长方形左边界的 x 坐标、

## Rect.right

-   {number}

长方形右边界的 x 坐标、

## Rect.top

-   {number}

长方形上边界的 y 坐标、

## Rect.bottom

-   {number}

长方形下边界的 y 坐标、

## Rect.centerX()

-   返回 {number}

长方形中点 x 坐标。

## Rect.centerY()

-   返回 {number}

长方形中点 y 坐标。

## Rect.width()

-   返回 {number}

长方形宽度。通常可以作为控件宽度。

## Rect.height()

-   返回 {number}

长方形高度。通常可以作为控件高度。

## Rect.contains(r)

-   r [Rect](#rect)

返回是否包含另一个长方形 r。包含指的是，长方形 r 在该长方形的里面(包含边界重叠的情况)。

## Rect.intersect(r)

-   r [Rect](#rect)

返回是否和另一个长方形相交。
