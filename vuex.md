
vuex 的用法
1. vuex 的安装
```js
npm  install  vuex --save
```

```main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);


const store = new Vuex.Store({

    })


new Vue({
    el:"#app",
    router:router,

    store:store,
    render:h=>h(App)
    })



```
