<style scoped lang="less">
	.configMod {
		padding: 5px;
		font-size: 12px;

		h4{
			font-size: 12px;
			padding: 15px 0 0;
			line-height: 20px;
		}
	}
	.mName {
		border-radius: 3px;
		background-color: #fff;
		padding: 2px 5px;
		float: right;
	}
</style>

<template>
	<div class="configMod">
		<span class="mName">{{ modName }}</span>
		<h4>标题</h4>
		<a-input v-model="curModuleData.title"/>

		<h4>描述信息</h4>
		<a-input v-model="curModuleData.tip"/>

		<slot></slot>

		<div v-if="!excludeRequire">
			<h4>校验</h4>
			<a-checkbox :checked="curModuleData.required" @change="onChange">必填</a-checkbox>
		</div>

		<slot name="require"></slot>
	</div>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";

	export default {
		name: "ModConfig",
		mixins: [curModuleData],
		props: {
			modName: {
				type: String,
				default: 'module name'
			},
			excludeRequire: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onChange(e) {
				this.curModuleData.required = e.target.checked;
				this.$forceUpdate() // 某些时候不刷新
			}
		}
	};
</script>
