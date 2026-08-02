<template>
	<!--骨架（HTML）-->
	<view>
		<div id="mine-div">
			<navigator url="/pages/tabbar/mine/login?massage=信息&age=数字">
			    <button id="mine-button">登录</button>
			  </navigator>
			  <button @click="remove">退出</button>
		</div>
	</view>
	
</template>

<script>
import { ref } from 'vue';

	//逻辑（JavaScript）
	export default {
		data() {
			return {

			}
		},
		methods: {
			remove(){
				uni.showModal({
					title:"是否删除？"
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	/*样式（CSS）*/
	#mine-button{
		background-color: #666666;
		width:100px;
		height: 50px;
	}
	

</style>
