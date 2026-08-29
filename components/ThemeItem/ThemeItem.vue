<template>
	<view class="ThemeItem">
		<view v-for="(item,index) in arr" :key="index">
		<navigator class="box" url="">
			<image class="pic" :src="item.src" mode="aspectFill"></image>
			<view class="mask">{{item.title}}</view>
			<view class="tab">{{item.updateText}}</view>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			console.log("页面加载完成")
			},
		name:"ThemeItem",
		data() {
			return {
			};
		},
		props:{
			arr: {
			    type: Array,
			    default(){
					return[]
				  }
			    }
		},
	}
</script>

<style lang="scss" scoped>
.ThemeItem{
	margin-top: 10rpx;
	display: grid;
	gap: 15rpx;
	grid-template-columns: repeat(3,1fr);
	.box{
		display: inline-block;
		width: 210rpx;
		height: 350rpx;
		position: relative;
		margin-right: 10rpx;
		.pic{
			width: 100%;
			height: 100%;
			//圆角
			border-radius: 10rpx;
		}
		.mask{
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			//不透明度及背景颜色
			background: rgba(0,0,0,0.1);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			
			//磨砂效果
			backdrop-filter: blur(10rpx);
			
			//圆角
			border-radius: 10rpx;
			
			//文字大小
			font-weight: 500;
			
		}
		.tab{
			position: absolute;
			top: 0rpx;
			color: #fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			background: rgba(250,129,90,0.8);
			backdrop-filter: blur(10rpx);
			
			border-radius: 0 0 20rpx 0; 
			//放缩
			transform: scale(0.8);
			transform-origin: left top;
		}
	}
}
</style>