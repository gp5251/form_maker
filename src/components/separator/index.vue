<style>
	.separator {
		padding: 0 5px;
	}
</style>

<template>
	<Mod class="separator">
		<template v-slot:underTitle>
			<div :style="lineStyle"></div>
		</template>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Separator",
		mixins: [modbase],
		computed: {
			lineStyle() {
				return [
					{borderBottom: 'none'}, 
					{borderBottom: '1px dashed #999'}, 
					{borderBottom: '1px solid #999'}, 
					{borderBottom: '3px solid #999'}
				][this.type]
			}
		},
		props: {
			type: {
				type: Number,
				default() {
					return 0;
				}
			}
		}
	};
</script>
