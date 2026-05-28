---
title: uiObject
---


# UiObject

UiObject 表示一个控件，可以通过这个对象获取到控件的属性，也可以对控件进行点击、长按等操作。

获取一个 UiObject 通常通过选择器的`findOne()`, `findOnce()`等函数，也可以通过 UiCollection 来获取，或者通过`UiObject.child()`, `UiObject.parent()`等函数来获取一个控件的子控件或父控件。

## UiObject.click()

-   返回 {Boolean}

点击该控件，并返回是否点击成功。

如果该函数返回 false，可能是该控件不可点击(clickable 为 false)，当前界面无法响应该点击等。

## UiObject.longClick()

-   返回 {Boolean}

长按该控件，并返回是否点击成功。

如果该函数返回 false，可能是该控件不可点击(longClickable 为 false)，当前界面无法响应该点击等。

## UiObject.setText(text)

-   `text` {string} 文本
-   返回 {Boolean}

设置输入框控件的文本内容，并返回是否设置成功。

该函数只对可编辑的输入框(editable 为 true)有效。

## UiObject.copy()

-   返回 {Boolean}

对输入框文本的选中内容进行复制，并返回是否操作成功。

该函数只能用于输入框控件，并且当前输入框控件有选中的文本。可以通过`setSelection()`函数来设置输入框选中的内容。

```js
var et = className("EditText").findOne();
//选中前两个字
et.setSelection(0, 2);
//对选中内容进行复制
if (et.copy()) {
    toast("复制成功");
} else {
    toast("复制失败");
}
```

## UiObject.cut()

对输入框文本的选中内容进行剪切，并返回是否操作成功。

该函数只能用于输入框控件，并且当前输入框控件有选中的文本。可以通过`setSelection()`函数来设置输入框选中的内容。

## UiObject.paste()

-   返回 {Boolean}

对输入框控件进行粘贴操作，把剪贴板内容粘贴到输入框中，并返回是否操作成功。

```js
//设置剪贴板内容为“你好”
setClip("你好");
var et = className("EditText").findOne();
et.paste();
```

## UiObject.setSelection(start, end)

-   `start` {number} 选中内容起始位置
-   `end` {number} 选中内容结束位置(不包括)
-   返回 {Boolean}

对输入框控件设置选中的文字内容，并返回是否操作成功。

索引是从 0 开始计算的；并且，选中内容不包含 end 位置的字符。例如，如果一个输入框内容为"123456789"，要选中"4567"的文字的代码为`et.setSelection(3, 7)`。

该函数也可以用来设置光标位置，只要参数的 end 等于 start，即可把输入框光标设置在 start 的位置。例如`et.setSelection(1, 1)`会把光标设置在第一个字符的后面。

## UiObject.scrollForward()

-   返回 {Boolean}

对控件执行向前滑动的操作，并返回是否操作成功。

向前滑动包括了向右和向下滑动。如果一个控件既可以向右滑动和向下滑动，那么执行`scrollForward()`的行为是未知的(这是因为 Android 文档没有指出这一点，同时也没有充分的测试可供参考)。

## UiObject.scrollBackward()

-   返回 {Boolean}

对控件执行向后滑动的操作，并返回是否操作成功。

向后滑动包括了向右和向下滑动。如果一个控件既可以向右滑动和向下滑动，那么执行`scrollForward()`的行为是未知的(这是因为 Android 文档没有指出这一点，同时也没有充分的测试可供参考)。

## UiObject.select()

-   返回 {Boolean}

对控件执行"选中"操作，并返回是否操作成功。"选中"和`isSelected()`的属性相关，但该操作十分少用。

## UiObject.collapse()

-   返回 {Boolean}

对控件执行折叠操作，并返回是否操作成功。

## UiObject.expand()

-   返回 {Boolean}

对控件执行操作，并返回是否操作成功。

## UiObject.show()

对集合中所有控件执行显示操作，并返回是否全部操作成功。

## UiObject.scrollUp()

对集合中所有控件执行向上滑的操作，并返回是否全部操作成功。

## UiObject.scrollDown()

对集合中所有控件执行向下滑的操作，并返回是否全部操作成功。

