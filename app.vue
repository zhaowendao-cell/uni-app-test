<template>
	<view class="example-boby">
		<view id="my_navbar"> 
		<view class="input-view">
			<image class="input-search" src="/static/search.webp" mode="aspectFit"></image>
			<input class="nav-bar-input" 
			v-model="IndexInputTitle" 
			confirm-type="search"  
			type="text" 
			:placeholder="title" />
		</view>
		</view>
		<view>
			<ul>
			<li v-for="(x,y) in titleList" :key="y">{{x}}</li>
			</ul>
			<button @click="sendClickHandle">传递</button>
		</view>
	</view>
</template>

<script>
	export default {
		//export default :向外交出一份组件配置对象
		data() {
			//函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
			return {
				message:"自定义事件-数据传输",
				IndexInputTitle:"",
			}
		},
		props:{
			title:{
				type:String,
				default:""
			},
			titleList:{
				type:Array,
				//数组与对象必须使用函数返回
				default:function(){
					return []
				}
			},
		},
		methods: {
			//methods:自定义函数
			sendClickHandle(){
				this.$emit("onEvent",this.message)
			}
		},
	}
</script>

<style lang="scss">
.input-view{
	display: flex;
	flex-direction: row;
	flex: 1;
	background-color: #f8f8f8;
	height: 30px;
	border-radius: 15px;
	padding: 0 10px;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: 30px;
}
.input-search {
  width: 44rpx;
  height: 44rpx;
  margin-right: 8rpx;
}
.nav-bar-input{
	height: 30px;
	line-height:100px;
	width: 570rpx;
	padding: 50 5px;
	font-size: 28rpx;
	background-color: #f8f8f8;
}
.example-boby{
	padding: 0;
}
#my_navbar{
	height: 88rpx;
	box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.08);
	padding-top: var(--status-bar-height);
	position: static;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	background-color: #ffffff;
}
</style>
