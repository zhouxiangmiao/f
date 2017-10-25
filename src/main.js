// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import store from './store'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import 'mint-ui/lib/style.css'
import '../static/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
const router=new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
