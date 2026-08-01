<template>
	<!--骨架（HTML）-->
	<view>
		<div id="mine-div">
			<navigator url="/pages/tabbar/mine/login">
			    <button id="mine-button">登录</button>
			  </navigator>
		</div>
	</view>
	
</template>

<script>
	//逻辑（JavaScript）
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	/*样式（CSS）*/
	#mine-button{
		background-color: #666666;
		width:100px;
		height: 50px;
	}
	

</style>
