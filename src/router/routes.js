import NotFound from "@pages/notFound"
import CreateForm from "@pages/createForm"
import PreviewForm from "@pages/previewForm"
import ShowForm from "@pages/showForm"
import FormList from "@pages/formList"

export default [
	{
		path: '/', 
		redirect: '/createForm'
	}, {
		path: '/createForm',
		name: 'createForm',
		component: CreateForm
	}, {
		path: '/previewForm',
		name: 'previewForm',
		component: PreviewForm
	}, {
		path: '/showForm/:id',
		name: 'showForm',
		component: ShowForm,
		props: route => ({id: route.params.id})
	}, {
		path: '/formList',
		name: 'formList',
		component: FormList,
	}, { 
		path: '*', 
		component: NotFound 
	}
]