<style lang="less">
	.address {
		.upper {
			display: flex;

			& + .formItem {
				margin-top: 5px;
			}
		}
	}
</style>

<template>
	<Mod class="address">
		<div class="formItem upper">
			<a-input
				:value="value.province"
				@change="value.province = $event.target.value"
				placeholder="省/自治区/直辖市"
			/>
			<a-input :value="value.city" @change="value.city = $event.target.value" placeholder="市" />
			<a-input
				:value="value.district"
				@change="value.district = $event.target.value"
				placeholder="区/县"
			/>
		</div>
		<div class="formItem" v-show="type===0">
			<a-input
				:value="value.details"
				@change="value.details = $event.target.value"
				placeholder="详细地址"
			/>
		</div>
	</Mod>
</template>

<script>
	import modbase from "@mixin/modbase";

	export default {
		name: "Address",
		mixins: [modbase],
		props: {
			value: {
				type: Object,
				default() {
					return {
						province: "",
						city: "",
						district: "",
						details: ""
					};
				}
			},
			type: {
				type: Number,
				default: 0
			}
		},
		methods: {
			validate() {
				if (this.required && 
					(this.value.province.length === 0 ||
					this.value.city.length === 0 ||
					this.value.district.length === 0 ||
					this.type === 0 && this.value.details.length === 0)) {
					this.error = ["此项为必填"];
				} else {
					this.error = [];
				}

				return this.error.length === 0;
			}
		}
	};
</script>
