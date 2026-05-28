---
title: list
---


# 列表: list

**官方教程：**

参见 Android [RecyclerView](https://developer.android.google.cn/reference/androidx/recyclerview/widget/RecyclerView)

事件:` item_click`:

当用户点击一个 List 中的项时会触发该事件。

例子：

```js
"ui";
$ui.layout(
    <frame>
        <list id="list">
            <vertical>
                <text id="name" textSize="16sp" textColor="#000000" text="姓名: {{name}}" />
                <text id="age" textSize="16sp" textColor="#000000" text="年龄: {{age}}岁" />
            </vertical>
        </list>
    </frame>
);
var items = [
    {
        name: "小明",
        age: 18,
    },
    {
        name: "小红",
        age: 30,
    },
];
$ui.list.setDataSource(items);
$ui.list.on("item_click", function (item, i, itemView, listView) {
    toast("被点击的人名字为: " + item.name + "，年龄为: " + item.age);
});
```

事件:` item_click`:

-   `item` {any} 被点击的列表项的数据
-   `i` {number} 被点击的列表项的位置
-   `itemView` {View} 被点击的列表项的 View
-   `listView` {View} 当前列表控件

当用户点击一个 List 中的项时会触发该事件。

例子：

```js
"ui";
$ui.layout(
    <frame>
        <list id="list">
            <vertical>
                <text id="name" textSize="16sp" textColor="#000000" text="姓名: {{name}}" />
                <text id="age" textSize="16sp" textColor="#000000" text="年龄: {{age}}岁" />
            </vertical>
        </list>
    </frame>
);
var items = [
    {
        name: "小明",
        age: 18,
    },
    {
        name: "小红",
        age: 30,
    },
];
$ui.list.setDataSource(items);
$ui.list.on("item_click", function (item, i, itemView, listView) {
    toast("被点击的人名字为: " + item.name + "，年龄为: " + item.age);
});
```

事件: `item_long_click`:

-   `event`{object} 事件，字段有：
    -   `consumed` {boolean} 设置此事件是否被消费
    -   `view` {View} 此事件对应的 View
-   `item` {any} 被点击的列表项的数据
-   `i` {number} 被点击的列表项的位置
-   `itemView` {View} 被点击的列表项的 View
-   `listView` {View} 当前列表控件

当用户长按一个 List 中的项时会触发该事件。

事件: `item_bind`:

-   `itemView` {View} 当前列表项的 View
-   `itemHolder`{object} 当前列表项的管理对象，可动态获取列表项的位置和数据。
    -   `item` {any} 获取列表项的数据
    -   `position` {number} 获取列表项的位置

当列表创建一个新的列表项的 View 时触发该事件。实际上列表控件不会为列表控件的每个项目创建一个单独的 View，假设列表为 2000 个，屏幕最多显示 10 个，那么列表控件只会创建 10 个左右的 View。

这个事件通常用于对列表项的 View 设置事件回调，比如：

```js
"ui";
$ui.layout(
    <frame>
        <list id="list">
            <vertical>
                <text id="name" textSize="16sp" textColor="#000000" text="姓名: {{this.name}}" />
                <checkbox id="checkbox" checked="{{this.checked}}" />
            </vertical>
        </list>
    </frame>
);
var items = [
    {
        name: "小明",
        checked: false,
    },
    {
        name: "小红",
        checked: false,
    },
];
$ui.list.setDataSource(items);

$ui.list.on("item_bind", function (itemView, itemHolder) {
    itemView.checkbox.on("check", function (checked) {
        let item = itemHolder.item;
        item.checked = checked;
        console.log(item);
    });
});
```

事件: `item_data_bind`:

-   `itemView` {View} 当前列表项的 View
-   `itemHolder`{object} 当前列表项的管理对象，可获取列表项的位置和数据。
    -   `item` {any} 获取列表项的数据
    -   `position` {number} 获取列表项的位置

当列表将一个列表项的数据绑定到列表项的 View 时触发该事件。

例子:

```js
"ui";
$ui.layout(
    <frame>
        <list id="list">
            <vertical>
                <text id="name" textSize="16sp" textColor="#000000" text="姓名: {{this.name}}" />
                <checkbox id="checkbox" checked="{{this.checked}}" />
            </vertical>
        </list>
    </frame>
);
var items = [
    {
        name: "小明",
        checked: false,
    },
    {
        name: "小红",
        checked: false,
    },
];
$ui.list.setDataSource(items);

$ui.list.on("item_data_bind", function (itemView, itemHolder) {
    let item = itemHolder.item;
    itemView.name.setTextColor(item.checked ? $colors.RED : $colors.BLACK);
});

$ui.list.on("item_bind", function (itemView, itemHolder) {
    itemView.checkbox.on("check", function (checked) {
        let item = itemHolder.item;
        item.checked = checked;
        $ui.list.getAdapter().notifyItemChanged(itemHolder.position);
    });
});
```
