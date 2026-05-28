---
title: amCommand
---


## am 命令

am 命令即 Activity Manager 命令，用于管理应用程序活动、服务等。

**以下命令均以"am "开头，例如`shell('am start -p com.tencent.mm');`(启动微信)**

### start [options] intent

启动 intent 指定的 Activity(应用程序活动)。  
请参阅 [intent 参数的规范](#shell_intent)。

选项包括：

-   -D：启用调试。
-   -W：等待启动完成。
-   --start-profiler file：启动分析器并将结果发送到 file。
-   -P file：类似于 --start-profiler，但当应用进入空闲状态时分析停止。
-   -R count：重复 Activity 启动 count 次数。在每次重复前，将完成顶部 Activity。
-   -S：启动 Activity 前强行停止目标应用。
-   --opengl-trace：启用 OpenGL 函数的跟踪。
-   --user user_id | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。

### startservice [options] intent

启动 intent 指定的 Service(服务)。  
请参阅 [intent 参数的规范](#shell_intent)。  
选项包括：

-   --user user_id | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。

### force-stop package

强行停止与 package（[应用包名](#应用包名)）关联的所有应用。

### kill [options] package

终止与 package（[应用包名](#应用包名)）关联的所有进程。此命令仅终止可安全终止且不会影响用户体验的进程。  
选项包括：

-   --user user_id | all | current：指定将终止其进程的用户；如果未指定，则终止所有用户的进程。

### kill-all

终止所有后台进程。

### broadcast [options] intent

发出广播 intent。
请参阅 [intent 参数的规范](#shell_intent)。

选项包括：

-   [--user user_id | all | current]：指定要发送到的用户；如果未指定，则发送到所有用户。

### instrument [options] component

使用 Instrumentation 实例启动监控。通常，目标 component 是表单 test_package/runner_class。  
选项包括：

-   -r：输出原始结果（否则对 report_key_streamresult 进行解码）。与 [-e perf true] 结合使用以生成性能测量的原始输出。
-   -e name value：将参数 name 设为 value。对于测试运行器，通用表单为 -e testrunner_flag value[,value...]。
-   -p file：将分析数据写入 file。
-   -w：先等待仪器完成，然后再返回。测试运行器需要使用此选项。
-   --no-window-animation：运行时关闭窗口动画。
-   --user user_id | current：指定仪器在哪个用户中运行；如果未指定，则在当前用户中运行。
-   profile start process file 启动 process 的分析器，将结果写入 file。
-   profile stop process 停止 process 的分析器。

### dumpheap [options] process file

转储 process 的堆，写入 file。

选项包括：

-   --user [user_id|current]：提供进程名称时，指定要转储的进程用户；如果未指定，则使用当前用户。
-   -n：转储原生堆，而非托管堆。
-   set-debug-app [options] package 将应用 package 设为调试。

选项包括：

-   -w：应用启动时等待调试程序。
-   --persistent：保留此值。
-   clear-debug-app 使用 set-debug-app 清除以前针对调试用途设置的软件包。

### monitor [options] 启动对崩溃或 ANR 的监控。

选项包括：

-   --gdb：在崩溃/ANR 时在给定端口上启动 gdbserv。

### screen-compat {on|off} package

控制 package 的屏幕兼容性模式。

### display-size [reset|widthxheight]

替换模拟器/设备显示尺寸。此命令对于在不同尺寸的屏幕上测试您的应用非常有用，它支持使用大屏设备模仿小屏幕分辨率（反之亦然）。  
示例：

```js
shell("am display-size 1280x800", true);
```

### display-density dpi

替换模拟器/设备显示密度。此命令对于在不同密度的屏幕上测试您的应用非常有用，它支持使用低密度屏幕在高密度环境环境上进行测试（反之亦然）。  
示例：

```js
shell("am display-density 480", true);
```

### to-uri intent

将给定的 intent 规范以 URI 的形式输出。
请参阅 [intent 参数的规范](#shell_intent)。

### to-intent-uri intent

将给定的 intent 规范以 intent:URI 的形式输出。
请参阅 intent 参数的规范。

### intent 参数的规范

对于采用 intent 参数的 am 命令，您可以使用以下选项指定 intent：

-   -a action  
    指定 intent 操作，如“android.intent.action.VIEW”。此指定只能声明一次。
-   -d data_uri  
    指定 intent 数据 URI，如“content://contacts/people/1”。此指定只能声明一次。
-   -t mime_type  
    指定 intent MIME 类型，如“image/png”。此指定只能声明一次。
-   -c category  
    指定 intent 类别，如“android.intent.category.APP_CONTACTS”。
-   -n component  
    指定带有软件包名称前缀的组件名称以创建显式 intent，如“com.example.app/.ExampleActivity”。
-   -f flags  
    将标志添加到 setFlags() 支持的 intent。
-   --esn extra_key  
    添加一个 null extra。URI intent 不支持此选项。
-   -e|--es extra_key extra_string_value  
    添加字符串数据作为键值对。
-   --ez extra_key extra_boolean_value  
    添加布尔型数据作为键值对。
-   --ei extra_key extra_int_value  
    添加整数型数据作为键值对。
-   --el extra_key extra_long_value  
    添加长整型数据作为键值对。
-   --ef extra_key extra_float_value  
    添加浮点型数据作为键值对。
-   --eu extra_key extra_uri_value  
    添加 URI 数据作为键值对。
-   --ecn extra_key extra_component_name_value  
    添加组件名称，将其作为 ComponentName 对象进行转换和传递。
-   --eia extra_key extra_int_value[,extra_int_value...]  
    添加整数数组。
-   --ela extra_key extra_long_value[,extra_long_value...]  
    添加长整型数组。
-   --efa extra_key extra_float_value[,extra_float_value...]  
    添加浮点型数组。
-   --grant-read-uri-permission  
    包含标志 FLAG_GRANT_READ_URI_PERMISSION。
-   --grant-write-uri-permission  
    包含标志 FLAG_GRANT_WRITE_URI_PERMISSION。
-   --debug-log-resolution  
    包含标志 FLAG_DEBUG_LOG_RESOLUTION。
-   --exclude-stopped-packages  
    包含标志 FLAG_EXCLUDE_STOPPED_PACKAGES。
-   --include-stopped-packages  
    包含标志 FLAG_INCLUDE_STOPPED_PACKAGES。
-   --activity-brought-to-front  
    包含标志 FLAG_ACTIVITY_BROUGHT_TO_FRONT。
-   --activity-clear-top  
    包含标志 FLAG_ACTIVITY_CLEAR_TOP。
-   --activity-clear-when-task-reset  
    包含标志 FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET。
-   --activity-exclude-from-recents  
    包含标志 FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS。
-   --activity-launched-from-history  
    包含标志 FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY。
-   --activity-multiple-task  
    包含标志 FLAG_ACTIVITY_MULTIPLE_TASK。
-   --activity-no-animation  
    包含标志 FLAG_ACTIVITY_NO_ANIMATION。
-   --activity-no-history  
    包含标志 FLAG_ACTIVITY_NO_HISTORY。
-   --activity-no-user-action  
    包含标志 FLAG_ACTIVITY_NO_USER_ACTION。
-   --activity-previous-is-top  
    包含标志 FLAG_ACTIVITY_PREVIOUS_IS_TOP。
-   --activity-reorder-to-front  
    包含标志 FLAG_ACTIVITY_REORDER_TO_FRONT。
-   --activity-reset-task-if-needed  
    包含标志 FLAG_ACTIVITY_RESET_TASK_IF_NEEDED。
-   --activity-single-top  
    包含标志 FLAG_ACTIVITY_SINGLE_TOP。
-   --activity-clear-task  
    包含标志 FLAG_ACTIVITY_CLEAR_TASK。
-   --activity-task-on-home  
    包含标志 FLAG_ACTIVITY_TASK_ON_HOME。
-   --receiver-registered-only  
    包含标志 FLAG_RECEIVER_REGISTERED_ONLY。
-   --receiver-replace-pending  
    包含标志 FLAG_RECEIVER_REPLACE_PENDING。
-   --selector  
    需要使用 -d 和 -t 选项以设置 intent 数据和类型。

#### URI component package

如果不受上述某一选项的限制，您可以直接指定 URI、软件包名称和组件名称。当参数不受限制时，如果参数包含一个“:”（冒号），则此工具假定参数是一个 URI；如果参数包含一个“/”（正斜杠），则此工具假定参数是一个组件名称；否则，此工具假定参数是一个软件包名称。
