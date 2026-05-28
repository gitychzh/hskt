---
title: rsPress相关
  - 计算机
  - hexo教程
  - rsPress
---

## 一、官网创建项目
新建文件夹JSJ 然后通过官网[rsPress api](https://rspress.rs/zh/guide/start/getting-started)
npm create rspress@latest ,按提示一步一步即可，记得输入 . 点就是表示在当前目录下创建，跟hexo差不多也会从远端克隆代码到本地，随后执行npm install,后续是 npm run dev 预览网页。，
注意重点：本项目是在workflow里把项目编译成静态文件丢给hexo，让hexo统一部署，此站只是红客课堂的子站-计算机。后续还会有物理、数学、英语等子站。
配置文件为根目录下rspress.config.ts
