<style lang="less">
	.formList{
		padding: 50px;

		h3{
			padding-left: 12px;
			line-height: 32px;
			border-bottom: 1px solid #ddd;
			padding-bottom: 5px;
		}

		.bn{
			float: right;
		}

		ul{
			.item{
				line-height: 32px;
				padding-left: 12px;
				padding-right: 12px;
				border-bottom: 1px solid #ddd;

				.del{
					float: right;
					font-size: 18px;
				}
			}
			.emptyText{
				text-align: center;
				color: #999;
				padding-top: 30px;
			}
		}
	}
</style>

<template>
	<div class="formList">
		<a-button type="primary" @click="$router.push('/')" class="bn">制作新表单</a-button>
		<h3>表单列表</h3>
		<ul>
			<li v-for="(item, index) in formList" :key="index" class="item" @click="$router.push(`/showForm/${index}`)">
				id: {{index}} name: {{item.name}}

				<span class="del" @click.stop="del(index)"><span class="fa fa-trash-o"></span></span>
			</li>
			<li v-if="!formList.length" class="emptyText">空空如也，快去制作新表单吧</li>
		</ul>
	</div>
</template>


<script>
	export default {
		name: "FormList",
		data() {
			return {
				emptyText: '加载中'
			};
		},
		methods: {
			showForm(id) {
				this.$router.push(`/showForm/${id}`)
			},
			del(index){
				this.$store.commit('updateFormList', [...this.formList.slice(0, index), ...this.formList.slice(index + 1)]);
			}
		},
		computed:{
			formList() {
				return this.$store.state.formList
			}
		},
		created() {
			if (!this.formList.length) this.emptyText = '暂无数据';
		}
	};
</script>