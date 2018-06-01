路由啊路由
==========

## 知识点

* 路由组件vue-router

### 官网

https://router.vuejs.org/zh-cn/

https://github.com/vuejs/vue-router

## 实战演习

~~~bash
$ npm install vue-router --save 
~~~

## 路由组件的设定

### src/router/index.js

~~~js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
~~~

### src/main.js

~~~js
import router from './router'
...
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
~~~


