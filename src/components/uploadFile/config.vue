<style></style>

<template>
	<ModConfig modName="上传附件">
		<template v-slot:require>
			<a-checkbox :checked="curModuleData.requireOne" @change="curModuleData.requireOne = $event.target.checked">只允许上传一个文件</a-checkbox>
		</template>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "UploadFileConfig",
		mixins: [curModuleData],
		methods: { },
		components: {
			ModConfig
		}
	};
</script>
