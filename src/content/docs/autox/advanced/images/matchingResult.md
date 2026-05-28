---
title: matchingResult
---


# MatchingResult

**[v4.1.0 新增]**

## matches

-   {Array} 匹配结果的数组。

数组的元素是一个 Match 对象：

-   `point` {Point} 匹配位置
-   `similarity` {number} 相似度

例如:

```js
var result = images.matchTemplate(img, template, {
    max: 100,
});
result.matches.forEach((match) => {
    log("point = " + match.point + ", similarity = " + match.similarity);
});
```

## points

-   {Array} 匹配位置的数组。

## first()

-   返回 {Match}

第一个匹配结果。如果没有任何匹配，则返回`null`。

## last()

-   返回 {Match}

最后一个匹配结果。如果没有任何匹配，则返回`null`。

## leftmost()

-   返回 {Match}

位于大图片最左边的匹配结果。如果没有任何匹配，则返回`null`。

## topmost()

-   返回 {Match}

位于大图片最上边的匹配结果。如果没有任何匹配，则返回`null`。

## rightmost()

-   返回 {Match}

位于大图片最右边的匹配结果。如果没有任何匹配，则返回`null`。

## bottommost()

-   返回 {Match}

位于大图片最下边的匹配结果。如果没有任何匹配，则返回`null`。

## best()

-   返回 {Match}

相似度最高的匹配结果。如果没有任何匹配，则返回`null`。

## worst()

-   返回 {Match}

相似度最低的匹配结果。如果没有任何匹配，则返回`null`。

## sortBy(cmp)

-   cmp {Function}|{string} 比较函数，或者是一个字符串表示排序方向。例如"left"表示将匹配结果按匹配位置从左往右排序、"top"表示将匹配结果按匹配位置从上往下排序，"left-top"表示将匹配结果按匹配位置从左往右、从上往下排序。方向包括`left`（左）, `top` （上）, `right` （右）, `bottom`（下）。
-   {MatchingResult}

对匹配结果进行排序，并返回排序后的结果。

```js
var result = images.matchTemplate(img, template, {
    max: 100,
});
log(result.sortBy("top-right"));
```
