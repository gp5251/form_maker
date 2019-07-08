const urlPrefix = process.env.NODE_ENV === 'production' ? '' : '';

export const authOss 		= urlPrefix + '/api/v1/oss/token'
export const saveForm 		= urlPrefix + '/api/v1/template/create'
export const getForm 		= urlPrefix + '/api/v1/template/get'
export const getFormList 	= urlPrefix + '/api/v1/template/getByUser'

export const USER = {
	login		: urlPrefix + '/api/v1/user/login',
	register	: urlPrefix + '/api/v1/user/register',
}

export const LIVE = {
	getList		: urlPrefix + '/api/v1/admin/live/list',
	create		: urlPrefix + '/api/v1/admin/live/create',
	update		: urlPrefix + '/api/v1/admin/live/update',
	delete		: urlPrefix + '/api/v1/admin/live/delete',
}
