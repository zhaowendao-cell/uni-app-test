<template>
	<view class="common-title">
		
		<view class="title">公共标题</view>
		
		<view class="more">更多</view>
		
	</view>
</template>

<script>
	export default {
		name:"common-title",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.common-title{
	display: flex;
	height: 30rpx;
	.title{
		width: 200rpx;
	}
	.more{
		width: 100rpx;
	}

}
</style>