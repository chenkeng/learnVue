从index.html开始
================

## 知识点

* html5文档
* vue.js导入
* Vue对象

## index.html

从第一个index.html开始吧！

### vue.js引用

~~~html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
~~~

### html代码块

~~~html
<div id="myApp">
  {{ message }}
</div>
~~~

### javascript脚本部分

~~~javascript
var myApp = new Vue({
  el: '#myApp',
  data: {
    message: 'Hello Vue.js World!'
  }
});
~~~


