export default {
	computed: {
		curModuleData() {
			return this.$parent.$parent.curModuleData;
		}
	}
}