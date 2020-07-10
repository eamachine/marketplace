import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Comercial from '@/components/Comercial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/comercial',
      name: 'Comercial',
      component: Comercial,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
