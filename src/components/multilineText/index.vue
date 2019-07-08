<template>
	<Mod class="multilineText">
		<a-textarea 
			:style="{width: '300px'}"
			:value="value" 
			:autosize="{ minRows: 2, maxRows: 6 }"
			@change="updateValue"
			@blur="validate"
			/>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "MultilineText",
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
