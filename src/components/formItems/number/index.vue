<template>
	<Mod class="number">
		<a-input-number :style="{width: '300px'}" :min="min" :max="max" :value="value" @change="onChange" @blur="validate" />
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Number",
		mixins: [modbase],
		computed: {
			min() {
				return Math.min.apply(Math, this.limitation);
			},
			max() {
				return Math.max.apply(Math, this.limitation);
			}
		},
		methods: {
			onChange(value) {
				let val;
				if (value === void 0) val = '';
				else {
					if (this.requireInt) value = parseInt(value);
					if (isNaN(value)) value = '';
					val = value + '';
				}

				this.$emit('update:value', val)
			}
		},
		props: {
			requireInt: {
				type: Boolean,
				default: false
			},

			requireLimit: {
				type: Boolean,
				default: false
			},

			value: {
				type: String,
				default() {
					return "";
				}
			},

			limitation: {
				type: Array,
				default() {
					return [-Infinity, Infinity];
				}
			}
		}
	};
</script>
