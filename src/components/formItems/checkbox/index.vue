<style scoped lang="less"></style>

<template>
	<Mod class="checkbox">
		<a-checkbox-group 
			:value="value" 
			@change="onChange">
			<a-checkbox 
				:style="{display: type == 0 ? 'block' : 'inline-block', marginLeft: 0}" 
				:value="index"
				v-for="(item, index) in list" 
				:key="index"
			>{{ item.txt }}</a-checkbox>
		</a-checkbox-group>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Checkbox",
		mixins: [modbase],
		methods: {
			onChange(v) {
				this.$emit('update:value', v)
			}
		},
		props: {
			value: {
				type: Array,
				default() {
					return [];
				}
			},

			type: {
				type: Number,
				default() {
					return 0;
				}
			},

			list: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	};
</script>
