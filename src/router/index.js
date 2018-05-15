import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Consumption from '@/components/consume/Consumption'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Consumption',
      name: 'Consumption',
      component: Consumption
    }
  ]
})
