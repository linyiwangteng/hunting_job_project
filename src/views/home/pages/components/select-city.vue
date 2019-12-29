<template>
  <div class="city-box">
      <span class="city-name">热招城市</span>
			<ul class="city-list" v-if="hlj_province">
				<li class="every-area" v-for="area in hotProvince" :key="area.id">
					<span class="city">{{area.name}}</span>
					<template class="areas" v-for="(item,index) in area.childList">
						<span  :key="item.id" v-if="index < 5" class="area">
							{{item.name}}
						</span>
					</template>
					
				</li>
			</ul>
  </div>
</template>

<script>
import citydata from '@/assets/pca-code.js'
import api from '@/api/index.js'
export default {
	data(){
		return {
			hotProvince:[]
		}
	},
	computed:{
		hlj_province:function(){
			return citydata.find(item=>{
				if(item.code === '23'){
					return item
				}
			})
		}
	},
	mounted(){
		setTimeout(()=>{
			this.getZoneList();
		},200);	
		
	},
	methods: {
		getZoneList(){
			api.zoneList({
				parentCode:'230000000000'
			}).then(res=>{
				this.hotProvince = res.data;
			})
		}
	}
}
</script>

<style lang="less" scoped>
  .city-box{
		position: relative;
		padding: 27px 82px 0 140px;
		.city-name{
			position: absolute;
			top: 28px;
			left: 0;
			width: 140px;
			height: 34px;
			background:url('../../img/yuanxiao-bg.png') no-repeat center;
			background-size: 100% auto;
			font-size: 18px;
			color: #ff6700;
			text-align: center;
			line-height: 34px;
			font-weight: 500;
			border-left: 4px solid #ff6700;
			box-sizing: border-box;
		}
		.city-list{
			padding-left: 20px;
			margin-bottom: 0;
		}
		.every-area{
			position: relative;
			padding-left: 110px;
			height: 29px;
			overflow: hidden;	
		}
		.city{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 5;
			line-height: 29px;
			cursor: pointer;
		}
		.area{
			padding-right: 51px;
			line-height: 29px;
			word-break: keep-all;
			cursor: pointer;
		}
  }
</style>