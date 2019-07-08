import * as consts from './consts';
import axios from 'axios';
import qs from 'qs';

const req = axios.create({
	// baseURL: '',
	// timeout: 10000,
});

req.interceptors.response.use(function (response) {
	return response.data
}, function (error) {
	return Promise.reject(error);
});

function post(url, data) {
	return req.post(url, qs.stringify(data), {headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
	}})
}

export function authOss() {
	return req.get(consts.authOss).then(({code, data, msg}) => {
		if (code === 0) return data
		return Promise.reject(msg)
	})
}

export function getForm(id) {
	return post(consts.getForm, {id})
}

export function getFormList(userId) {
	return post(consts.getFormList, {userId})
}

export function saveForm(data) {
	return post(consts.saveForm, data)
}

export function login(data) {
	return post(consts.USER.login, data)
}

export function reg(data) {
	return post(consts.USER.register, data)
}