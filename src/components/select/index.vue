<template>
	<Mod class="select">
		<a-select :value="value" style="width: 200px" @change="onChange">
			<a-select-option v-for="(item, index) in list" :value="index" :key="index">{{ item.txt }}</a-select-option>
		</a-select>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Select",
		mixins: [modbase],
		methods: {
			onChange(v) {
				this.error = [];
				this.$emit('update:value', v)
			}
		},
		props: {
			list: {
				type: Array,
				default() {
					return [];
				}
			},

			value: {
				type: [Number, String],
				default() {
					return '';
				}
			}
		}
	};
</script>
