import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import request from "@/utils/request";

/**
 * 用于引入文件
 */

Vue.config.productionTip = false

Vue.use(ElementUI,{size: "mini"});

// TODO
Vue.prototype.request = request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
