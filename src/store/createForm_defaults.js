const metaData = {
	title: '', 						// 标题
	tip: '', 						// 描述
	required: false 				// 必填
}

const defautsData = {
	LineText: {
		data: {
			...metaData,
			title: '单行文本',
			value: ''
		},
		icon: 'file-text-o'
	},
	Phone: {
		data: {
			...metaData,
			title: '手机',
			value: ''
		},
		icon: 'mobile'
	},
	MultilineText: {
		data: {
			...metaData,
			title: '多行文本',
			value: ''
		},
		icon: 'file-text-o'
	},
	Number: {
		data: {
			...metaData,
			title: '数字',
			requireInt: false,
			requireLimit: false,
			limitation: [-Infinity, Infinity],
			value: ''
		},
		icon: 'plus-square-o'
	},
	Dater: {
		data: {
			...metaData,
			type: 0,				// 0 日期 1 日期时间
			title: '日期时间',
			value: ''
		},
		icon: 'calendar'
	},
	Radio: {
		data: {
			...metaData,
			title: '单选按钮组',
			type: 0,				// 0 横向 1 纵向
			list: [{ txt: '选项1' }, { txt: '选项2'}, { txt: '选项3'}],
			value: -1
		},
		icon: 'dot-circle-o'
	},
	Checkbox: {
		data: {
			...metaData,
			title: '复选框组',
			type: 0,				// 0 横向 1 纵向
			list: [
				{ selected: false, txt: '选项1' }, 
				{ selected: false, txt: '选项2' }, 
				{ selected: false, txt: '选项3' }, 
			],
			value: []
		},
		icon: 'check-square-o'
	},
	Select: {
		data: {
			...metaData,
			list: [{ txt: '选项1' }, { txt: '选项2'}, { txt: '选项3'}],
			title: '下拉框',
			value: ''
		},
		icon: 'list-alt'
	},
	Separator: {
		data: {
			...metaData,
			type: 2, 				// 0无线 1虚线 2细线 3粗线
			title: '分割线',
		},
		icon: 'window-minimize'
	},
	UploadImage: {
		data: {
			...metaData,
			title: '上传图片',
			value: [],
			requireOne: false,
			requireCamera: false
		},
		icon: 'upload'
	},
	UploadFile: {
		data: {
			...metaData,
			title: '上传附件',
			requireOne: false,
			value: []
		},
		icon: 'upload'
	},
	Address: {
		data: {
			...metaData,
			title: '地址',
			value: {
				province: '',
				city: '',
				district: '',
				details: '',
			},
			type: 0 				// 0 有详细地址 1 无详细地址
		},
		icon: 'address-book-o'
	},
	Floating: {
		data: {
			...metaData,
			title: '浮动层',
			rect: {
				x: 0,
				y: 0,
				w: 100,
				w: 100
			},
			fixed: false,
			type: 0,					// 0 图片 1 文字
			value: ''
		},
		icon: 'upload'
	},
}

const compNames = [
	'lineText', 
	'multilineText', 
	'number', 
	'dater', 
	'radio', 
	'checkbox', 
	'select', 
	'separator', 
	'address', 
	'uploadImage', 
	'uploadFile', 
	'phone'
]

export const list = compNames
		.map(name => {
			let o = {}
			Object.keys(defautsData)
				.some(key => {
					if (key.toUpperCase() === name.toUpperCase()) {
						let {data, icon} = defautsData[key];
						o.mName = key;
						o.title = data.title;
						o.cn = 'fa-' + icon
						return true;
					}
				});
			return o;
		});

export default defautsData