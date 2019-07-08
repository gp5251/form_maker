<style lang="less" scoped>
	.showForm {
		.title{
			text-align: center;
			line-height: 30px;
			font-size: 16px;
		}
	}
</style>

<template>
	<FormBase
		class="showForm"
		:modules="modules"
		>
		<template v-slot:header v-if="this.modules.length">
			<h3 class="title">表单名</h3>
		</template>
	</FormBase>
</template>

<script>
	import FormBase from '@commonComponents/formBase';
	import cloneDeep from 'lodash/cloneDeep';

	export default {
		name: "ShowForm",
		props: ['id'],
		data(){
			return {
				modules: cloneDeep(this.$store.state.formList[this.id] || [])
			}
		},
		methods: {
			onSubmit() {
				console.log('submit');
			}
		},
		components: {
			FormBase
		}
	};
</script>