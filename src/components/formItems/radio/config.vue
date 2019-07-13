<style></style>

<template>
	<ModConfig modName="单选按钮组">
		<Selections :curModuleData="curModuleData" /> 

		<h4>排列方式</h4>
		<a-select v-model="type" style="width: 206px">
			<a-select-option value="0">纵向</a-select-option>
			<a-select-option value="1">横向</a-select-option>
		</a-select>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";
	import Selections from "@commonComponents/selections";

	export default {
		name: "RadioConfig",
		mixins: [curModuleData],
		computed: {
			type: {
				get() {
					return this.curModuleData.type + '';
				},
				set(val) {
					this.curModuleData.type = +val;
				}
			}
		},
		components: {
			Selections,
			ModConfig
		}
	};
</script>
