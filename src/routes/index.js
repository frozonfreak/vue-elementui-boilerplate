// Core Components
import Vue from 'vue'
import Router from 'vue-router'

// General
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

// Errors
import NotFound from '@/components/Errors/404'

// Parent Child
import Parent from '@/components/Parent'
import Foo from '@/components/Parent/Foo'
import Bar from '@/components/Parent/Bar'

// Progress bar
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

NProgress.configure({ showSpinner: false })

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/about/:text',
      name: 'AboutWithParam',
      component: About
    },
    {
      path: '/redirect_name',
      name: 'RedirectName',
      redirect:
      {
        name: 'About'
      }
    },
    {
      path: '/redirect_url',
      name: 'RedirectURL',
      redirect:
      {
        name: 'About'
      }
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      children: [
        {
          path: 'foo',
          name: 'Foo',
          component: Foo
        },
        {
          path: 'bar',
          name: 'Bar',
          component: Bar
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})

// Set progress bar for every route.
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
