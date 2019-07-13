<style></style>

<template>
	<ModConfig modName="上传图片">
		<template v-slot:require>
			<a-checkbox :checked="curModuleData.requireOne" @change="curModuleData.requireOne = $event.target.checked">只允许上传一张图片</a-checkbox>
<!-- 
			<br>
			<a-checkbox :checked="curModuleData.requireCamera" @change="curModuleData.requireCamera = $event.target.checked">只允许拍照上传</a-checkbox> -->
		</template>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "UploadImageConfig",
		mixins: [curModuleData],
		methods: { },
		components: {
			ModConfig
		}
	};
</script>
