自定义css样式
============

## 知识点

* 定义属于自己的样式单文件my.css

## 实战演习

~~~bash
$ cd assets
$ my.css
...
.myclass1 {
    color: red;
    border: 1px solid blue;
}
...
$ cd ../
$ App.vue
...
#这里必须是该文件对于my.css的相对路径
import './assets/my.css'
...
<div class="myclass1">你好！</div>
...
~~~
