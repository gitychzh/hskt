---
title: git简明教程
  - 计算机
  - git教程
  - 基础教程
  - git相关
---


## 创建项目
在当前目录下创建项目，最后的点.不能省略，这个是代表在当前目录下初始化git ，会生成一个隐藏的.git文件夹（目录）
具体操作是创建项目的时候先 git init . 将.git文件夹复制移走，等npm cteate rspress@latest 创建rspress项目之后再黏贴到项目根目录下
``` bash
git init .

```
## 将文件（数据）修改过的加入到暂存区
下面的命令是将所有文件加入到暂存区，但是.gitigore文件列出的文件与文件夹不会被加入，@坑1，主仓库hskt本意是将jsj排除，但是子站jsj通过workflows的action的时候无法写入，所以不能吧jsj这个目录写入.gitignore文件里。
 ```bash
git add .

 ```
## 将暂存区数据存入本地仓库中
```bash
git commit -m "some informations"
```

## 将暂存区数据提交到远程仓库
提交到远程仓库的main分支
```bash
git push origin main
```
## 回退，恢复
### 远程仓库用 revert
```bash
git revert id..head
```
id与两个点之间没有空格等字符，紧接着按ESC + :WQ (冒号不能省略)。如果回退多个节点，重复这个操作，直到退出为止。
上面的代码意思是恢复到这个ID节点，之后提交的代码节点依然保存。
### 本地用 reset 
先创建备份分支,且切换到这个分支
```bash
git switch -c backupBranch

```
这个分支完整的保留了main分支所有的节点
接着切换回main分支
```bash
git switch main
```
然后回退到某个分支，这个reset --hard 会删除掉后面所有的节点。
```bash
git reset --hard ID
```
回到这个ID节点，后面的全部删除，ID 也可以用head~1 ,head~2，表示回退到前一个，前两个节点。
## 删除分支
```bash
git branch -d backupBranch
```
小写-d安全删除，如果没有合并，会有提示
```bash
git branch -D backupBranch
```
大写-D强制删除分支。
注:必须切换到别的分支才能删除，不能删除此时所在的分支。
## 查看本地和远程所有分支
```bash

git branch -a
```
