<style></style>

<template>
	<ModConfig modName="日期时间">
		<h4>类型</h4>
		<a-select :defaultValue="curModuleData.type + ''" style="width: 206px" @change="handleChange">
			<a-select-option value="0">日期</a-select-option>
			<a-select-option value="1">日期时间</a-select-option>
		</a-select>

		<h4>默认值</h4>

		<a-date-picker
			v-if="curModuleData.value"
			:value="dpValue"
			:showTime="showTime"
			:allowClear="false"
			:format="format"
			@change="onChange"
		/>
		<a-date-picker
			v-else
			:showTime="showTime"
			:allowClear="false"
			:format="format"
			@change="onChange"
		/>

	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";
	import moment from 'moment';

	export default {
		name: "DaterConfig",
		mixins: [curModuleData],
		computed: {
			format() {
				return 'YYYY-MM-DD' + (this.showTime ?  ' HH:mm:ss' : '')
			},
			dpValue() {
				return moment(this.curModuleData.value);
			},
			showTime() {
				return this.curModuleData.type === 1
			}
		},
		methods: {
			onChange(e) {
				this.curModuleData.value = e && e.format(this.format) || '';
			},
			handleChange(value) {
				this.curModuleData.type = +value;
			}
		},
		components: {
			ModConfig
		}
	};
</script>
