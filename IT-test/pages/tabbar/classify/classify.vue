<template>
	<view>
		<div>
			<p>ture真 false假</p>
			<h3>学习vue</h3>
			<div>{{rawhtml}}</div>
			<!-- (v-)开头的都叫做指令 -->
			<!-- 可通过改变rawhtml的值来改变展示的<div>{{rawhtml}}</div>，但是只展示为字符 -->
			<div v-html="rawhtml"></div>
			<!-- 同上一样，可改变data中的数值以同步改变，但是能识别html语句 -->
			<div :id="dividname"></div>
			<!-- (：==v-bind,让属性变为变量以在data中随时改变） -->
			<p>{{flag ? "真":"假"}}</p>
			<!--(v-if)条件性渲染，指令的返回值为真时渲染 -->
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rawhtml:"<a href='http://www.baidu.com'>百度</a>",
				dividname:1001,
				flag:false
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">

</style>
