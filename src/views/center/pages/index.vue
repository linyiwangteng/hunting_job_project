<template>
  <div class="persion-center-container">
    <div class="left-container">
      <!--  -->
      <div class="user-message-panel">
        <div class="user-img-box">
          <img :src="imgUrl" alt />
        </div>
        <div class="user-name">李强</div>
        <div class="user-detail-msg">
          <div class="user-detail-item">29岁</div>
          <div class="user-detail-item line">9年</div>
          <div class="user-detail-item">本科</div>
        </div>
        <!-- 在职 -->
        <div class="user-class-select"></div>
        <div class="user-jianli-away">
          <ul>
            <li class="away-item">
              <div class="number">6679</div>
              <div class="away-label">沟通过</div>
            </li>
            <li class="away-item">
              <div class="number">6679</div>
              <div class="away-label">已投递</div>
            </li>
            <li class="away-item">
              <div class="number">6679</div>
              <div class="away-label">面试</div>
            </li>
            <li class="away-item">
              <div class="number">6679</div>
              <div class="away-label">感兴趣</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-message-panel">
        <div class="user-jianli-edit">
          <ul>
            <li class="jianli-item">
              <div class="icon icon_one">
                <img :src="iconOne" alt="">
              </div>
              <div class="jianli-line">在线简历</div>
            </li>
            <li class="jianli-item">
              <div class="jianli-edit">编辑简历</div>
              <div class="jianli-update-time">1029.11.03更新</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-message-panel">
        <div class="user-school-edit">
          <ul>
            <li class="school-item">
              <div class="icon icon_two">
                <img :src="iconTwo" alt="">
              </div>
              <div class="school-name">报名院校</div>
            </li>
            <li class="school-item">
              <div class="origin-name">报名机构</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-container"></div>
  </div>
</template>

<script>
import DefaultImg from "./assets/img/touxiang.jpg";
export default {
  data() {
    return {
      imgUrl: DefaultImg,
      iconOne: require('./assets/img/icon_one.png'),
      iconTwo: require('./assets/img/icon_two.png'),
      iconThree: require('./assets/img/icon_three.png'),
    };
  },
  created() {}
};
</script>
<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.user-message-panel {
  padding: 33px;
  box-sizing: border-box;
  border-bottom: 1px dotted #a2a3a3;
}
.persion-center-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .left-container {
    width: 387px;
    .user-img-box {
      width: 102px;
      height: 102px;
      border-radius: 50%;
      margin: 0 auto;
      box-sizing: border-box;
      border: 1px solid #a2a3a3;
      padding: 2px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 98px;
        height: 98px;
        border-radius: 50%;
      }
    }
    .user-name {
      text-align: center;
      padding: 12px 0;
    }
    .user-detail-msg {
      width: 225px;
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      margin-bottom:20px;
      .user-detail-item {
        flex: 1;
      }
      .line {
        border-left: 1px dotted #a2a3a3;
        border-right: 1px dotted #a2a3a3;
      }
    }
    .user-jianli-away {
      width: 320px;
      margin: 0 auto;
      ul {
        display: flex;
        justify-content: space-around;
        padding-left: 0;
        li {
          .away-label{
            color: #a2a3a3;
          }
        }
      }
    }
    .user-jianli-edit{
      ul{
        margin-left: 0;
        li.jianli-item{
          
        }
      }
    }
  }
  .right-container {
    flex: 1;
  }
}
</style>