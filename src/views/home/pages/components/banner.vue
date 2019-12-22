<template>
  <div v-if="banner.length">
    <swiper class="banner-swiper" :options="banner.length > 1 ? bannerOption : bannerOption1" ref="mybanner">
      <swiper-slide v-for="(slide,index) in banner" :key="index">
        <div class="banner-container" @click="goDetail(slide.id,slide.title)">
          <img :src="slide.titlePage" alt="">
          <span class="banner-title">{{slide.title}}</span>
        </div>
      </swiper-slide>
    </swiper>
    <span class="prev-next prev-slide" @click="prevPage" v-if="banner.length > 1"><</span>
    <span class="prev-next next-slide" @click="nextPage" v-if="banner.length > 1">></span>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import banner1 from '@/assets/banners/banner1.jpg'
// import banner2 from '@/assets/banners/banner2.jpg'
// import banner3 from '@/assets/banners/banner3.jpg'
import api from '@/api/index.js';
import {mapMutations} from 'vuex';
export default {
  data(){
    return {
      banner: [],
      bannerOption: {
        autoplay: true,
        loop: true
      },
      bannerOption1: {
        autoplay: false,
        loop: false
      }
    }
  },
  mounted(){
    api.bannerList({
      infoType:2,
      topRow:4
    }).then(res=>{
      this.banner = res.data;
    })
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
    },
    goDetail(id,name){
      this.banner.map(item=>{
        if(item.id == id){
          this.setNewsContent(item.contents);
        }
      })
      this.$router.push('/detail?id='+id+"&name="+name);
    },
    ...mapMutations([
      'setNewsContent'
    ])
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
    cursor: pointer;
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