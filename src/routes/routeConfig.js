


import { lazy } from 'react'
import Layout from '@/layout'

const routerConfig = [
  {
    path: '/',
    component: Layout,
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
      },
      {
        path: '/swiper',
        component: lazy(() => import('@/pages/swiper/index'))
      },
      {
        path: '/drag',
        component: lazy(() => import('@/pages/drag/index'))
      },
    ]    
  }
]


export default routerConfig