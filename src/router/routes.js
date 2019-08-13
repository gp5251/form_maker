import NotFound from "@pages/notFound"
// import CreateAndEdit from "@pages/createAndEdit"
import Create from "@pages/create"
import Show from "@pages/show"
import List from "@pages/list"

export default [
	{
		path: '/', 
		redirect: '/create'
	}, {
		path: '/show/:id',
		name: 'show',
		component: Show,
		props: route => ({id: route.params.id})
	}, {
		path: '/create',
		name: 'create',
		component: Create,
		props: {type: 'create'}
	}, {
		path: '/edit/:id',
		name: 'edit',
		component: Create,
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