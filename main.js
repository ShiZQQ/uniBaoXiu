import App from './App'
import store from './store'


// #ifndef VUE3
import Vue from 'vue'


// 环信im引入uView库
import uView from 'uview-ui';
Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'


// 引入全局TuNiaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)

// 引入TuNiaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)


const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
