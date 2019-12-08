<template>
  <div>
    <swiper class="banner-swiper" :options="bannerOption" ref="mybanner">
      <swiper-slide v-for="(slide,index) in banner" :key="index">
        <div class="banner-container">
          <img :src="slide.img" alt="">
          <span class="banner-title">{{slide.name}}</span>
        </div>
      </swiper-slide>
    </swiper>
    <span class="prev-next prev-slide" @click="prevPage"><</span>
    <span class="prev-next next-slide" @click="nextPage">></span>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import banner1 from '@/assets/banners/banner1.jpg'
import banner2 from '@/assets/banners/banner2.jpg'
import banner3 from '@/assets/banners/banner3.jpg'
export default {
  data(){
    return {
      banner: [
        {
          img: banner1,
          name: '【新华全媒头条】深圳建设“先行示范区”全球观'
        },
        {
          img: banner2,
          name: '【新华全媒头条】深圳建设“先行示范区”全球观'
        },
        {
          img: banner3,
          name: '【澳门回归20周年】澳门举行国际幻彩大巡游'
        }
      ],
      bannerOption: {
        autoplay: true,
        loop: true
      }
    }
  },
  computed:{
    bannerSwiper() {
      return this.$refs.mybanner.swiper
    }
  },
  methods: {
    prevPage(){
      this.bannerSwiper.slidePrev();
    },
    nextPage(){
      this.bannerSwiper.slideNext();
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scope>
.banner-swiper{
  position: relative;
  width: 580px;
  height: 348px;
}
  .banner-container{
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
    .banner-title{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 42px;
      background: rgba(0,0,0,0.6);
      font-size: 14px;
      color: #ffffff;
      line-height: 42px;
    }
  }
  .prev-next{
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(0,0,0,0.4);
    font-size: 36px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .prev-slide{
    left: 0;
    bottom: 48px;
  }
  .next-slide{
    right: 0;
    bottom: 48px;
  }
</style>