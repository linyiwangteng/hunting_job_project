import Vue from 'vue';
import VueRouter from 'vue-router';
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
// 这里可以添加公共第三方组件库

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Ant);


export default function(options){
	const router = new VueRouter({
		mode:'hash',
		base: process.env.BASE_URL,
		...options.router
	});
	return new Vue({
		...options,
		router,
		store
	}).$mount('#app')
}