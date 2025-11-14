---
title: 域名绑定cloudflarePages教程
date: 2025-11-10 00:30:17
tags:
---
## 域名绑定博客网站网址cloudflarePages教程
此教程是在[spaceship](spaceship.com)上购买的域名绑定到[cloudflare](cloudflare.com),以我自己的域名[223722.xyz](223722.xyz)为例。
在此之前，先创建 cloudflare pages，与github pages类似。
### 1在spaceship.com购买域名与DNS设置
打开[spaceship](spaceship.com)，选择好域名，付款，登录， —— 点右上角 Launchpad(启动面板) —— Domain Manager(域名管理器) —— 出现你的域名比如我的是 223722.xyz 点开 —— 右侧出现面板 ——点Nameservers & DNS —— Nameservers 那一栏，点Change —— 选Custom nameservers ——把默认的两个DNS改成如下两个
 charles.ns.cloudflare.com ，kim.ns.cloudflare.com 这两个是cloudflare提供的DNS 非常关键的步骤，—— 点Save  nameserver settings（右下角），可以推出spaceship网页了，后续用不到。
 ### 2在cloudflare创建 pages
 注册，登录，进入到账户主页,边框功能菜单栏在左侧，点计算和AI  —— 选 Workers 和 Pages —— 点右上角的 创建应用 —— 开始使用页面（默认是Workers） 选Pages —— 选导入Git存储库 ——绑定GitHub账户，按提示即可完成，非常简单，此步骤只需做一次，后续不需要 —— 此页面会显示你在github的所有仓库，选择一个存储库即可，然后点右下角的 开始设置 ,后续有分支的选择，我这里选的是gh-pages 这个分支，当然也不需要构建命令，输出目录，框架预设等，留空即可。——最后点右下角 保存并部署，几分钟即可部署完，成功后，提示，您可以在项目名(比如我的 hskt.pages.dev)预览项目。
 ### 3在cloudflare pages中添加自定义域名
 回到cloudflare账户主页，点右上角 添加——连接域 ——输入现有域 223722.xyz —— 点 继续
 在上述步骤中找到workers和pages页面，可以看到我们的 pages项目，点开 —— 默认是部署需点 自定义域  —— 设置自定义域  ——  添加自定义域 比如我的 223722.XYZ即可其他选项默认 —— 点 继续 —— 点 选择计划Free us0（白嫖） —— 最后一步，点右上角的DNS记录，—— 点 添加记录，两条分别是，类型全部选CNAME，名称一个是@ ，IPV4地址，填项目的地址，比如workflows5.pages.dev ；另一条记录，名称输入wwww，ipv4输入223722.xyz ；这样的好处是无论你输入223722.xyz还是www.223722.xyz都跳转到223722.xyz,以上设置完毕。
 ### 4具体项目中添加域名
 回到workers和pages页面，点开你的项目，默认是部署选项，点自定义域 ——点 设置自定义域 ——域：输入223722.xyz，点继续 ——确认新DNS记录页面，点激活域，会自动进行初始化，显示正在验证待完成后显示绿色的活动两个字即可通过域名访问你的项目。