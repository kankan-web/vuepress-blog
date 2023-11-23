---
title: DOM初探 
author: 阿娟蛋
date: '2021-12-12'
---
<a name="Qa114"></a>
## 1.1 DOM初探和JS对象 
DOM->Document Object Model文档对象模型<br />DOM对象->宿主对象（浏览器提供的）<br />JavaScript三种对象：
1. 本地对象：Native Object
Object Function Array String Number Boolean Error EvalError SyntaxError RangeError ReferenceError TypeError URIError Date RegExp
2. 内置对象 Built-in Object
Global Math ECMA->isNaN() parseInt() Number decodeURI encodeURI Infinity NaN undefined<br />本地对象和内置对象都是ES的内部对象
3. 宿主对象 Host Object
执行jS脚步的环境提供的对象，浏览器对象，兼容性问题<br />浏览器对象Window(BOM)和document(DOM)->w3c
<a name="cRDY8"></a>
#### DOM存在的意义
DOM：通过浏览器提供的这一套方法表示或者操作HTML和XML
<a name="PjAKr"></a>
### 1.2 XML了解
```json
<person>
	<name>章三</name>
	<sex>男</sex>
</person>
```
XML->XHTML->HTML<br />js也是可以操作XML的
<a name="CKle1"></a>
# 实战案例
幻灯片：<br />选项卡：
