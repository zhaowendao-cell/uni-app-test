<template>
<view>
	
	<view>
	<Navbar 
	:title="title" 
	@onEvent="getDatHandle"
	/>
	</view>
	
	<view id="banner">
		<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)"
		indicator-active-color="#fff" autoplay="false"  interval="5000" 
		duration="500" circular="false">
		
			<swiper-item>
				<image src="@/static/picture/banner1.jpeg" mode="aspectFill"></image>
			</swiper-item>
			
			<swiper-item>
				<image src="@/static/picture/banner2.jpeg" mode="aspectFill"></image>
			</swiper-item>
			
			<swiper-item>
				<image src="@/static/picture/banner3.jpeg" mode="aspectFill"></image>
			</swiper-item>
			
			<swiper-item>
				<image src="@/static/picture/banner4.jpeg" mode="aspectFill"></image>
			</swiper-item>
			
		</swiper>
	</view>
	
	
	<view class="announcement">
		
		<view class="announcement-laft-ui">
			<image class="announcement-image" src="@/static/icon/Announcement.png"></image>
			<text class="announcement-text">公告:</text>
		</view>
		
		<view class="announcement-center">
			<swiper autoplay="false" interval="3000" duration="700" circular="false" vertical>
				<swiper-item>实例文字1</swiper-item>
				<swiper-item>实例文字2</swiper-item>
			</swiper>
		</view>
		
		<view class="announcement-right-ui">
			<image class="announcement-image" src="@/static/icon/chevron-right.png"></image>
		</view>
		
	</view>
	
	
	<view class="poetry" v-for="item in titleList" :key="item?.id" >
		<view v-if="item">
		<view class="content">出处：{{item.from}}</view>
		<view class="content">作者：{{item.from_who}}</view>
		<view class="comment">{{item.hitokoto}}</view>
		</view>
	</view>
	
	<p id="p-message">{{message}}</p>
</view>


</template>

<script>
	import Navbar from "@/components/navbar/navbar.vue"
	import axios from "axios"
	import {ref} from "vue"
	import {onLoad} from "@dcloudio/uni-app"
	//onLoad：页面加载完成触发，参数为上一个页面传递的信息
	
	
	uni.showToast({
		title:"支付成功"
	})
	
	export default {
		data() {
			return {
				//函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
				//数组与对象必须使用函数返回
				
				title:"震惊，某明星竟出轨",
				titleList:[],
				message:"",
			}
		},
		onLoad(){
			console.log("页面加载完成")
			this.request()
		},
		//methods：放可被触发执行的函数，用来操作 data 里的数据
		methods:{
			
			getDatHandle(onEvent_data){
				console.log(onEvent_data);
				this.message=onEvent_data;
			},
			request(){
				uni.request({
					method:"GET",
					url:"https://v1.hitokoto.cn/",
					timeout:1000,
					header:{
						token:"",
						"Content-Type":"application/json"
					}, 
					success:(res)=>{
						console.log(res.data);
						this.titleList=[res.data]
					},
					fail:err=>{
						console.log("超时");
						console.log(err);
						this.request()
					}

				})
			}
			
		},
		
		onPageScroll(e) {
			console.log('滚动距离：', e.scrollTop) 
		},
		

		
		//components:应用的组件
		components:{
			Navbar:Navbar,
		},
		
	}
</script>

<style lang="scss" scoped>
.poetry{
	padding: 30rpx;
	border-bottom: 1px solid #cfcfcf;
	.comment{
		font-size: 36rpx;
		margin-bottom: 10px;
		}
	.content{
		font-size: 28rpx;
		color: #666;
		}
}
	
	
.announcement{
	display: flex;
	width: 690rpx;
	height: 80rpx;
	background: #f2f2f2;
	margin: 0 auto;
	border-radius: 40rpx;
	.announcement-laft-ui{
		width: 140rpx;
		.announcement-image{
			width: 30rpx;
			height: 30rpx;
		}
		.announcement-text{
				top: 20rpx;
		}
	}
		
	.announcement-center{
		width: 100%;
		height: 60rpx;
		swiper-item{
			width: 100%;
			height: 100%;
			align-items: center; 
			}
		}

	.announcement-right-ui{
		width: 70rpx;
		.announcement-image{
			width: 30rpx;
			height: 30rpx;
			}
		}
		
}
	
	#banner{
		width: 750rpx;
		padding: 3rpx 0rpx ;
		swiper{
			width: 750rpx;
			height: 500rpx;
			swiper-item{
				padding: 0 30rpx ;
				box-sizing: border-box;
				image{
					width: 100%;
					height: calc(100% - 60rpx);
					margin: 30rpx auto;
					border-radius: 15rpx;
					}
				}
			}
		}
		


</style>
