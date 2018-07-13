import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import Todos from '@/components/Todos'
import Find from '@/components/Find'
import More from '@/components/More'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
