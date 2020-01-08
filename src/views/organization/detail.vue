<template>
  <div>
    <intro :introInfo = 'schoolInfo' :id="schoolInfo.schoolId" :type="2"></intro>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import OnlineApply from '@/components/OnlineApply.vue';
import {Select} from 'ant-design-vue';
import api from '@/api';
export default {
  data(){
    return {
      schoolInfo:{},
      zhuanyelInfo:{},
    }
  },
  mounted(){
    this._getInfoData();
  },
  methods: {
    handleChange(){

    },
    _getInfoData(){
      let {id} = this.$route.query;
      // api.majorDetail({ id }).then(r => {
      //   if(r.code == 1){
      //     this.zhuanyelInfo = r.data;
          api.jigouDetail({id}).then(res=>{
            this.zhuanyelInfo = {
              name: res.data.name,
              description:res.data.description
            }
            this.schoolInfo = res.data;
            this.schoolInfo.typeName = '机构';
          })
        // }
      // })
      
    },
    goClassDetail(id){
      this.$router.push('/detail-class?id='+id);
    }
  },
  components: {
    Intro,
    OnlineApply,
    Select
  }
}
</script>

<style lang="less" scoped>
  .intro-content{
    width: 1080px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    .intro-left{
      // width: 872px;
      width: 726px;
      height: 816px;
      background-color: rgba(255, 255, 255, 1);
      // border: 1px solid #797979;
      padding: 20px 10px;
      .title{
        display: flex;
        justify-content: space-between;
      }
      .classList{
        padding: 20px 0;
        li{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border: 1px solid #f0f0f0;
          padding: 20px 10px;
          margin-bottom: 20px;
          cursor: pointer;
          img{
            display: block;
            width: 60px;
            height: 60px;
          }
          .classInfo{
            display: flex;
            flex-wrap: wrap;
            flex:0 0 569px;
            margin-left: 10px;
            span{
              width: 174px;
              margin-right: 15px;
              font-size: 14px;
              margin-bottom: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .class-status{
            flex: 0 0 45px;
            width: 45px;
          }
        }
      }
    }
  }
  .all-school{
    width: 345px;
    background: #ffffff;
    margin-left: 5px;
    margin-top: 10px;
    padding: 20px;
    .school-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .school-img{
        width: 146px;
        height: 40px;
        margin-bottom: 10px;
      }
    }
  }
</style>