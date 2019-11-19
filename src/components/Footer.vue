<template>
  <div class="footer">
    <div class="footer-content">
      <span class="f1">Copyryght</span>
      <span class="f2">© 2019 黑龙江省1132213京ICP备150923号-5京</span>
      <span class="f3">ICP证150923号</span> 
      <span class="f4"><i></i>电子营业执照 </span> 
      <span class="f5">京公网安备11010502032801<i></i></span>
      <span style="margin-right: 24px;">首都网警</span> 
      <span>人力资源服务许可证</span> 
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .footer{
    width: 100%;
    height: 136px;
    background: #ff6700;
    .footer-content{
      width: 1180px;
      height: auto;
      padding-top: 62px;
      margin: 0 auto;
      color: #ffffff;
      font-size: 14px;
      
      .f1{
        padding: 0 14px;
      }
      .f2{
        padding-right: 14px;
        letter-spacing: 2px;
      }
      .f3{
        padding-right: 26px;
      }
      .f4{
        padding-right: 16px;
        i{
          display: inline-block;
          width: 15px;
          height: 18px;
          vertical-align: sub;
          background: url('../assets/f1.png') no-repeat center;
          background-size: 15px auto;
          margin-right: 8px;
        }
      } 
      .f5{
        margin-right: 33px;
        i{
          display: inline-block;
          width: 15px;
          height: 19px;
          vertical-align: sub;
          background: url('../assets/f2.png') no-repeat center;
          background-size: 15px auto;
          margin-left: 4px;
        }
      }
    }
  }
</style>