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
    component: () => import('../views/elementui/deviceAnalyseItem.vue')
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('../views/navigation'),
    children: [
      {
        path: 'databoard',
        component: () => import('../views/dashboard')
      },
      {
        path: 'datacenter',
        children: [
          {
            path: 'overview',
            component: () => import('../views/navigation/overview.vue')
          },
          {
            path: 'device',
            component: () => import('../views/navigation/device.vue')
          }
        ]
      },
      {
        path: 'business',
        component: () => import('../views/navigation/business.vue')
      }
    ]
  }
]

export default routes
