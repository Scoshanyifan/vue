import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由数据（可能会很大，所以不需要配在一个文件里）
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

/** 路由拦截 权限验证 **/
// router.beforeEach((to, from, next) => {
//   if (to.path === "/dashboard") {
//     window.open("/dashboard","_blank")
//   }
//
//   // if (to.matched.some(r => r.meta.requiresAuth)) {
//   //   const token = util.getToken();
//   //   if (token && token !== 'undefined') {
//   //     util.setToken(token)
//   //   } else {
//   //     next({
//   //       name: 'login',
//   //       query: {
//   //         redirect: to.fullPath
//   //       }
//   //     })
//   //   }
//   // }
//   next()
// });

// 导出路由
export default router
