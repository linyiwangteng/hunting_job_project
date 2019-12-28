<template>
  <div class="intro-detail">
    <h1>{{introInfo.name}}</h1>
    <p>{{introInfo.description}}</p>
    <ul class="intro-img-container">
      <!-- <li v-for="(img,index) in introInfo.introImg" :key="index"><img :src="img" alt=""></li> -->
      <li><img :src="introInfo.logo" alt=""></li>
    </ul>
    <h2>{{introInfo.type}}地址</h2>
    <p>{{introInfo.address}}</p>
  </div>
</template>

<script>
export default {
  props:{
    introInfo:{
      type: Object,
      default: ()=> ({
        name:'尚德教育',
        description: '嗨学网致力成为世界一流的互联网教育服务提供商，是中国首家兼具学术研发基因与互联网基因的职业教育培训领先品牌，是目前国内最专业的新锐派远程教育平台。嗨学网的培训课程和服务范围广阔，从职业资格考试的学习培训、技能培训，到与执业相关的就业服务，用户遍及全国各地。目前，嗨学网标准化的课程体系，已成为职业培训在线教育领域的模板。',
        introImg: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658'],
        address:'黑龙江省哈尔滨×××××××××××××',
        type:'机构'
      })
    }
  }

}
</script>

<style lang="less" scope>
  .intro-detail{
    width: 1080px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background: #ffffff;
  }
  .intro-img-container{
    display: flex;
    justify-content: flex-start;
    li{
      width: 160px;
      height: 80px;
      margin-right: 20px;
      img{
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
</style>