<style></style>

<template>
	<Mod class="dater">
			<a-date-picker
				v-if="value"
				:showTime="showTime"
				:value="dpValue"
				:allowClear="false"
				:format="format"
				@change="onChange"
				@blur="validate"
			/>
			<a-date-picker
				v-else
				:showTime="showTime"
				:allowClear="false"
				:format="format"
				@change="onChange"
				@blur="validate"
			/>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';
	import moment from 'moment';

	export default {
		name: "Dater",
		mixins: [modbase],
		computed: {
			format() {
				return 'YYYY-MM-DD' + (this.showTime ?  ' HH:mm:ss' : '')
			},
			dpValue() {
				return moment(this.value);
			},
			showTime() {
				return this.type === 1
			}
		},
		methods: {
			onChange(e) {
				this.$emit('update:value', e.format(this.format))
			}
		},
		props: {
			value: {
				type: String,
				default() {
					return "";
				}
			},

			type: {
				type: Number,
				default: 0
			}
		}
	};
</script>
