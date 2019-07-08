export default {
	state: {
		username: '',
		role: '',
		uid: -1,
		loggedIn: false
	},
	mutations: {
		login(state) {
			state.loggedIn = true;
			state.role = 'admin'
		}
	}
}