<template>
  <div class="contact-box">
    <div class="wx-container">
      <span class="wx-box"><img src="@/assets/weixin.png" alt=""></span>
      <span class="wx-name">微信<br/>公众号</span>
    </div>
    <div class="kefu-container">
      <span class="kefu-box"><img src="@/assets/kefu.png" alt=""></span>
      <span class="kefu-name">意见<br/>反馈</span>
    </div>
    <div class="top-container" @click="goTop">
      <img src="@/assets/top-pointer.png" alt="">
      <span class="top-name">回到<br/>顶部</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop(){
      // window.scroll(0,0);
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}
</script>

<style lang="less">
  .contact-box{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 68px;
    height: 315px;
    background:#ff6700;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 10px;
    .wx-container{
      width: 100%;
      height: auto;
      box-sizing: border-box;
      border-bottom: 1px solid #d55300;
      padding-top: 20px;
      .wx-box{
        display: block;
        width: 42px;
        margin-bottom: 8px;
        img{
          display: block;
          width: 100%;
          height: auto;
          margin-bottom: 8px;
        }
      }
      .wx-name{
        display: block;
        width: 100%;
        text-align: center;
        padding-bottom: 6px;
        color: #ffffff;
      }
    }
    
    .kefu-container{
      width: 100%;
      height: auto;
      margin-top: 12px;
      border-bottom: 1px solid #d55300;
      .kefu-box{
        width: 38px;
        height: 38px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 12px;
      }
      .kefu-name{
        display: block;
        width: 100%;
        text-align: center;
        margin-bottom: 6px;
        color: #ffffff;
      }
    }
    .top-container{
      padding-top: 17px;
      color: #ffffff;
      cursor: pointer;
      transition: all 0.2s linear;
      img{
        display: block;
        width: 25px;
        height: 12px;
        margin: 0 auto 10px;
      }
    }
  }
</style>