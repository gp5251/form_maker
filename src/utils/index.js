export function title(str) {
	return str.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ')
}

export const fixDragBug = {
	_from: null,
	_item: null,
	check(el) {
		let count = 0;
		let oldItem = el.querySelector('.module');
		oldItem._tmp_data = 'tmp'
		this._from = el;

		let tid = setInterval(()=>{
			count ++;
			let item = el.querySelector('.module');
			if (item && !item._tmp_data) {
				clearInterval(tid)

				this._item = item;
				item.style.right = "99%";
				delete oldItem._tmp_data;
				oldItem = null;

				// el.classList.add('curModule');
				// el.parentNode.classList.add('dragging');

			} else if (count == 3000) clearInterval(tid)
		}, 20);
	},
	undo() {
		if (this._item){
			this._item.style.right = '0';
			this._item = null;
		} 

		if (this._from) {
			// this._from.classList.remove('curModule');
			// this._from.parentNode.classList.remove('dragging');
			this._from = null;
		}
	}
}

function getModules(type = 0) {
	const context = type === 0 ?
					require.context('@components', true, /index.vue$/) :
					require.context('@components', true, /config.vue$/) ;

	return context.keys().map(filePath => {
		let fileName = title(filePath.split('/')[1]);
		if (type === 1) fileName += 'Config';
		return {
			[fileName]: context(filePath).default
		}
	}).reduce((a, b) => {
		return { ...a, ...b }
	})
}

export function getIndexModules() {
	return getModules(0);
}

export function getConfigModules() {
	return getModules(1);
}
