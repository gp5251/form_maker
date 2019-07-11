<template>
	<div id="formCreator">
		<div class="banner">
			<h3 class="title">表单制作工具: </h3>

			<a-input 
				class="fName"
				:style="{width: '300px'}"
				:value="form.name" 
				@change="form.name = $event.target.value"/>

			<div class="bn">
				<a-button :disabled="!formList.length" type="primary" @click="toFormList">表单列表</a-button>
				<a-button :disabled="!modules.length" type="primary" @click="preview">预览表单</a-button>
			</div>
		</div>
		<div class="content">
			<Sidebar/>
			<Preview/>
			<ConfigBar/>
		</div>
	</div>
</template>

<script>
	import Sidebar from "./sidebar.vue";
	import Preview from "./preview.vue";
	import ConfigBar from "./configBar.vue";

	export default {
		name: "CreateForm",
		data() {
			return {
				form: this.$store.state.form,
				draggingName: '',
				curIndex: -1
			}
		},
		computed: {
			curModuleData() {
				return this.form.modules[this.curIndex];
			},
			modules() {
				return this.form.modules;
			},
			formList() {
				return this.$store.state.formList;
			}
		},
		methods: {
			preview() {
				this.$router.push({
					path: '/previewForm'
				})
			},
			toFormList() {
				this.$router.push({
					path: '/formList'
				})
			}
		},
		components: {
			Sidebar,
			Preview,
			ConfigBar
		}
	};
</script>

<style lang="less">
	#formCreator {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #fff;
		display: flex;
		flex-direction: column;

		.banner{
			height: 50px;
			border-bottom: 1px solid #ddd;

			.title{
				float: left;
				line-height: 50px;
				padding-left: 5px;
				font-size: 18px;
			}

			.fName{
				margin-top: 10px;
				float: left;
				margin-left: 10px;
				border: none;
				border-bottom: 1px solid #ccc;
				border-radius: 0;
			}

			.bn{
				padding: 10px 15px 0;
				text-align: right;

				>button{
					margin-left: 10px;
				}
			}
		}

		.content{
			flex: 1;
			display: flex;
		}
	}
</style>
