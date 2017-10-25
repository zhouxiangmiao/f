import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import recommend from '../pages/recommend'

import list from '../pages/list'
import find from '../pages/Find'
import pay from '../pages/pay'
import lala from '../pages/lala'
Vue.use(Router)
export default [
   
  {    name:recommend,
      path: '/recommend',//分配的路由地址
      component: recommend
    },
  {    name:list,
      path: '/list',//分配的路由地址
      component: list
    },
    {    name:find,
      path: '/find',//分配的路由地址
      component: find
    },
     {    name:pay,
      path: '/pay',//分配的路由地址
      component: pay
    },
     {
      path: '/',//分配的路由地址
      component: recommend
    },{
      path: '/lala/:index',//分配的路由地址
      name:'lala',
      component: lala
    }
    
  ]

