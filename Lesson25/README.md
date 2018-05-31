组件：表行组件
==============

## 知识点

* 制作表行组件

### 表行组件

为自己的页面表格编写表行组件。

## 综合例

~~~html
<div id="myApp">
    <h1>2017年最期待的游戏是：</h1>
    <table border="1">
        <tr>
            <td>编号</td>
            <td>游戏名称</td>
        </tr>
        <my-row1></my-row1>
        <my-row2></my-row2>
        <my-row3></my-row3>
    </table>
</div>
<script>
    Vue.component('my-row1', {
        template: '<tr><td>(1)</td><td>塞尔达传说:荒野之息(3/3)</td></tr>'
    });    
    Vue.component('my-row2', {
        template: '<tr><td>(2)</td><td>新马里奥赛车(4/28)</td></tr>'
    });    
    Vue.component('my-row3', {
        template: '<tr><td>(3)</td><td>喷射乌贼娘2代</td></tr>'
    });    
    var myApp = new Vue({
        el: '#myApp', 
        data: {
        },
        methods: {
        },
    });
</script>
~~~

## 源文件

* https://gitee.com/komavideo/LearnVueJS

## 小马视频频道

http://komavideo.com
