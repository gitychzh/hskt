---
title: gitee的仓库镜像管理功能教程
date: 2025-11-09 23:41:12
tags:
---
## ggitee的仓库镜像管理功能教程 
gitee pull github ，就是gitee管理管理github的仓库，把gitee代码拉取到github上，解决github访问受限的问题，前提是先绑定github账号，只有自己的账号才可以有这个功能。
### 1、gitee创建仓库
登录自己的仓库点右上角的加号，新建仓库——右上角点击导入——点导入GitHub仓库（不要选默认的从URL导入）——待页面跳转后，选择需要管理的仓库，点导入,过几秒到几分钟不等即可查看仓库，就跟自己创建的仓库一模一样了。
### 2、github创建Personal access tokens(个人令牌，后续gitee那边需要用)
登录github账号———点右上角自己的头像———点Settings（这个是整个账号而不是某个项目的设置）——页面跳转，点左侧的边框，往下拉，最底下的Developer settings——Personal access tokens——Tokens(classic)——右上角Generate new token ——选Generate new token(classic)
跳转到New personal access token(classic)页面：
Note： 随便填，整个类似给它起个名，
Expiration :有效期，默认是30天，我建议直接选No expiration （永不过期）
repo:打勾 repo (全选)
wrokflow: 打勾
admin:repo_hook:里面两项全选
总共就选择这三个即可，其他暂时不用管，点Generate token,等待页面跳转，此时会出现非常重要的信息，就是一窜代码以ghp_后面一堆字符串 ,这个复制下来，粘贴到记事本中，因为这个页面一旦消失，这个代码也将永久消失，切记，后续gitee那边要用，把它起名github_token_code .
### 3、gitee配置仓库镜像管理功能token
进入刚才利用 导入github仓库 功能创建的仓库，点管理（是这个仓库的管理而不是整个账户的管理）——左侧点 仓库镜像管理 ——右上角点 添加镜像——选push G--猫 （默认的，如果不是默认的，记得选它） —— 私人令牌 ，就是填刚才的github_token_code —— 点 添加。
成功后，每次修改代码完 点仓库镜像管理，右侧就会有个正在更新的灰色文字，是自动的，不需要手动跟新。