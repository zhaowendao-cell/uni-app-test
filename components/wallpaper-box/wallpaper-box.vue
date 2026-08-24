<template>
	<view class="wallpaper-box">
		<view :class="name">
			<common-title></common-title>
			<view class="content">
				<scroll-view scroll-x :show-scrollbar="false">
					<view class="all-picture-box" v-for="(src,index) in arr" :key="index">
						<image :src="src" mode="aspectFill" @click="onPreview(index)"></image>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"wallpaper-box",
		props:{
			name: {
			      type: String,
			      default: ''
			    },
			    arr: {
			      type: Array,
			      default(){
					  return[]
				  }
			    }
			  },
			  
			  methods: {
			    onPreview(index){
			    	console.log(index)
			    	uni.previewImage({
			    		current:index,
			    		urls:this.arr,
			    	})
			    },
			  },
			  
			  onLoad(){
			  	console.log("wallpaper-box：页面加载完成")
			  },
		
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
.wallpaper-box{
	padding-top: 50rpx;
	.content{
		width: 720rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		scroll-view{
			white-space: nowrap;
			.all-picture-box{
				width: 200rpx;
				height: 430rpx;
				display: inline-block;
				margin-right: 15rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
			.all-picture-box:last-child{margin-right: 30rpx;}
		}
	}
}
</style>