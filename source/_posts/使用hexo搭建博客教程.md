---
title: 使用hexo搭建博客
---
## 环境搭建

### git下载与安装 
[下载git](https://git-scm.com/download/win) ，安装就直接下一步即可，注意环境变量。
验证是否安装正确
```bash
git -v
```
显示版本号就表示成功
### node下载与安装
[下载node](http://nodejs.org/),点get node.js,选择LTS（长期维护的版本）最新版，当前是V22.21.1
验证是否安装正确
```bash
node -v
```
显示版本号就表示成功
### 安装Hexo
所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。
```bash
 npm install -g hexo-cli
```
验证是否安装正确
```bash
hexo -v
```
显示版本号就表示成功
## 使用hexo创建项目
### 初始化(创建)项目有以下两个方式，推荐第二种
#### 安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```
#### 推荐在资源管理器中创建一个文件夹，文件夹名就是项目名，注意此文件夹必须为空，运行如下命令
```bash
hexo init .
```
注意，结尾必须有一个" . ",英文的点,表示在当前目录下创建项目。
初始化后，您的项目文件夹将如下所示：
### 安装依赖，就是项目根目录下的package.json里的dependencies里的内容
```bash
npm install
```
### 写文章（博客），可以在source/_posts目录下手动创建".md"的文件，也可以通过命令创建
```bash
hexo new page --path about/me "About me"
```
以上命令会创建一个 source/about/me.md 文件，同时 Front Matter 中的 title 为 "About me"
```bash
hexo new index
```
这个命令会在source/_posts目录下创建一个index.md的文件。
### 安装主题(以 butterfly 为例)
```bash
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
#### 以上命令会把仓库butterfly克隆到thems目录下的butterfly子目录中 ，然后
#### 修改 Hexo 根目錄下的 _config.yml，把主題改為 butterfly
theme: butterfly
#### 安装这个主题所需要的依赖
```bash
npm install hexo-renderer-pug hexo-renderer-stylus
```
#### 升级建议
在 hexo 的根目錄創建一個文件 _config.butterfly.yml，並把主題目錄的 _config.yml 內容複製到 _config.butterfly.yml 去。注意，这个_config.butterfly.yml优先级比根目录下的_config.yml高，所以不用担心冲突。
### 项目本地编译与预览
```bash
hexo clean && hexo g && hexo s
```
以上命令，会清除缓存，并编译静态资源到public文件夹下，并生成一个http://localhost:4000的网页供本地预览
### 创建远程仓库并push上传到远端仓库
#### github 注册 登录 ，创建仓库，点New repository ,输入仓库名，其他留空，以为hskt为例
然后在本地执行如下命令(项目里执行)
```bash
git init 
git add .
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:gitychzh/hskt.git
git push -u origin master
```