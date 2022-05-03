import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
} from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/dg',
    name: 'dg',
    component: () => import('../pages/draggable/index.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    //  处理路由切换滚动行为
    return new Promise((resolve) => {
      if (savedPosition) {
        return savedPosition
      }
      if (from.meta.saveSrollTop) {
        const top: number = document.documentElement.scrollTop || document.body.scrollTop
        resolve({ left: 0, top })
      }
    })
  },
})
export default router
