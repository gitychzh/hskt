---
title: git教程
date: 2025-11-13 23:43:46
tags:
---
## 查看日志
git log --oneline --pretty=format:"%h - %ad : %s" --date=format:"%Y-%m-%d %H:%M:%S"
输出格式如下：
8f86ff4 - 2025-11-12 01:41:32 : 新增搜索功能
5af639d - 2025-11-10 02:45:04 : 20251109，最后一次修改
8c00529 - 2025-11-09 23:35:48 : 来自本地跟新1
0dbf5a8 - 2025-11-09 14:21:42 : update source/_posts/第六篇博客.md.

## 回退到某个节点，比如上面的 8c00529，此命令会删除比它晚提交的所有节点，只保留一个比它早提交的节点。
git reset --hard 8c00529
## 回退到上一个节点，或者上上个节点
git reset --hard head^
git reset --hard head^^
## 本地新建分支，以上操作必须先建立分支，保留主分支master的完整性。
git branch feature/test-domain
## 切换到新分支
git checkout feature/test-domain
比如切换到master ,git checkout master