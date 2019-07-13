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
				font-size: 14px;

				.fns{
					float: right;
					white-space: nowrap;

					>span{
						margin-left: 12px;
					}
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
			<li v-for="(item, index) in formList" :key="index" class="item" @click="$router.push(`/show/${index}`)">
				{{index + 1}}: {{item.name}}

				<div class="fns">
					<span class="edit" @click.stop="edit(index)">编辑</span>
					<span class="copy" @click.stop="copy(index)">复制</span>
					<span class="del" @click.stop="del(index)">删除</span>
				</div>
			</li>
			<li v-if="!formList.length" class="emptyText">空空如也，快去制作新表单吧</li>
		</ul>
	</div>
</template>


<script>
	import { mapMutations } from 'vuex';
	import cloneDeep from 'lodash/cloneDeep';

	export default {
		name: "FormList",
		data() {
			return {
				emptyText: '加载中'
			};
		},
		methods: {
			...mapMutations(['resetForm', 'updateFormList']),
			showForm(id) {
				this.$router.push(`/show/${id}`)
			},
			edit(index){
				let form = this.$store.state.formList[index];
				this.resetForm(form);
				this.$router.push(`/edit/${index}`)
			},
			copy(index){
				let form = cloneDeep(this.$store.state.formList[index]);
				this.updateFormList([...this.formList.slice(0, index + 1), form, ...this.formList.slice(index + 1)]);
			},
			del(index){
				this.updateFormList([...this.formList.slice(0, index), ...this.formList.slice(index + 1)]);
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