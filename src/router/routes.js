import Home from '../views/Home'

/**
 * 路由控制
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // component: () => import('../views/Home')
  },
  {
    path: '/basic',
    name: '基础basic',
    component: () => import('../views/basic')
  },
  {
    path: '/count',
    name: '计算count',
    component: () => import('../views/count')
  },
  {
    path: '/store',
    name: '存储other',
    component: () => import('../views/store')
  },
  {
    path: '/other',
    name: '其他other',
    component: () => import('../views/other')
    // TODO children
  },
  {
    path: '/dashboard',
    name: '报表',
    component: () => import('../views/dashboard')
  },
  {
    path: '/elementui',
    name: 'elementui',
    component: () => import('../views/elementui')
  }
]

export default routes
