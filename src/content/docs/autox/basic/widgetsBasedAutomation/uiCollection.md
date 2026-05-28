---
title: uiCollection
---


# UiCollection

UiCollection, 控件集合, 通过选择器的`find()`, `untilFind()`方法返回的对象。

UiCollection"继承"于数组，实际上是一个 UiObject 的数组，因此可以使用数组的函数和属性，例如使用 length 属性获取 UiCollection 的大小，使用 forEach 函数来遍历 UiCollection。

例如，采用 forEach 遍历屏幕上所有的文本控件并打印出文本内容的代码为：

```js
console.show();
className("TextView")
    .find()
    .forEach(function (tv) {
        if (tv.text() != "") {
            log(tv.text());
        }
    });
```

也可以使用传统的数组遍历方式：

```js
console.show();
var uc = className("TextView").find();
for (var i = 0; i < uc.length; i++) {
    var tv = uc[i];
    if (tv.text() != "") {
        log(tv.text());
    }
}
```

UiCollection 的每一个元素都是 UiObject，我们可以取出他的元素进行操作，例如取出第一个 UiObject 并点击的代码为`ui[0].click()`。如果想要对该集合的所有元素进行操作，可以直接在集合上调用相应的函数，例如`uc.click()`，该代码会对集合上所有 UiObject 执行点击操作并返回是否全部点击成功。

因此，UiCollection 具有所有 UiObject 对控件操作的函数，包括`click()`, `longClick()`, `scrollForward()`等等，不再赘述。

## UiCollection.size()

-   返回 {number}

返回集合中的控件数。

历史遗留函数，相当于属性 length。

## UiCollection.get(i)

-   `i` {number} 索引
-   返回 [UiObject](#uiobject)

返回集合中第 i+1 个控件(UiObject)。

历史遗留函数，建议直接使用数组下标的方式访问元素。

## UiCollection.each(func)

-   `func` {Function} 遍历函数，参数为 UiObject。

遍历集合。

历史遗留函数，相当于`forEach`。参考[forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)。

## empty()

-   返回 {Boolean}

返回控件集合是否为空。

## nonEmpty()

-   返回 {Boolean}

返回控件集合是否非空。

## UiCollection.find(selector)

-   `selector` [UiSelector](#uiselector)
-   返回 [UiCollection](#uicollection)

根据 selector 所确定的条件在该控件集合的控件、子控件、孙控件...中找到所有符合条件的控件并返回找到的控件集合。

注意这会递归地遍历控件集合里所有的控件以及他们的子控件。和数组的`filter`函数不同。

例如：

```js
var names = id("name").find();
//在集合
var clickableNames = names.find(clickable());
```

## UiCollection.findOne(selector)

-   `selector` [UiSelector](#uiselector)
-   返回 [UiOobject](#uiobject)

根据选择器 selector 在该控件集合的控件的子控件、孙控件...中搜索符合该选择器条件的控件，并返回找到的第一个控件；如果没有找到符合条件的控件则返回`null`。
