<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="img in swiperSlides" :key="img"><img :src="img" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          autoplay:{
            delay:5000,
            disableOnInteraction: false,
          },
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
          navigation: {// 貌似没起作用
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         }     
        },
        swiperSlides: ['https://www.baidu.com/img/bd_logo1.png?where=super','../../static/imgs/1996.jpg','../../static/imgs/bbb.png']
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 4) {// 通过这种方式可以追加图片
          this.swiperSlides.push('../../static/imgs/logo.png')
        }
      }, 10000)
    }
  }
</script>


<style>
.swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-container .swiper-slider {
  width: 100%;
  height: 300px;
}
.swiper-container img {
  width: 100%;
  height: 300px;
}
</style>
