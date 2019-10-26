import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/views/home/index.vue'
import HomeMain from '@/components/Home/homeMain.vue'
import Login from '@/views/login'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: { name: 'HomeMain' },
      children: [{
        path: '/',
        component: HomeMain
      }]
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ],
  mode: 'history'
})
export default router
