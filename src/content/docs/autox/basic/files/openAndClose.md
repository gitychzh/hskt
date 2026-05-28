---
title: openAndClose
---


## open(path[, mode = "r", encoding = "utf-8", bufferSize = 8192])

-   `path` {string} 文件路径，例如"/sdcard/1.txt"。
-   `mode` {string} 文件打开模式，包括:
    -   `r`: 只读文本模式。该模式下只能对文件执行**文本**读取操作。
    -   `w`: 只写文本模式。该模式下只能对文件执行**文本**覆盖写入操作。
    -   `a`: 附加文本模式。该模式下将会把写入的文本附加到文件末尾。
    -   `rw`: 随机读写文本模式。该模式下将会把写入的文本附加到文件末尾。  
        目前暂不支持二进制模式，随机读写模式。
-   `encoding` {string} 字符编码。
-   `bufferSize` {number} 文件读写的缓冲区大小。

打开一个文件。根据打开模式返回不同的文件对象。包括：

-   "r": 返回一个 ReadableTextFile 对象。
-   "w", "a": 返回一个 WritableTextFile 对象。

对于"w"模式，如果文件并不存在，则会创建一个，已存在则会清空该文件内容；其他模式文件不存在会抛出 FileNotFoundException。

## close()

关闭该文件。

**打开一个文件不再使用时务必关闭**
