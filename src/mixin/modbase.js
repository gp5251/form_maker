import Mod from '@commonComponents/mod';

export default {
	data() {
		return {
			error: []
		}
	},
	props: {
		title: {
			type: String,
			default: "default title"
		},

		tip: {
			type: String,
			default: ""
		},

		required: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		validate() {
			if (this.required && this.value.length === 0) {
				this.error = ['此项为必填'];
			} else {
				this.error = [];
			}

			return this.error.length === 0;
		}
	},
	components: {
		Mod
	}
};