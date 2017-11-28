import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

import NotFound from '@/components/Errors/404'

import Parent from '@/components/Parent'
import Foo from '@/components/Parent/Foo'
import Bar from '@/components/Parent/Bar'

let routes = [
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

export default routes
