<template>
	<view>
	<Navbar 
	:title="title" 
	:titleList="titleList" 
	@onEvent="getDatHandle" />
	<p>{{message}}</p>
	</view>



</template>

<script>
	import Navbar from "@/components/navbar/navbar.vue"
	//import axios from "axios"
	
	export default {
		data() {
			return {
				//函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
				//数组与对象必须使用函数返回
				title:"震惊，某明星竟出轨",
				titleList:["专升本上岸干货","贵阳游玩指南","故事大会征集活动"],
				message:""
			}
		},
		//methods：放可被触发执行的函数，用来操作 data 里的数据
		methods:{
			getDatHandle(onEvent_data){
				console.log(onEvent_data);
				this.message=onEvent_data;
			}
		},
		//components:应用的组件
		components:{
			Navbar:Navbar,
		}
	}
</script>

<style >

</style>
