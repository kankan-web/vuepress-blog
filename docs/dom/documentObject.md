---
title: document对象
author: 阿娟蛋
date: '2021-12-12'
---
<a name="tc6Iz"></a>
## 2.1 document对象
document对象高于html

1. document.getElementById

id通常被称为钩子，小心使用。能不用尽量不用。

2. docuement.getElementsByTagName

返回的结果是个类数组。都支持

3. document.getElementsByClassName

返回的结果是个类数组。ie8以下不支持

4. document.getElementsByName

返回的结果是个类数组。

5. querySelector（HTML5 引入WEB API）

选择方式跟css选择器写法一样。有多个被选的，则会选择第一个。

6. querySelectorAll（HTML5 引入WEB API）
<a name="Lrh8I"></a>
#### 不推荐使用querySelector和querySelectorAll的原因

1. 性能不好
2. 不实时：涉及DOM或者数据变化时，这个选择器不实时。
```json
var divs=document.querySelectorAll('div);
console.log(divs);
divs.remove()
console.log(divs)
```
<a name="UvdYQ"></a>
## 2.2 遍历节点树
节点不等于元素。
节点包含元素。
元素节点=DOM元素。
元素节点树：
![1695890057123.jpeg](https://cdn.nlark.com/yuque/0/2023/jpeg/26671896/1695890058449-2fe2fcb7-b2f8-43da-b82b-677fc8109e62.jpeg#averageHue=%23718639&from=url&id=GXNuL&originHeight=960&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=282030&status=done&style=none&title=)
```html
<ul>
  <li>
    <!--我是一个注释君-->
    <h2>我是标题标签</h2>
    <a href="">我是超链接标签</a>
    <p>我是段落标签</p>
  </li>
</ul>
<script>
  var a=document.getElementsByTagName('a')[0]
	var li=document.getElementsByTagName('li')[0]
</script>
```

1. parentNode

a.parentNode，找到a元素的父节点
a.parentNode.parentNode，找到a元素的父节点的父节点

2. ChildNodes
- 元素节点=1
- 属性节点=2
- 文本节点 text=3
- 注释节点 comment=8
- document=9
- DocumentFragment=11

li.ChildNodes，共有9个孩子

3. firstChild
4. lastChild
5. nextSibling
6. previousSibling
<a name="btUx0"></a>
## 2.3 遍历元素节点树

1. parentElement（IE9及以下不支持）
2. children（IE7及以下不支持）
3. childElementCount=children.length（IE9及以下不支持）
4. firstElementChild（IE9及以下不支持）
5. lastElementChild（IE9及以下不支持）
6. nextElementSibiling（IE9及以下不支持）
7. previousElementSibling（IE9及以下不支持）
<a name="oCkNA"></a>
# 注意：

1. 一般企业中都不直接使用id来写css样式。
