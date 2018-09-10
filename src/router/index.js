import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Radio from '@/components/Radio'
import Tree from '@/components/tree'
import NavMenu from '@/components/NavMenu'
import slideNav from '@/components/slideNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/Tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/NavMenu',
      name: 'NavMenu',
      component: NavMenu
    },
    {
      path: '/slideNav',
      name: 'slideNav',
      component: slideNav
    }
  ]
})
