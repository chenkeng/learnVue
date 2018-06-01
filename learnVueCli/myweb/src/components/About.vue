<template>
    <div>
        <div>
            {{msg}}
        </div>
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
import Sider from './About/Sider'
import Detail from './About/Detail'
export default {
    name:'About',
    data(){
        return {
            msg:"this is the about page!"
        }
    },
    components:{
        Sider:Sider,
        Detail:Detail
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
}

.aside {
  float: left;
  min-width: 200px;
  min-height: 400px;
  background-color: bisque;
}
.main {
  flex: 1;
  background-color: blueviolet;
}
</style>

