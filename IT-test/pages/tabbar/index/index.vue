<template>
<view>
	<view>
	<Navbar 
	:title="title" 
	@onEvent="getDatHandle"
	/>
	</view>
	<view class="row" v-for="item in titleList" :key="item?.id" >
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

<style lang="scss">
.row{
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

</style>
