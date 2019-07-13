<style lang="less">
.address{
	.input{
		margin-bottom: 5px;
	}
}
</style>

<template>
	<ModConfig modName="地址" class="address">
		<h4>类型</h4>
		<a-select v-model="type" style="width: 206px">
			<a-select-option value="0">省-市-区-详细地址</a-select-option>
			<a-select-option value="1">省-市-区</a-select-option>
		</a-select>

		<h4>默认值</h4>
		<a-input 
			class="input"
			placeholder="省/自治区/直辖市"
			:style="{width: '206px'}" 
			:value="curModuleData.value.province" 
			@change="curModuleData.value.province = $event.target.value"/>

		<a-input 
			class="input"
			placeholder="市"
			:style="{width: '206px'}" 
			:value="curModuleData.value.city" 
			@change="curModuleData.value.city = $event.target.value"/>

		<a-input 
			class="input"
			placeholder="区/县"
			:style="{width: '206px'}" 
			:value="curModuleData.value.district" 
			@change="curModuleData.value.district = $event.target.value"/>

		<a-input 
			v-if="type == 0"
			class="input"
			placeholder="详细地址"
			:style="{width: '206px'}" 
			:value="curModuleData.value.details" 
			@change="curModuleData.value.details = $event.target.value"/>
	</ModConfig>
</template>

<script>
	import curModuleData from "@mixin/curModuleData";
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "LineTextConfig",
		computed: {
			type: {
				get() {
					return this.curModuleData.type + '';
				},
				set(val) {
					this.curModuleData.type = +val;
				}
			}		
		},
		mixins: [curModuleData],
		watch: {
			type(val) {
				this.curModuleData.type = +val;
				if (val === '1') this.curModuleData.value.details = '';
			}
		},
		beforeUpdate() {
			this.type = this.curModuleData.type + '';
		},
		components: {
			ModConfig
		}
	};
</script>
