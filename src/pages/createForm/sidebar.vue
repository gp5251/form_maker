<style lang="less">
	.sidebar {
		width: 220px;
		border-right: 1px solid #ccc;
		height: 100%;

		h3 {
			font-size: 14px;
			line-height: 20px;
			padding-top: 5px;
			padding-left: 5px;
			margin: 0;
		}
		.tit{
			text-align-last: left;
		}

		.list{
			padding: 5px;
		}

		.moduleWraper {
			line-height: 22px;
			padding: 5px;
			border: 1px solid #eee;
			margin-bottom: 2px;
			position: relative;
			width: 50%;
			font-size: 12px;
			text-align: center;
			display: inline-block;
			box-sizing: border-box;
			background-color: #eee;

			.fa{
				width: 15px;
				text-align: center;
			}

			.fa-mobile{
				font-size: 16px;
			}
		}
		.moduleWraper .module {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
</style>

<template>
	<div class="sidebar">
		<h3>字段组件</h3>
		<div class="list">
			<draggable
				class="moduleWraper"
				draggable=".module"
				:group="{pull: 'clone', put: false}"
				v-for="(item, index) in list"
				:key="index"
				@start="start"
				@clone="draggingName = item.mName"
				@end="end"
			>
				<div class="tit">
					<span :class="['fa', item.cn]"></span>
					{{item.title}}</div>
				<div class="module"></div>
			</draggable>
		</div>
	</div>
</template>

<script>
	import draggable from "vuedraggable";
	import { list } from "@store/createForm_defaults";
	import { fixDragBug } from "@utils";

	export default {
		data() {
			return {
				draggingName: '',
				list
			};
		},
		name: "Sidebar",
		watch: {
			draggingName(val) {
				this.$parent.draggingName = val;
			}
		},
		components: {
			draggable
		},
		methods: {
			start(e) {
				// bugfix
				fixDragBug.check(e.from);
			},
			end() {
				this.draggingName = '';
				// bugfix
				fixDragBug.undo();
			}
		}
	};
</script>
