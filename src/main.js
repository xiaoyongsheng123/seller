// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
// 引入需要打包的外部样式
import './common/scss/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{ path: '/goods', component: goods },
	{ path: '/ratings', component: ratings },
	{ path: '/seller', component: seller }
]

const router = new VueRouter({
    mode: 'abstract',
    base: __dirname,
    linkActiveClass: 'active',
    routes// （缩写）相当于 routes: routes
})


/* eslint-disable no-new */
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

router.push('/goods')

