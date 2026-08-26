<template>
	<view class="CommonTitle">
		
		<view class="title">公共标题</view>
		
		<view class="more">更多</view>
		
	</view>
</template>

<script>
	export default {
		name:"CommonTitle",
		mounted(){
		console.log("CommonTitle组件挂载完成")
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.CommonTitle{
	display: flex;
	height: 30rpx ;
	.title{
		width: 200rpx;
	}
	.more{
		width: 100rpx;
	}

}
</style>