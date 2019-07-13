<style scoped lang="less"></style>

<template>
	<Mod class="lineText">
		<a-input 
			:style="{width: '300px'}"
			:value="value" 
			@blur="validate"
			@change="updateValue"/>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "LineText",
		mixins: [modbase],
		methods: {
			updateValue(e) {
				this.$emit('update:value', e.target.value)
			}
		},
		props: {
			value: {
				type: String,
				default() {
					return "";
				}
			}
		}
	};
</script>
