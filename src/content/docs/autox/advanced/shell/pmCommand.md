---
title: pmCommand
---


## 应用包名

所谓应用包名，是唯一确定应用的标识。例如微信的包名是"com.tencent.mm", QQ 的包名是"com.tencent.mobileqq"。  
要获取一个应用的包名，可以通过函数`getPackageName(appName)`获取。参见帮助->其他一般函数。

## pm 命令

pm 命令用于管理应用程序，例如卸载应用、冻结应用等。  
**以下命令均以"pm "开头，例如"shell(\"pm disable com.tencent.mm\");"(冻结微信)**

### list packages [options] filter

输出所有软件包，或者，仅输出包名称包含 filter 中的文本的软件包。  
选项：

-   -f：查看它们的关联文件。
-   -d：进行过滤以仅显示已停用的软件包。
-   -e：进行过滤以仅显示已启用的软件包。
-   -s：进行过滤以仅显示系统软件包。
-   -3：进行过滤以仅显示第三方软件包。
-   -i：查看软件包的安装程序。
-   -u：也包括卸载的软件包。
-   --user user_id：要查询的用户空间。

### list permission-groups

输出所有已知的权限组。

### list permissions [options] group

输出所有已知权限，或者，仅输出 group 中的权限。  
选项：

-   -g：按组加以组织。
-   -f：输出所有信息。
-   -s：简短摘要。
-   -d：仅列出危险权限。
-   -u：仅列出用户将看到的权限。

### list instrumentation [options]

列出所有测试软件包。  
选项：

-   -f：列出用于测试软件包的 APK 文件。
-   target_package：列出仅用于此应用的测试软件包。

### list features

输出系统的所有功能。

### list libraries

输出当前设备支持的所有库。

### list users

输出系统上的所有用户。

### path package

输出给定 package 的 APK 的路径。

### install [options] path

将软件包（通过 path 指定）安装到系统。  
选项：

-   -l：安装具有转发锁定功能的软件包。
-   -r：重新安装现有应用，保留其数据。
-   -t：允许安装测试 APK。
-   -i installer_package_name：指定安装程序软件包名称。
-   -s：在共享的大容量存储（如 sdcard）上安装软件包。
-   -f：在内部系统内存上安装软件包。
-   -d：允许版本代码降级。
-   -g：授予应用清单文件中列出的所有权限。

### uninstall [options] package

从系统中卸载软件包。  
选项：

-   -k：移除软件包后保留数据和缓存目录。

### clear package

删除与软件包关联的所有数据。

### enable package_or_component

启用给定软件包或组件（作为“package/class”写入）。

### disable package_or_component

停用给定软件包或组件（作为“package/class”写入）。

### disable-user [options] package_or_component

选项：

-   --user user_id：要停用的用户。

### grant package_name permission

向应用授予权限。在运行 Android 6.0（API 级别 23）及更高版本的设备上，可以是应用清单中声明的任何权限。在运行 Android 5.1（API 级别 22）和更低版本的设备上，必须是应用定义的可选权限。

### revoke package_name permission

从应用中撤销权限。在运行 Android 6.0（API 级别 23）及更高版本的设备上，可以是应用清单中声明的任何权限。在运行 Android 5.1（API 级别 22）和更低版本的设备上，必须是应用定义的可选权限。

### set-install-location location

更改默认安装位置。位置值：

-   0：自动—让系统决定最佳位置。
-   1：内部—安装在内部设备存储上。
-   2：外部—安装在外部介质上。

> 注：此命令仅用于调试目的；使用此命令会导致应用中断和其他意外行为。

### get-install-location

返回当前安装位置。返回值：

-   0 [auto]：让系统决定最佳位置。
-   1 [internal]：安装在内部设备存储上
-   2 [external]：安装在外部介质上

### set-permission-enforced permission [true|false]

指定是否应强制执行给定的权限。

### trim-caches desired_free_space

减少缓存文件以达到给定的可用空间。

### create-user user_name

使用给定的 user_name 创建新用户，输出新用户的标识符。

### remove-user user_id

移除具有给定的 user_id 的用户，删除与该用户关联的所有数据。

### get-max-users

输出设备支持的最大用户数。
