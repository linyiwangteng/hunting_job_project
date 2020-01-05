<template>
  <div class="school-recommend">
    <h2>
      <span class="recommend-title" :style="updateStyle">{{recommendTitle}}</span>
      <span class="recommend-more" @click="goSchool(recommendTitle == '名校热推'?1:2)">更多></span>
    </h2>
    <ul class="recommend-list">
      <li v-for="item in organizationList" :key="item.id" @click="goDetail(item.id)">
          <slot name="default" :item="item">
            <div class="school-logo">
              <img :src="item.logo || placehoderListImg()" alt="" class="logo-img">
            </div>
            <!-- <p>成立于****年  ****   ****<br/>招聘*****人</p> -->
          </slot>
      </li>
    </ul>
  </div>
</template>

<script>
import {placeholderImgMixin} from '@/mixins/placeholderImg.js'
export default {
  mixins: [placeholderImgMixin],
  props: {
    recommendTitle:{
      type: String,
      default:''
    },
    updateStyle:{
      type:String,
      default:''
    },
    organizationList:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    goDetail(id){
      this.$router.push(`/organization?id=${id}`);
    },
    goSchool(t){
      location.href = t == 1 ?'school.html' : 'organization.html';
    },
  }
}
</script>

<style lang="less" scoped>
.school-recommend{
  h2{
    position: relative;
    padding-top: 20px;
    margin-bottom: 0;
    .recommend-title{
      display: block;
      width: 136px;
      height: 34px;
      font-size: 18px;
      text-align: center;
      font-weight: 500;
      color: #ff6700;
      line-height: 34px;
      background: url("../../img/yuanxiao-bg.png") no-repeat right center;
      background-size: 100% 34px;
      border-left:4px solid #ff6700;
    }
    .recommend-more{
      position: absolute;
      right: 0px;
      top: 26px;
      font-size: 14px;
      color: #000000;
      cursor: pointer;
    }
  }
}
.recommend-list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:0;
  margin: 0;
  li{
    width: 384px;
    // height: 194px; 
    border: 1px solid #ebefee;
    margin-top: 16px;
    padding:  0 18px;
    &:hover{
      box-shadow: 0 0 0 4px rgba(0,0,0,0.02);
    }
    .school-logo{
      width: 348px;
      height: 121px;
      // border-bottom: 1px dashed #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo-img{
        width: 345px;
        height: 103px;
      }
    }
    p{
      padding-left: 94px;
      padding-top: 10px;
      font-size: 15px;
      color: #000000;
      font-weight: 500;
      margin-bottom: 0;
      line-height: 1.8;
    }
  }
}
</style>