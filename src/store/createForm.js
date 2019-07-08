import cloneDeep from 'lodash/cloneDeep';
import defautsData from './createForm_defaults';

export default {
	state: {
		modules: [],
		formList: []
	},
	mutations: {
		updateFormList(state, list) {
			state.formList = list
		},
		addModule(state, {name, index}) {
			let { modules } = state;
			if (name in defautsData) {
				let { data = {} } = defautsData[name];
				modules.splice(index, 0, {
					name: name,
					...cloneDeep(data)
				});
			}
		},
		removeModule(state, index) {
			state.modules.splice(index, 1);
		},
		resetModules(state) {
			state.modules = [];
		},
		updateCurModule(state, {index, data}) {
			if (data === void 0) return;

			let mData = state.modules[index];
			state.modules.splice(index, 1, { ...mData, ...data });
		}
	}
}