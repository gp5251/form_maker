<template>
	<Mod class="radio">
		<div class="radioItems">
			<a-radio-group :value="value" @change="onChange">
				<a-radio 
					class="radioItem" 
					:style="{display: type == 0 ? 'block' : 'inline-block'}" 
					:value="index"
					v-for="(item, index) in list" 
					:key="index"
				>{{ item.txt }}</a-radio>
			</a-radio-group>
		</div>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Radio",
		mixins: [modbase],
		methods: {
			onChange(e) {
				this.error = [];
				this.$emit('update:value', e.target.value)
			},
			validate() {
				this.error = []

				if (this.required && (this.value === -1 || this.value === '')) {
					this.error.push('此项为必填')
					return false;
				}

				return true;
			}
		},
		props: {
			value: {
				type: Number,
				default() {
					return -1;
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
