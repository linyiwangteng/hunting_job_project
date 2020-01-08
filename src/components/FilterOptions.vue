<template>
  <div class="filter-container">
    <div class="item-opt">
      <span class="opt-name">城市：</span>
      <ul>
        <li :class="selectedCityId === -1? 'active':''" @click="selectedCity(-1)">全部</li>
        <li v-for="(opt) in hotCities" 
            :key="opt.id" 
            :class="selectedCityId === opt.id ? 'active':''"
            @click="selectedCity(opt.id)">{{opt.name}}</li>
      </ul>
    </div>
    <div class="item-opt">
      <span class="opt-name">区域：</span>
      <ul>
        <li :class="selectedZoneId === -1 ? 'active':''" @click="selectedZone(-1)">全部</li>
        <li v-for="(opt) in selectZone" 
            :key="opt.id" 
            :class="selectedZoneId === opt.id ? 'active':''"
            @click="selectedZone(opt.id)">{{opt.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api';
export default {
  props: {
    options:{
      type: Array,
      default:()=>{
        return []
      }
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
      },
      hotCities:[],
      selectZone:[],
      selectedCityId: -1,
      selectedZoneId:-1,
    }
  },
  mounted(){
    api.zoneList({
      parentCode:'230000000000'
    }).then(res=>{
      this.hotCities = res.data;
      this.selectZone = this.hotCities[0].childList;
      // this.selectedCityId = this.hotCities[0].id;
      // this.selectedZoneId = this.hotCities[0].childList[0].id;
       this.$emit('requestList',this.selectedCityId,this.selectedZoneId);
    })
  },
  methods: {
    selectedCity(cityId){
      if(cityId === -1){
        this.selectedCityId = -1;
        this.selectedZoneId = -1;
      }else{
        this.selectedCityId = cityId;
        this.selectZone = this.hotCities.filter(item=>{
          return item.id ===  cityId;
        })[0].childList;
        this.selectedZoneId = -1;
        // this.selectedZoneId = this.selectZone[0].id;
      }
      
      this.$emit('requestList',this.selectedCityId,this.selectedZoneId);
    },
    selectedZone(zoneId){
      if(zoneId === -1){
        this.selectedZoneId = -1;
      }else{
        this.selectedZoneId = this.selectZone.filter(item=>{
          return item.id === zoneId
        })[0].id;
      }
      
      this.$emit('requestList',this.selectedCityId,this.selectedZoneId)
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