import Vue from 'vue';
import http from 'axios';
import Antd from 'ant-design-vue';
import '@/vue/style/index';
import App from './App.vue';
import '@/vue/style/index';

Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
	el: '#vue',
	render: h => h(App)
});
