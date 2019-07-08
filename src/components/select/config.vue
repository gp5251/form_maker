<template>
	<ModConfig modName="下拉框">
		<Selections :curModuleData="curModuleData" /> 
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";
	import Selections from "@commonComponents/selections";

	export default {
		name: "SelectConfig",
		mixins: [curModuleData],
		components: {
			Selections,
			ModConfig
		}
	};
</script>
