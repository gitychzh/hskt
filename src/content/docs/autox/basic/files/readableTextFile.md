---
title: readableTextFile
---


# ReadableTextFile

可读文件对象。

## ReadableTextFile.read()

返回该文件剩余的所有内容的字符串。

## ReadableTextFile.read(maxCount)

-   `maxCount` {Number} 最大读取的字符数量

读取该文件接下来最长为 maxCount 的字符串并返回。即使文件剩余内容不足 maxCount 也不会出错。

## ReadableTextFile.readline()

读取一行并返回（不包含换行符）。

## ReadableTextFile.readlines()

读取剩余的所有行，并返回它们按顺序组成的字符串数组。
