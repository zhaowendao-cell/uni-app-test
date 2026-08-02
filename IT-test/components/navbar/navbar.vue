<template>
	<view class="example-boby">
			<view class="input-view">
				<image class="input-search" src="/static/search.webp" mode="aspectFit"></image>
				<input class="nav-bar-input" 
				v-model.lazy.trim="IndexInputTitle" 
				confirm-type="search"  
				type="text" 
				:placeholder="title" />
			</view>
		<view>
			<ul>
				<li v-for="(x,y) in titleList" :key="y">{{x}}</li>
			</ul>
			<button @click="sendClickHandle">传递</button>
			<p>{{IndexInputTitle}}</p>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			message: "自定义事件-数据传输",
			IndexInputTitle: "",
		}
	},
	props: {
		title: {
			type: String,
			default: ""
		},
		titleList: {
			type: Array,
			default() {
				return []
			}
		},
	},
	methods: {
		sendClickHandle() {
			this.$emit("onEvent", this.message)
		},
	},
}
</script>

<style scoped lang="scss">
.example-boby {
	padding: var(--status-bar-height) 30rpx 0 30rpx;
	height: 88rpx;
	background: #fff;
	box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.08);
	align-items: center;
}
.input-view {
	display: flex;
	flex-direction: row;
	flex: 1;
	background-color: #f8f8f8;
	height: 60rpx;
	border-radius: 30rpx;
	padding: 0 10rpx;
	flex-wrap: nowrap;
	margin: 7rpx 0;
	align-items: center;
}
.input-search {
	width: 44rpx;
	height: 44rpx;
	margin-right: 8rpx;
}
.nav-bar-input {
	flex: 1;
	height: 60rpx;
	font-size: 28rpx;
	background-color: transparent;
	border: none;
	outline: none;
}
</style>