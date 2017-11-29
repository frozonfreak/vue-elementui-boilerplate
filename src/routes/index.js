// Core Components
import Vue from 'vue'
import Router from 'vue-router'

// General
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Store from '@/components/Store'

// Errors
import NotFound from '@/components/Errors/404'

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
      component: Home,
      name: 'Nav1',
      iconCls: 'el-icon-message',
      children: [
        { path: '/helloworld', component: HelloWorld, name: 'HelloWorld' },
        { path: '/about', component: About, name: 'About' },
        { path: '/about/:text', component: About, name: 'AboutWithParam' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'Redirect',
      iconCls: 'fa fa-reply',
      children: [
        { path: '/redirect_name', redirect: {name: 'About'}, name: 'RedirectName' },
        { path: '/redirect_url', redirect: {name: 'About'}, name: 'RedirectURL' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'VueX',
      iconCls: 'fa fa-circle-thin',
      children: [
        { path: '/store', component: Store, name: 'Store' }
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
