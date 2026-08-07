<template>
<view>
	
	<!--搜索栏-->
	<view>
	<Navbar 
	:title="NavbarTitle" 
	@onEvent="getDatHandle"
	/>
	</view>
	
	<!--轮播图-->
	<view id="banner">
		<swiper indicator-dots 
		indicator-color="rgba(255,255,255,0.5)"
		indicator-active-color="#fff" 
		autoplay="false"  
		interval="5000" 
		duration="500" 
		circular="false">
			<swiper-item
			class="banner-box" 
			v-for="(src,index) in bannerTitle" 
			:key="index">
				<image :src="src" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
	</view>
	
	<!--公告-->
	<view class="announcement">
		
		<view class="announcement-left-ui">
			<image class="announcement-image" src="@/static/icon/Announcement.png"></image>
			<text class="announcement-text">公告:</text>
		</view>
		
		<view class="announcement-center">
			
			<swiper autoplay="false" interval="5000" 
			duration="500" circular="false" vertical disable-touch="true">
				<swiper-item 
				class="swiper-item-box" 
				v-for="(title,index) in swiperTitle" 
				:key="index"
				@click="AnnouncementTitle(title)">
				{{title}}
				</swiper-item>
			</swiper>
			
		</view>
		
		<view class="announcement-right-ui">
			<image class="announcement-image" src="@/static/icon/chevron-right.png"></image>
		</view>
		
	</view>
	
	<!--名人名言-->
	<view class="poetry" v-for="item in titleList" :key="item?.id" >
		<view v-if="item">
		<view class="content">出处：{{item.from}}</view>
		<view class="content">作者：{{item.from_who}}</view>
		<view class="comment">{{item.hitokoto}}</view>
		</view>
	</view>
	
	<!--传递按钮-->
	<p id="p-message">{{message}}</p>
	
	<!--壁纸推荐盒子-->
	<view class="select">
		<common-title></common-title>
		<view class="content">
			<scroll-view scroll-x :show-scrollbar="false">
				<view class="picture-box" v-for="(src,index) in imgArr" :key="index">
					<image :src="src" mode="aspectFill" @click="onPreview(index)"></image>
				</view>
			</scroll-view>
		
		</view>
	</view>
	
</view>


</template>

<script >
	import Navbar from "@/components/navbar/navbar.vue"
	import axios from "axios"
	import {ref} from "vue"
	import {onLoad} from "@dcloudio/uni-app"
	//onLoad：页面加载完成触发，参数为上一个页面传递的信息
	
	//弹出简短文字提示
	uni.showToast({
		title:"支付成功"
	})
	
	//ES6 模块默认导出语法，用来导出页面 / 组件配置
	export default {
		data() {
			return {
				//函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
				//数组与对象必须使用函数返回
				NavbarTitle:"更多好图来“厕纸”",
				titleList:[],
				message:"",
				imgArr : [
					'/static/picture/wallpaper1.jpg',
					'/static/picture/wallpaper2.jpg',
					'/static/picture/wallpaper3.jpg',
					'/static/picture/wallpaper4.jpg',
					'/static/picture/wallpaper5.jpg',
					'/static/picture/wallpaper6.jpg',
					'/static/picture/wallpaper7.jpg',
				],
				
				swiperTitle:[
					"实例文字1",
					"实例文字2",
					"实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3",
				],
				
				bannerTitle:[
					"/static/picture/banner1.jpeg",
					"/static/picture/banner2.jpeg",
					"/static/picture/banner3.jpeg",
					"/static/picture/banner4.jpeg"
				],
				
				retryCount: 0
			}
		},
		
		//页面生命周期，页面加载时触发
		onLoad(){
			console.log("页面加载完成")
			this.request()
		},
		
		//methods：放可被触发执行的函数，用来操作 data 里的数据
		methods:{
			
			
			//传递按钮传递函数，传递方向：navbar.vue
			getDatHandle(onEvent_data){
				console.log(onEvent_data);
				this.message=onEvent_data;
			},
			
			//网络请求
			request(){
				uni.request({
					method:"GET",
					url:"https://v1.hitokoto.cn/",
					timeout:1000,
					header:{
						token:"",
						"Content-Type":"application/json"
					}, 
					
					//服务器有返回
					success:(res)=>{
						console.log("名人名言板块："+res.statusCode);
						console.log(res)
						//console.log(res.data);
						this.titleList=[res.data]
						// 请求成功，重置重试次数
						this.retryCount = 0
					},
					//根本连不上服务器进行函数
					fail:err=>{
						this.retryCount++
						console.log("名人名言板块：超时,当前重试"+this.retryCount+"次数");
						if(this.retryCount < 3){
							this.request()
							console.log("名人名言板块：在次请求");
						}else{uni.showToast({
								title: "网络请求失败，请稍后重试",
								icon: "none"})
							console.log("名人名言板块：已重试3次，终止请求");
							// 重置计数，方便用户下拉刷新重新尝试
							this.retryCount = 0
						}
					}
				})
			},
			
			//图片放大预览
			onPreview(index){
				uni.previewImage({
					current:index,
					urls:this.imgArr,
				})
			},
			
			//点击公告打印文字
			AnnouncementTitle(title){
				console.log(title)
			},
			
			
			
		},
		
		//监视页面滚动
		onPageScroll(e) {
			console.log('滚动距离：', e.scrollTop) 
		},
		
		//监听该页面用户下拉刷新事件
		onPullDownRefresh(){
			//setTimeout(函数, 时间) → 等待时间到了再调用函数
			//setTimeout(函数(), 时间) → 立即执行函数，把结果传入定时器
			setTimeout(()=>{
				//uni.stopPullDownRefresh():停止当前页面下拉刷新
				uni.stopPullDownRefresh();
			},2000)
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
	align-items: center;
	overflow: hidden;
	.announcement-left-ui{
		display: flex;
		width: 140rpx;
		align-items: center;
		gap: 10rpx;
		padding-left: 20rpx;
		justify-content: center;
		.announcement-image{
			width: 30rpx;
			height: 30rpx;
		}
		.announcement-text{
			color: #28b389;
			font-weight: 600;
			font-size: 28rpx;
		}
	}
		
	.announcement-center{
		flex: 1;
		width: 200rpx;
		height: 80rpx;
		line-height: 85rpx;
		swiper-item{
			font-size: 30rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			}
	}

	.announcement-right-ui{
		width: 70rpx;
		display: flex;
		justify-content: center;
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
		

.select{
	padding-top: 50rpx;
	.content{
		width: 720rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		scroll-view{
			white-space: nowrap;
			.picture-box{
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
			.picture-box:last-child{margin-right: 30rpx;}
		}
	}
}
		


</style>
