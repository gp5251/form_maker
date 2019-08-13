<style lang="less">
	.previewForm {
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 0;
		padding-bottom: 20px;
		background-color: rgba(0, 0, 0, .2);
		z-index: 9999;

		.title{
			text-align: center;
			line-height: 30px;
			font-size: 16px;
		}

		.bn{
			padding-top: 50px;
			text-align: center;

			.createBns button{
				margin: 0 20px;
			}

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
		<!-- <template v-slot:header v-if="modules.length">
			<h3 class="title">预览表单: {{ form.name }}</h3>
		</template> -->

		<template v-slot:loading>
			<h3 class="tip">没有数据</h3>
		</template>

		<template v-slot:footer v-if="modules.length">
			<div class="bn">
				<div v-if="type === 'create'" class="createBns">
					<a-button type="primary" @click="$parent.showPreview = false">取消预览</a-button>

					<a-button 
						v-if="type === 'create'"
						class="submit" type="primary" @click="createForm">创建此表单</a-button>
				</div>

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
		props: {
			type: String
		},
		computed: {
			modules() {
				return this.form.modules
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
				this.$router.replace('/list')
			},
			addForm(form) {
				let { formList } = this.$store.state;
				this.$store.commit('updateFormList', [...formList, form])
			}
		},
		components: {
			FormBase
		}
	};

</script>