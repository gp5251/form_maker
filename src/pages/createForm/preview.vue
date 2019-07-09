<style lang="less">
	.preview {
		flex: 1;
		overflow-y: auto;
		background-color: #efefef;
		padding-bottom: 20px;

		&:empty{
			position: relative;

			&::after{
				content: '请从左侧拖拽来添加表单组件';
				white-space: nowrap;
				text-align: center;
				position: absolute;
				left: 50%;
				top: 30%;
				transform: translateX(-50%);
				color: #999;
				font-size: 16px;
				letter-spacing: 1px;
			}

		}

		.module {
			min-height: 20px;
			border: 1px dashed #ccc;
			position: relative;
			padding: 5px;
			padding-left: 10px;

			&::before {
				content: "";
				position: absolute;
				z-index: 99;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
			}

			&.hi {
				position: relative;
				background-color: #dedede;

				&::after {
					content: "";
					position: absolute;
					width: 5px;
					left: 0;
					top: 0;
					bottom: 0;
					background-color: #333;
				}
			}

			.fns{
				position: absolute;
				z-index: 999;
				right: 5px;
				bottom: 5px;

				>span{
					cursor: pointer;
					font-size: 14px;
					background-color: #fff;
					border: 1px solid #ddd;
					border-radius: 20px;
					padding: 8px;
					margin-left: 10px;
				}
			}

		}
	}
</style>

<template>
	<draggable
		:list="modules"
		class="preview"
		@update="update"
		@add="add"
		:group="{put: true}"
		draggable=".module"
	>
		<div
			class="module"
			:class="{hi: curIndex === index}"
			:key="index"
			@click.stop="edit(index)"
			v-for="(item, index) in modules"
		>
			<component 
				:is="item.name"
				v-bind="item"
			/>
			<div class="fns" v-show="curIndex === index">
				 <span class="copy" @click.stop="copy(index)"><span class="fa fa-copy"></span></span>
				<span class="del" @click.stop="del(index)"><span class="fa fa-trash-o"></span></span>
			</div>
		</div>
	</draggable>
</template>

<script>
	import draggable from "vuedraggable";
	import { mapState, mapMutations } from "vuex";
	import { getIndexModules } from "@utils";

	export default {
		name: "Preview",
		computed: {
			...mapState(["modules"]),
			curIndex: {
				get() {
					return this.$parent.curIndex
				},
				set(val) {
					this.$parent.curIndex = val;
				}
			}
			
		},
		components: {
			draggable,

			...getIndexModules()
		},
		methods: {
			...mapMutations([
				"addModule",
				"removeModule"
			]),
			update(e) {
				this.curIndex = e.newIndex;
			},
			add(e) {
				this.addModule({index: e.newIndex, name: this.$parent.draggingName});
				e.item.remove();
			},
			edit(index) {
				this.curIndex = index;
			},
			del(index) {
				this.removeModule(index);
				if (index === this.curIndex) this.curIndex = -1;
			},
			copy(index) {
				this.curIndex = index + 1;
				this.addModule({index: index + 1, name: this.modules[index].name});
			}
		}
	};
</script>
