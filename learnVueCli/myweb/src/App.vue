<template>
  <div id="app">
    
    <div class="tips">
      {{msg}}
      <ol>
        <li @click="move('/index')">Index</li>
        <li @click="move('/home')">Home</li>
        <li @click="move('/about')">About</li>
      </ol>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:"created by superhan !"
    }
  },
  methods:{
    move: function (val) {
      console.log(val);
      if (val === '/index') {    
        this.$router.push({ path: val });
      } else if (val === '/home') {
        this.$router.push({ path: val });
      } else if (val === '/about') {
        this.$router.push({ path: val });
      } 
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.tips {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  background-color: darkgoldenrod;
}
ol {
  list-style: none;
  /* display: inline; */
  float: right;
  font-size: 0;
}
ol > li {
  display: inline-block;
  width: 80px;
  background-color: aquamarine;
  font-size: 24px;
}
ol > li:not(:last-child) {
  border-right: 1px solid black;
}
ol li:hover {
  background-color: blueviolet;
}
</style>
