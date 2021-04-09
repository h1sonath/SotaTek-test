import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import global from '@/global/index.js'
import helpers from '@/helpers/index.js'
import pluginHelper from '@/helpers/pluginHelper.js'
import vuetify from '@/plugins/vuetify'
import inputRules from '@/plugins/inputRules'
import '@/assets/scss/main.scss'

// Add the Firebase products that you want to use
global.import()
Vue.config.productionTip = false
Vue.config.performance = true
Vue.config.devtools = true

sync(store, router, {moduleName: '$route'})

Vue.use(
	pluginHelper.create({
		$helpers: helpers,
		$rules: inputRules
	})
)

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
