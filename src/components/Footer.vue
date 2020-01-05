<template>
  <div class="footer">
    <div class="footer-content">
      <span class="f1">Copyright</span>
      <span class="f2">&copy;2019黑ICP备19008166号</span>
      <span class="f4">主办单位：黑龙江省新鲜人力资源有限公司</span>
      <span class="f4">技术支持：黑龙江校企科技有限公司</span>
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
      text-align: center;
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