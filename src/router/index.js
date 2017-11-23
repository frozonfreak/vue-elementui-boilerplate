import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

import Parent from '@/components/Parent'
import Foo from '@/components/Parent/Foo'
import Bar from '@/components/Parent/Bar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/parent',
      component: Parent,
      children: [
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        }
      ]
    }

  ]
})
