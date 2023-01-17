import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './style/base.css' // 引入样式重置
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
