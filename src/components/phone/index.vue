<style lang="less">
	.phone{
		.tel{
			width: 206px;
		}
	}
</style>

<template>
	<Mod class="phone">
		<a-input 
			class="tel"
			type="number"
			:value="value" 
			@blur="validate"
			@change="updateValue"/>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Phone",
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
