<style lang="less">
	.configBar {
		width: 220px;
		border-left: 1px solid #ccc;
		padding-left: 2px;
		overflow-y: auto;

		&:empty{
			position: relative;

			&::after{
				content: '请选择组件启用编辑';
				font-size: 14px;
				letter-spacing: 1px;
				line-height: 20px;
				text-align: center;
				white-space: nowrap;

				position: absolute;
				left: 50%;
				top: 30%;
				transform: translateX(-50%);
				color: #999;
			}
		}

		h3 {
			font-size: 14px;
			padding-bottom: 12px;
		}
	}
</style>

<template>
	<div class="configBar">
		<component :is="curModuleName" v-if="curIndex > -1" />
	</div>
</template>

<script>
	import { getConfigModules } from "@utils";

	export default {
		name: "ConfigBar",
		computed: {
			curModuleData(){
				return this.$parent.curModuleData
			},
			curModuleName() {
				return this.curIndex > -1 ? this.curModuleData.name + "Config" : "NotFound";
			},
			curIndex(){
				return this.$parent.curIndex
			}
		},
		components: {
			...getConfigModules(),
			NotFound: {
				render(h) {
					return h("div", "未找到组件");
				}
			}
		}
	};
</script>
