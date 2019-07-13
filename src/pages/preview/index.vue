<style lang="less">
	.previewForm {
		padding-bottom: 20px;

		.title{
			text-align: center;
			line-height: 30px;
			font-size: 16px;
		}

		.bn{
			padding-top: 50px;
			text-align: center;

			.submit{
				width: 160px;
			}
		}

		.tip{
			text-align: center;
			padding: 120px 0 50px;
			font-size: 16px;
			line-height: 32px;
		}
	}
</style>

<template>
	<FormBase
		class="previewForm"
		:modules="modules"
		@submit="onSubmit"
		>
		<template v-slot:header v-if="modules.length">
			<h3 class="title">预览表单: {{ form.name }}</h3>
		</template>

		<template v-slot:loading>
			<h3 class="tip">没有数据</h3>
		</template>

		<template v-slot:footer v-if="modules.length">
			<div class="bn">
				<a-button 
					v-if="type === 'create'"
					class="submit" type="primary" @click="createForm">创建此表单</a-button>

				<a-button 
					v-if="type === 'edit'"
					class="submit" type="primary" @click="saveForm">保存此表单</a-button>
			</div>
		</template>
	</FormBase>
</template>

<script>
	import FormBase from '@commonComponents/formBase';
	import cloneDeep from 'lodash/cloneDeep';

	export default {
		name: "PreviewForm",
		data() {
			return {
				form: cloneDeep(this.$store.state.form)
			}
		},
		// props: {
		// 	type: {
		// 		type: String,
		// 		default: 'create'
		// 	}
		// },
		computed: {
			modules() {
				return this.form.modules
			},
			type() {
				return this.$route.params.type
			}
		},
		methods: {
			onSubmit() {
				console.log('mock submit');
			},
			createForm() {
				this.$store.commit('resetForm')
				this.addForm(this.form)
				this.$router.replace('/list')
			},
			saveForm() {
				this.$store.commit('resetForm')
				// this.addForm(this.form)
				this.$router.replace('/list')
			},
			addForm(form) {
				let { formList } = this.$store.state;
				this.$store.commit('updateFormList', [...formList, form])
			}
		},
		created(){
			console.log(this.type);
		},
		components: {
			FormBase
		}
	};

</script>