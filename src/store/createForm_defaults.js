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
		}
	},
	Phone: {
		data: {
			...metaData,
			title: '手机',
			value: ''
		}
	},
	MultilineText: {
		data: {
			...metaData,
			title: '多行文本',
			value: ''
		}
	},
	Number: {
		data: {
			...metaData,
			title: '数字',
			requireInt: false,
			requireLimit: false,
			limitation: [-Infinity, Infinity],
			value: ''
		}
	},
	Dater: {
		data: {
			...metaData,
			type: 0,				// 0 日期 1 日期时间
			title: '日期时间',
			value: ''
		}
	},
	Radio: {
		data: {
			...metaData,
			title: '单选按钮组',
			type: 0,				// 0 横向 1 纵向
			list: [{ txt: '选项1' }, { txt: '选项2'}, { txt: '选项3'}],
			value: -1
		}
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
		}
	},
	Select: {
		data: {
			...metaData,
			list: [{ txt: '选项1' }, { txt: '选项2'}, { txt: '选项3'}],
			title: '下拉框',
			value: ''
		}
	},
	Separator: {
		data: {
			...metaData,
			type: 2, 				// 0无线 1虚线 2细线 3粗线
			title: '分割线',
		}
	},
	UploadImage: {
		data: {
			...metaData,
			title: '上传图片',
			value: [],
			requireOne: false,
			requireCamera: false
		}
	},
	UploadFile: {
		data: {
			...metaData,
			title: '上传附件',
			requireOne: false,
			value: []
		}
	},
	Address: {
		data: {
			title: '地址',
			value: {
				province: '',
				city: '',
				district: '',
				details: '',
			},
			type: 0 				// 0 有详细地址 1 无详细地址
		}
	}
}

export default defautsData