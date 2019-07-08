<style></style>

<template>
	<ModConfig modName="分割线" excludeRequire>
		<h4>线形</h4>

		<select v-model="lineType">
			<option value="0">无线框</option>
			<option value="1">虚线</option>
			<option value="2">细线</option>
			<option value="3">粗线</option>
		</select>
	</ModConfig>
</template>

<script>
	import curModuleData from '@mixin/curModuleData';
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "SeparatorConfig",
		mixins: [curModuleData],
		computed: {
			lineType: {
				get() {
					return this.curModuleData.type + '';
				},
				set(val) {
					this.curModuleData.type = +val;
				}
			}
		},
		components: {
			ModConfig
		}
	};
</script>
