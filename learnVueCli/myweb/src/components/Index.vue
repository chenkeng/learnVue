<template>
  <div class="hello">
    <div>{{msg}}</div>
    <Header class="top">
        <router-view></router-view>
      </Header>
    <div class="container">
      
      <Sider class="aside">
       <router-view></router-view>
      </Sider>
      <Detail class="main">
        <router-view></router-view>
      </Detail>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Sider from './Index/Sider'
import Detail from './Index/Detail'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Index page !'
    }
  },
  components:{
    Header:Header,
    Sider:Sider,
    Detail:Detail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  width: 100%;
  display: flex;
}
.top {
  width: 100%;
  height: 200px;
  background-color: aliceblue;
}
.aside {
  float: left;
  min-width: 200px;
  min-height: 400px;
  background-color: bisque;
}
.main {
  /* float: right; */
  flex: 1;
  /* padding-left: 200px; */
  background-color: blueviolet;
}
</style>
