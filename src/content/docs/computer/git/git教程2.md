---
title: Git 常用命令教程
---


# Git 常用命令教程（入门到日常使用）

> 适合写博客直接发布的 Git 基础教程，涵盖 **最常用命令 + 使用场景 + 示例**。
> Markdown 文件，可直接复制或保存为 `git-guide.md`

---

## 一、Git 是什么？

Git 是一个 **分布式版本控制系统**，用于：

* 追踪代码变化
* 多人协作开发
* 回滚历史版本
* 管理分支

---

## 二、Git 基本配置（第一次使用必做）

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

查看配置：

```bash
git config --list
```

---

## 三、创建仓库（Repository）

### 1. 初始化本地仓库

```bash
git init
```

### 2. 克隆远程仓库

```bash
git clone https://github.com/user/repo.git
```

---

## 四、工作区 / 暂存区 / 仓库

Git 有三个核心区域：

* **工作区（Working Directory）**：你正在编辑的文件
* **暂存区（Staging Area）**：准备提交的文件
* **仓库（Repository）**：已提交的历史记录

---

## 五、文件状态查看

```bash
git status
```

常见状态：

* `untracked`：未被 Git 管理
* `modified`：已修改
* `staged`：已加入暂存区

---

## 六、添加与提交

### 1. 添加文件到暂存区

```bash
git add file.txt        # 添加单个文件
git add .               # 添加所有改动
```

### 2. 提交到仓库

```bash
git commit -m "commit message"
```

---

## 七、查看历史记录

```bash
git log
```

简洁模式：

```bash
git log --oneline --graph --decorate
```

---

## 八、撤销与回退（非常重要）

### 1. 撤销工作区修改（未 add）

```bash
git checkout -- file.txt
```

或（新版本）：

```bash
git restore file.txt
```

### 2. 撤销暂存区（已 add）

```bash
git restore --staged file.txt
```

### 3. 回退到某次提交

```bash
git reset --hard commit_id
```

> ⚠️ `--hard` 会丢失修改，慎用

---

## 九、分支操作（核心）

### 1. 查看分支

```bash
git branch
```

### 2. 创建分支

```bash
git branch dev
```

### 3. 切换分支

```bash
git checkout dev
```

或：

```bash
git switch dev
```

### 4. 创建并切换

```bash
git checkout -b dev
```

---

## 十、合并分支

```bash
git merge dev
```

如果发生冲突：

1. 手动解决冲突
2. `git add .`
3. `git commit`

---

## 十一、远程仓库（GitHub / GitLab）

### 1. 查看远程仓库

```bash
git remote -v
```

### 2. 添加远程仓库

```bash
git remote add origin https://github.com/user/repo.git
```

### 3. 推送代码

```bash
git push origin main
```

首次推送：

```bash
git push -u origin main
```

### 4. 拉取代码

```bash
git pull
```

---

## 十二、解决“本地和远程不同步”

```bash
git fetch
git status
git pull --rebase
```

---

## 十三、常见场景速查表

| 场景     | 命令                    |
| ------ | --------------------- |
| 初始化仓库  | `git init`            |
| 查看状态   | `git status`          |
| 添加所有文件 | `git add .`           |
| 提交     | `git commit -m "msg"` |
| 查看日志   | `git log --oneline`   |
| 创建分支   | `git checkout -b dev` |
| 合并分支   | `git merge dev`       |
| 推送     | `git push`            |
| 拉取     | `git pull`            |

---

## 十四、推荐 .gitignore 示例

```gitignore
node_modules/
dist/
.cache/
.env
.DS_Store
```

---

## 十五、写在最后

Git 的核心只有一句话：

> **小步提交，频繁提交，永远写清楚 commit message**

这份文档适合：

* Git 初学者
* 日常开发速查
* 博客 / 教程发布

---

**完。**

