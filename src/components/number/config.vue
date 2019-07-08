<style></style>

<template>
	<ModConfig modName="数字">
		<h4>默认值</h4>
		<a-input type="number" v-model="curModuleData.value"/>

		<template v-slot:require>
			<a-checkbox :checked="curModuleData.requireInt" @change="curModuleData.requireInt = $event.target.checked">仅允许填写整数</a-checkbox>

			<br>
			<a-checkbox :checked="curModuleData.requireLimit" @change="curModuleData.requireLimit = $event.target.checked">限定数值范围</a-checkbox>

			<div v-if="curModuleData.requireLimit" class="limitation">
				<input placeholder="不限" type="number" v-model="min"/>
				- 
				<input placeholder="不限" type="number" v-model="max"/>
			</div>
		</template>
	</ModConfig>
</template>

<script>
	import curModuleData from '@mixin/curModuleData';
	import ModConfig from "@commonComponents/modConfig";

	export default {
		name: "NumberConfig",
		mixins: [curModuleData],
		// data() {
		// 	return {
		// 		limitError: false
		// 	}
		// },
		computed: {
			min: {
				get() {
					return Math.min.apply(Math, this.curModuleData.limitation);
				},
				set(val) {
					let { limitation } = this.curModuleData;
					this.curModuleData.limitation = [val || -Infinity, limitation[1]];
				}
			},
			max: {
				get() {
					return Math.max.apply(Math, this.curModuleData.limitation);
				},
				set(val) {
					let { limitation } = this.curModuleData;
					this.curModuleData.limitation = [limitation[0], val || Infinity];
				}
			}
		},
		methods: {
			// updateMin(e) {
			// 	let value = e.target.value;
			// 	// let n = value.length ? +e.target.value : '';
			// 	let { limitation } = this.curModuleData;

			// 	this.curModuleData.limitation = [value, limitation[1]];
			// },
			// updateMax(e) {
			// 	let value = e.target.value;
			// 	// let n = value.length ? +e.target.value : '';
			// 	let { limitation } = this.curModuleData;

			// 	this.curModuleData.limitation = [limitation[0], value];
			// },
			// checkLimit() {
			// 	let { limitation } = this.curModuleData;
			// 	let [ min, max ] = limitation;

			// 	this.limitError = min < max;
			// }
		},
		components: {
			ModConfig
		}
	};
</script>
