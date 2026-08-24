<template>
	<view class="common-title">
		
		<view class="title">公共标题</view>
		
		<view class="more">更多</view>
		
	</view>
</template>

<script>
	export default {
		name:"common-title",
		onLoad(){
			console.log("common-title：页面加载完成")
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.common-title{
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