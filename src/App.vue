<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "App"
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	ul, ol{
		list-style: none;
	}
	#app {
		font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
</style>