## UiObject.scrollLeft()

对集合中所有控件执行向左滑的操作，并返回是否全部操作成功。

## UiObject.scrollRight()

## children()

-   返回 [UiCollection](#uicollection)

返回该控件的所有子控件组成的控件集合。可以用于遍历一个控件的子控件，例如：

```js
className("AbsListView")
    .findOne()
    .children()
    .forEach(function (child) {
        log(child.className());
    });
```

## childCount()

-   返回 {number}

返回子控件数目。

## child(i)

-   i {number} 子控件索引
-   返回 {UiObject}

返回第 i+1 个子控件。如果 i>=控件数目或者小于 0，则抛出异常。

需要注意的是，由于布局捕捉的问题，该函数可能返回`null`，也就是可能获取不到某个子控件。

遍历子控件的示例：

```js
var list = className("AbsListView").findOne();
for (var i = 0; i < list.childCount(); i++) {
    var child = list.child(i);
    log(child.className());
}
```

## parent()

-   返回 {UiObject}

返回该控件的父控件。如果该控件没有父控件，返回`null`。

## bounds()

-   返回 [Rect](https://hyb1996.github.io/AutoJs-Docs/widgets-based-automation.html#rect)

返回控件在屏幕上的范围，其值是一个[Rect](https://hyb1996.github.io/AutoJs-Docs/widgets-based-automation.html#rect)对象。

示例：

```js
var b = text("Auto.js").findOne().bounds();
toast("控件在屏幕上的范围为" + b);
```

如果一个控件本身无法通过`click()`点击，那么我们可以利用`bounds()`函数获取其坐标，再利用坐标点击。例如：

```js
var b = desc("打开侧拉菜单").findOne().bounds();
click(b.centerX(), b.centerY());
//如果使用root权限，则用 Tap(b.centerX(), b.centerY());
```

## boundsInParent()

-   返回 [Rect](https://hyb1996.github.io/AutoJs-Docs/widgets-based-automation.html#rect)

返回控件在父控件中的范围，其值是一个[Rect](https://hyb1996.github.io/AutoJs-Docs/widgets-based-automation.html#rect)对象。

## drawingOrder()

-   返回 {number}

返回控件在父控件中的绘制次序。该函数在安卓 7.0 及以上才有效，7.0 以下版本调用会返回 0。

## id()

-   返回 {string}

获取控件的 id，如果一个控件没有 id，则返回`null`。

## text()

-   返回 {string}

获取控件的文本，如果控件没有文本，返回`""`。

## findByText(str)

-   `str` {string} 文本
-   返回 [UiCollection](#uicollection)

根据文本 text 在子控件中递归地寻找并返回文本或描述(desc)**包含**这段文本 str 的控件，返回它们组成的集合。

该函数会在当前控件的子控件，孙控件，曾孙控件...中搜索 text 或 desc 包含 str 的控件，并返回它们组合的集合。

## findOne(selector)

-   `selector` [UiSelector](#uiselector)
-   返回 [UiOobject](#uiobject)

根据选择器 selector 在该控件的子控件、孙控件...中搜索符合该选择器条件的控件，并返回找到的第一个控件；如果没有找到符合条件的控件则返回`null`。

例如，对于酷安动态列表，我们可以遍历他的子控件(每个动态列表项)，并在每个子控件中依次寻找点赞数量和图标，对于点赞数量小于 10 的点赞：

```js
//找出动态列表
var list = id("recycler_view").findOne();
//遍历动态
list.children().forEach(function (child) {
    //找出点赞图标
    var like = child.findOne(id("feed_action_view_like"));
    //找出点赞数量
    var likeCount = child.findOne(id("text_view"));
    //如果这两个控件没有找到就不继续了
    if (like == null || likeCount == null) {
        return;
    }
    //判断点赞数量是否小于10
    if (parseInt(likeCount.text()) < 10) {
        //点赞
        like.click();
    }
});
```

## find(selector)

-   `selector` [UiSelector](#uiselector)
-   返回 [UiCollection](#uicollection)

根据选择器 selector 在该控件的子控件、孙控件...中搜索符合该选择器条件的控件，并返回它们组合的集合。
