import cloneDeep from 'lodash/cloneDeep';
import defautsData from './createForm_defaults';

export default {
	state: {
		form: {
			name: '未命名表单',
			modules: [],
		},
		formList: []
	},
	mutations: {
		updateFormList(state, list) {
			state.formList = list
		},
		addModule(state, {name, index}) {
			let { modules } = state.form;
			if (name in defautsData) {
				let { data = {} } = defautsData[name];
				modules.splice(index, 0, {
					name: name,
					...cloneDeep(data)
				});
			}
		},
		removeModule(state, index) {
			state.form.modules.splice(index, 1);
		},
		resetModules(state) {
			state.form.modules = [];
		},
		resetForm(state, form = {name: '未命名表单', modules: []}) {
			state.form = form
		}
	}
}