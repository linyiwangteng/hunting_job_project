<template>
  <div class="filter-container">
    <div class="item-opt">
      <span class="opt-name">城市：</span>
      <ul>
        <li v-for="(opt) in hotCities" 
            :key="opt.id" 
            :class="selectedCityId === opt.id ? 'active':''"
            @click="selectedCity(opt.id)">{{opt.name}}</li>
      </ul>
    </div>
    <div class="item-opt">
      <span class="opt-name">区域：</span>
      <ul>
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
      },
      hotCities:[],
      selectZone:[],
      selectedCityId: 0,
      selectedZoneId:0
    }
  },
  mounted(){
    api.zoneList({
      parentCode:'230000000000'
    }).then(res=>{
      this.hotCities = res.data;
      this.selectZone = this.hotCities[0].childList;
      this.selectedCityId = this.hotCities[0].id;
      this.selectedZoneId = this.hotCities[0].childList[0].id;

       this.$emit('requestList',this.selectedZoneId,this.selectedZoneId);
    })
  },
  methods: {
    selectedCity(cityId){
      this.selectedCityId = cityId;
      this.selectZone = this.hotCities.filter(item=>{
        return item.id ===  cityId;
      })[0].childList;
      this.selectedZoneId = this.selectZone[0].id;

      this.$emit('requestList',this.selectedZoneId,this.selectedZoneId);
    },
    selectedZone(zoneId){
      this.selectedZoneId = this.selectZone.filter(item=>{
        return item.id === zoneId
      })[0].id;
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