import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
function lazyLoad(view) {
	return () => import(`@/pages/${view}.vue`)
}

const routes = [
	{
		path: '/',
		name: 'TodoList',
		component: lazyLoad('TodoList'),
		meta: {
			title: 'Trang chủ',
		},
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return {x: 0, y: 0}
	},
	routes,
})

export default router
