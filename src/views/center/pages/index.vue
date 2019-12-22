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
                <img :src="iconOne" alt />
              </div>
              <a class="jianli-line" href="#/jianli">在线简历</a>
            </li>
            <li class="jianli-item">
              <div class="icon"></div>
              <a href="#/jianli" class="jianli-edit">编辑简历</a>
              <div class="jianli-update-time">1029.11.03更新</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-message-panel">
        <div class="user-jianli-edit">
          <ul>
            <li class="jianli-item">
              <div class="icon icon_one">
                <img :src="iconTwo" alt />
              </div>
              <a href class="jianli-line">报名院校</a>
            </li>
            <li class="jianli-item">
              <div class="icon"></div>
              <a href class="jianli-edit">报名机构</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-message-panel">
        <div class="user-jianli-edit">
          <ul>
            <li class="jianli-item">
              <div class="icon icon_one">
                <img :src="iconThree" alt />
              </div>
              <div class="jianli-line">我看过的</div>
            </li>
          </ul>
          <ul>
            <li class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </li>
            <li class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="center-right-img">
        <img :src="centerBanner" alt />
      </div>
      <div class="right-title">为您优选</div>
      <ul class="clearfix position_list_ul">
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
        <li class="position_list_item default_list">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              移动APP测试专家
              <span class="title-tip">[1天前发布]</span>
            </div>
            <div class="position-title-desc">经验5-10年不限</div>
            <div class="postion-money">30K-60K</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="imgUrl" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">云朵课堂</div>
                <div class="cmp-desc">教育 科技</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DefaultImg from "./assets/img/touxiang.jpg";
export default {
  data() {
    return {
      imgUrl: DefaultImg,
      iconOne: require("./assets/img/icon_one.png"),
      iconTwo: require("./assets/img/icon_two.png"),
      iconThree: require("./assets/img/icon_three.png"),
      centerBanner: require("./assets/img/center_banner.png")
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
a {
  color: #000;
}
li {
  list-style: none;
}
ul {
  padding-left: 0;
}
.user-message-panel {
  padding: 33px;
  box-sizing: border-box;
  border-bottom: 1px dotted #a2a3a3;
}
.persion-center-container {
  width: 100%;
  display: flex;
  flex-direction: row;
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
      margin-bottom: 20px;
      .user-detail-item {
        flex: 1;
        text-align: center;
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
        li.away-item {
          text-align: center;
          .away-label {
            color: #a2a3a3;
          }
        }
      }
    }
    .user-jianli-edit {
      ul {
        margin-left: 30px;
        li.jianli-item {
          display: flex;
          align-items: center;
          .icon {
            width: 32px;
            height: 32px;
            margin-right: 10px;
            img {
              height: 100%;
            }
          }
          .jianli-edit,
          .jianli-line {
            margin-right: 50px;
            font-size: 16px;
            display: block;
          }
          .jianli-update-time {
            color: rgb(176, 177, 177);
          }
        }
        .company-item {
          display: flex;
          padding-left: 40px;
          margin-bottom: 15px;
          .cmp-img {
            width: 40px;
            height: 40px;
            overflow: hidden;
            margin-right: 15px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .cmp-msg {
            text-align: left;
            .cmp-desc {
              color: rgb(176, 177, 177);
            }
          }
        }
      }
    }
  }
  .right-container {
    flex: 1;
    padding-left: 20px;
    box-sizing: border-box;
    .right-title{
      width: 145px;
      height: 36px;
      background: url('./assets/img/center_title_bg.png') no-repeat;

      // text-align: center;
      text-indent: 30px;
      line-height: 40px;
      color: #ff6700;
      font-weight: bolder;
      font-size: 18px;
      margin: 16px 0 0 0;
    }
    .center-right-img {
      width: 100%;
    }
    .position_list_ul {
      width: 100%;
      li:nth-of-type(3n) {
        margin-right: 0;
      }
      .position_list_item {
        float: left;
        position: relative;
        width: 250px;
        height: 150px;
        margin: 12px 12px 0 0;
        padding: 20px 18px 0;
        border: 1px solid #eaeeed;
        background-color: #fff;
        .top_icon {
          position: absolute;
          top: -1px;
          left: -1px;
          width: 40px;
          height: 40px;
          background-position: center;
          background-repeat: no-repeat;
        }
        .direct_recruitment {
          background-image: url(//www.lgstatic.com/lg-www-fed/index/modules/job_list/img/direct-recruit@2x_0d49da5.png);
          background-size: 40px 40px;
        }
        .position-top {
          border-bottom: 1px dotted #a2a3a3;
          .position-item-title {
            font-size: 14px;
            color: #000;
            .title-tip {
              color: #9fa0a0;
            }
          }
          .position-title-desc {
            color: #9fa0a0;
          }
          .postion-money {
            color: #ff6700;
          }
        }
        .position-bottom {
          .company-item {
            display: flex;
            // margin-bottom: 15px;
            padding: 14px 0 14px;
            box-sizing: border-box;
            .cmp-img {
              width: 40px;
              height: 40px;
              overflow: hidden;
              margin-right: 15px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .cmp-msg {
              text-align: left;
              .cmp-desc {
                color: rgb(176, 177, 177);
              }
            }
          }
        }
      }
    }
  }
}
</style>