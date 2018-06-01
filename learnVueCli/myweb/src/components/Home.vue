<template>
    <div>
        <div class="card">
            <img src="../assets/logo.png">
            <p>Lorem ipsum dolor sit.</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Home",
    data(){
        return {
            msg:"this is the Home page !"
        }
    }
}
</script>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
.card img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>


