---
title: git教程
  - 计算机
  - git教程
  - 基础教程
  - git相关
---

## 一、Git 基本配置（第一次使用必做）
### 配置用户名与邮箱
```bash
git config --global user.name "Your Name" [gitychzh]
git config --global user.email "you@example.com"
```
### 查看用户名 （邮箱也相同）
```bash
git config user.name
```
## 二、创建仓库

### 1. 初始化本地仓库

```bash
git init
```
设置未来所有新项目的默认分支名称为 main,也就是git init的时候创建的项目默认分支
```bash
git config --global init.defaultBranch main
```
### 2. 克隆远程仓库

```bash
git clone https://github.com/user/repo.git
```
或者针对配置好了SSH密钥的并且port22端口可以正常访问的网络可以采用如下的方式(常用)
```bash
git clone git@github.com:user/repo.git
```
### 3.实际创建项目中
先 git init 之后，把.git文件夹移走，等当选项目初始化之后再把.git文件夹粘贴回来。

## 三、日志(历史)操作、节点回退、分支操作
git log --oneline --pretty=format:"%h - %ad : %s" --date=format:"%Y-%m-%d %H:%M:%S"
输出格式如下：
8f86ff4 - 2025-11-12 01:41:32 : 新增搜索功能
5af639d - 2025-11-10 02:45:04 : 20251109，最后一次修改
8c00529 - 2025-11-09 23:35:48 : 来自本地跟新1
0dbf5a8 - 2025-11-09 14:21:42 : update source/_posts/第六篇博客.md.
获取全部日志（包括删除掉比如用git reset --hard 删除掉的,这个常用，配合git reset几乎满足90%的需求）
```bash
git reflog --oneline
```
### 1.上面的命令太长了，可以使用git的alias(别名)功能
```bash
git config --global alias.fornyr 'log --oneline --pretty=format:"%h - %ad : %s" --date=format:"%Y-%m-%d %H:%M:%S"'
```
以后想用上面那么长的命令只需要输入 git fornyr 即可。

### 2.回退到某个节点，比如上面的 8c00529，此命令会删除比它晚提交的所有节点，只保留一个比它早提交的节点。
git reset --hard 8c00529（具体的哈希值）
另一种方式大写的HEAD~[NUM]
git reset --hard HEAD~1 （向上一个节点，2，3，4.。。。以此类推）
### 3. 本地新建分支，以上操作必须先建立分支，保留主分支master的完整性。origin(起源)
 3.1创建分支 feature/test-domain
 git branch feature/test-domain
 3.2切换到新分支
git checkout feature/test-domain
 3.3 创建并切换到该分支(常用)
 git switch -c feature/test-domain
## 四、关于 tag
注:所有标签都是基于已经存在的节点，意思就是在commit之后才能打标签。
### 4.1 创建tag
git tag -a 标签名比如v1.0.0 [哈希值，如果省略就是从当前位置] -m "正式修复版"

### 4.2 删除标签
git tag -d v1.0.0

### 4.3 推送所有本地标签
git push origin --tags 
### 4.4 操作标签
可以使用git reset --hard v1.0.0
也可以使用git checkout v1.0.0,
进行这个操作之前最好新建一个临时分支。
## 五、其他
### 5.1 checkout与 switch
新版本推荐使用switch，但是git switch --detach <哈希值或Tag> ,这个时候建议用git checkout <哈希值或Tag>
切换分支等其他操作明确使用switch 分支名
### 5.2 cherry-pick
git 练习  level git cherry-pick
git cherry-pick c3 c4 c7 ，类似嫁接，把别的分支上的节点嫁接到本分支上，原来分支的数据节点不改变。
### 5.3 git rebase -i HEAD~[NUM]
git rebase除了能合并分支，还能撤销和修改提交顺序，详见练习 level move2
代码如下 git rebase -i HEAD~4 (点击C2删除，拖动C4,C5 改变顺序即可完成)
