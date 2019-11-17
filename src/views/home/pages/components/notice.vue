<template>
  <div class="notice-box">
    <h1 class="notice-title">政策报告 <span class="more">更多></span></h1>
		<ul class="article-box">
			<li>
				<h2 class="article-title">关于领取2019年度全国会计专业...</h2>
				<span class="date">19-10-20</span>
			</li>
			<li>
				<h2 class="article-title">关于领取2019年度全国会计专业...</h2>
				<span class="date">19-10-20</span>
			</li>
		</ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
	@import "~@/assets/variable.less";
	ul,li{
		position: relative;
		padding: 0;
		margin: 0;
	}
	.notice-box{
		color: #000000;
		padding: 0 23px;
		.notice-title{
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 42px;
			font-size: 18px;
			color: @maincolor;
			padding-left: 20px;
			text-align: left;
			margin-bottom: 0;
			&::before{
				content:'';
				position: absolute;
				top: 14px;
				left: 0;
				width: 14px;
				height: 14px;
				background: url('../../img/right_point.png') no-repeat center;
				background-size: 100% auto;
			}
		}
		.more{
			position: absolute;
			font-size: 14px;
			color: #000000;
			right: 0;
		}
		.article-box{
			width: 100%;
			height: 305px;
			overflow: hidden;
			li{
				display: flex;
				align-content: center;
				justify-content: flex-start;
			}
			.article-title{
				width: 264px;
				font-size: 15px;
				line-height: 34px;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-bottom: 0;
			}
			.date{
				position: absolute;
				right: 0;
				top: 11px;
				font-size: 12px;
				color: #a5a5a5;
			}
		}
	}
</style>