import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import moment from 'moment'
// import 'element-ui/lib/theme-chalk/index.css';  //element 主题颜色不跟据 我们主题改变
import "./assets/css/theme-element/index.scss";  //element 主题颜色跟据 我们主题改变
import './untils/directives';


Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$moment = moment;
window.MAP = ""
//默认主题色
window.document.documentElement.setAttribute( "data-theme", "default-theme");
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | vue-manage-system`;
  const role = localStorage.getItem('ms_username');
  if (!role && to.path !== '/login') {
      next('/login');
  } else if (to.meta.permission) {
      // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
      role === 'daidai' ? next() : next('/403');
  } else{
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
