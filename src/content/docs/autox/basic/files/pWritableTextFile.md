---
title: pWritableTextFile
---


# PWritableTextFile

可写文件对象。

## PWritableTextFile.write(text)

-   `text` {string} 文本

把文本内容 text 写入到文件中。

## PWritableTextFile.writeline(line)

-   `text` {string} 文本

把文本 line 写入到文件中并写入一个换行符。

## PWritableTextFile.writelines(lines)

-   `lines` {Array} 字符串数组

把很多行写入到文件中....

## PWritableTextFile.flush()

把缓冲区内容输出到文件中。

## PWritableTextFile.close()

关闭文件。同时会被缓冲区内容输出到文件。

**打开一个文件写入后，不再使用时务必关闭，否则文件可能会丢失**
