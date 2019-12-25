<template>
  <div class="filter-container">
      <div v-for="(item,index) in options" :key="index" class="item-opt">
        <span class="opt-name">{{item.name}}：</span>
        <ul>
          <li v-for="(opt,index1) in item.opts" 
              :key="index1" 
              :class="(item.key === 'address' && index1 === selectedopt.address) || (item.key === 'course' && index1 === selectedopt.course) ? 'active':''"
              @click="selected(opt,item.key,index1)">{{opt}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    options:{
      type: Array,
      default:[]
    }
  },
  data(){
    return {
      selectedopt:{
        address:0,
        course: 0
      },
      selectedContent:{
        address:'全国',
        course:'不限'
      }
    }
  },
  methods: {
    selected(name,type,opt){
      if(type === 'address') {
        this.selectedopt.address = opt;
        this.selectedContent.address = name;
      }else if(type === 'course'){
        this.selectedopt.course = opt;
        this.selectedContent.course = name;
      }
      this.$emit('requestList',this.selectedContent);
    }
  }
}
</script>

<style lang="less" scope>
  .filter-container{
    padding: 20px;
    margin-bottom: 40px;
    .item-opt{
      display: flex;
      .opt-name{
        width: 95px;
        flex: 0 0 95px;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          padding: 0 4px;
          margin-right: 10px;
          cursor: pointer;
          &.active{
            color: #ffffff;
            background: #dc0101;
          }
        }
      }
    }
  }
</style>