<template>
	<ModConfig modName="单行文本">
		<h4>默认值</h4>
		<a-input :style="{width: '206px'}" :value="curModuleData.value" @change="updateValue"/>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "LineTextConfig",
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
