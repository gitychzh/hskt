---
title: next主题相关
  - 计算机
  - hexo教程
  - 主题相关
  - next
---

## 一、next主题项目创建
 1.next预览站[Visit preview site](https://theme-next.js.org/)  
 2.next官方源码站[NexT](https://github.com/next-theme/hexo-theme-next)  
 3.next官方文档站源码[doc](https://github.com/next-theme/theme-next-docs)  
 4.本项目以为next的文档站源码作为模板构建，所以无须额外单独下载next主题。
### 1.1 下载克隆next-theme-docs文档站
1.1.1先创建项目文件夹hskt（以后都以此为例说明），在目录下执行 （确保网络畅通，尤其是port22端口）
```bash
git clone git@github.com:next-theme/theme-next-docs.git .
```
然后在当面目录下安装npm依赖，就是package.json里的库，执行如下代码

```bash
npm install
```
紧接着可以  hexo clean && hexo s 预览网页了。
### 1.2修改根目录下_config.yml默认设配cloudflare page
[文件路径github](https://github.com/gitychzh/hskt/blob/main/_config.yml)
共修改四处，分别是：
1. site
title: 红薯课堂
subtitle: 'config子标题'
description: '涵盖中小学到成人教育，包括计算机编程、PLC自动化、python、js、网页设计、数学、语文、英语、物理、化学、生物等多个学科的学习资源与教程。'
keywords:
author: 红薯
language: zh-CN
# language: en
timezone: Asia/Shanghai
2. url
url: https://hskt_cf_page.pages.dev #设配CF pages ,默认CF pages @ychzh2
root: /
3. Directory
skip_render:
  - robots.txt
  - animate/*
  - highlight/*
  - "jsj/**/*" #jsj目录是不需要编译的，由rspress编译好的静态文件。
4. theme: next
### 1.3新建_config.gh.yml 设配github pages
内容如下url: https://gitychzh.github.io/hskt_gh_page #设配GH pages,想要GH pages 能正常访问，必须要有此配置
root: /hskt_gh_page/，这个配置会自动合并，后续在workflows工作流里会讲到
### 1.4修改_config.next.yml
menu:
  home: / || fa fa-bell
  categories: /categories/ || fa fa-th-list # 分类页面
  tags: /tags/ || fa fa-tags
  archives: /archives/ || fa fa-archive
  计算机: /jsj/ || fa fa-laptop-code,
  把docs目录删除，那个是原来文档站的内容，需要什么就添加什么，比如现在添加了计算机。，后续的项目按照我的_config.next.yml拷贝照抄即可。
  ### 1.5 workflows 工作流，直接复制，照抄即可。
