


import { lazy } from 'react'
import Layout from '@/layout'

const routerConfig = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: lazy(() => import('@/App'))
      },
      {
        path: '/popUp',
        component: lazy(() => import('@/pages/popup/index'))
      },
      {
        path: '/tab',
        component: lazy(() => import('@/pages/tab/index'))
      }
    ]    
  }
]


export default routerConfig