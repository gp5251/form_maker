<style></style>

<template>
	<ModConfig modName="多行文本">
		<h4>默认值</h4>
		<a-textarea :style="{width: '206px'}" :value="curModuleData.value" :autosize="{ minRows: 2, maxRows: 6 }" @change="updateValue"/>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "MultilineTextConfig",
		mixins: [curModuleData],
		methods: {
			updateValue(e) {
				this.curModuleData.value = e.target.value;
			}
		},
		components: {
			ModConfig
		}
	};
</script>
