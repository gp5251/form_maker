import NotFound from "@pages/notFound"
import CreateAndEdit from "@pages/createAndEdit"
import Preview from "@pages/preview"
import Show from "@pages/show"
import List from "@pages/list"

export default [
	{
		path: '/', 
		redirect: '/create'
	}, {
		path: '/preview',
		name: 'preview',
		component: Preview
	}, {
		path: '/show/:id',
		name: 'show',
		component: Show,
		props: route => ({id: route.params.id})
	}, {
		path: '/create',
		name: 'create',
		component: CreateAndEdit,
		props: {type: 'create'}
	}, {
		path: '/edit/:id',
		name: 'edit',
		component: CreateAndEdit,
		props: route => ({id: route.params.id, type: 'edit'})
	}, {
		path: '/list',
		name: 'list',
		component: List,
	}, { 
		path: '*', 
		component: NotFound 
	}
]