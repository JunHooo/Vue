// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;




Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
   next()
  // let isLogin = window.localStorage.getItem('token')
  // if (isLogin) {
  //   next()
  // } else {
  //   if (to.path === '/Test') {
  //     next()
  //   } else {
  //     Message.error('没有访问权限或登录已过期，请重新登录！')
  //     next('/Test')
  //   }
  // }
})



