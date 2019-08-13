<template>
	<div id="create">
		<CreateAndEdit />
		<Preview :type="type" v-if="showPreview" />
	</div>
</template>

<script>
	import CreateAndEdit from "./createAndEdit";
	import Preview from "./preview";

	export default {
		name: "Create",
		data() {
			return {
				showPreview: false
			}
		},
		props: {
			id: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'create'
			}
		},
		components: {
			CreateAndEdit,
			Preview
		}
	};
</script>
