<style lang="less">
	.selections {
		h4 {
			font-size: 12px;
			padding: 10px 0 0;
		}
		input {
			vertical-align: middle;
		}

		.listItem {
			padding-bottom: 5px;
			input:first-child {
				margin-right: 5px;
			}
		}
		button {
			padding: 2px 5px;
			margin-top: 5px;
		}
		.delete {
			margin-left: 10px;
		}
	}
</style>

<template>
	<div class="selections">
		<h4>选项</h4>
		<div v-for="(item, index) in curModuleData.list" :key="index" class="listItem">
			<input
				v-if="type === 0"
				type="radio"
				name="list"
				:value="index"
				:checked="item.selected"
				@change="changeValue(index, item)"
			/>
			<input
				v-else
				type="checkbox"
				:value="index"
				:checked="item.selected"
				@change="changeValue(index, item)"
			/>

			<a-input
				type="text"
				:value="item.txt"
				:style="{width: '120px'}"
				size="small"
				@change="updateListItem($event.target.value, index)"
			/>

			<a-icon class="delete" type="close-circle" @click="deleteListItem(index)" />
			<!-- <span class="delete fa fa-remove fa-lg" @click="deleteListItem(index)" /> -->
		</div>
		<button @click="addListItem">增加选项</button>
	</div>
</template>

<script>
	export default {
		name: "Selections",
		props: {
			type: {
				type: Number,
				default: 0 // 0 radio 1 checkbox
			},
			curModuleData: {
				type: Object,
				default() {
					return {}
				}
			}
		},

		computed: {
			inputType() {
				return this.type === 0 ? "radio" : "checkbox";
			}
		},

		methods: {
			addListItem() {
				let { list } = this.curModuleData;
				let newItem = { selected: false, txt: "新选项" };

				this.curModuleData.list = [...list, newItem];
			},
			updateListItem(value, index) {
				let { list } = this.curModuleData;
				let { selected } = list[index];
				let newItem = { selected, txt: value };

				this.curModuleData.list = [...list.slice(0, index), newItem, ...list.slice(index + 1)];
			},
			deleteListItem(index) {
				let { list, value } = this.curModuleData;
				list = [...list.slice(0, index), ...list.slice(index + 1)];

				if (this.type === 0) {
					if (index === value) value = "";
				} else if (this.type === 1) {
					value = list.map((v, i) => v.selected && i).filter(v => v !== false);
				}

				this.curModuleData.list = list;
				this.curModuleData.value = value;
			},
			changeValue(index, item) {
				if (this.type === 0) {
					// radio
					let { list } = this.curModuleData;
					list.forEach(item => (item.selected = false));
					item.selected = true;

					this.curModuleData.value = index; 
				} else {
					// checkbox
					let { list } = this.curModuleData;
					item.selected = !item.selected;

					let value = list
						.map((v, i) => v.selected && i)
						.filter(v => v !== false);

					this.curModuleData.value = value; 
				}
			}
		}
	};
</script>
