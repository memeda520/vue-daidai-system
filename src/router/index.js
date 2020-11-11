import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  	return originalPush.call(this, location).catch(err =>err)
}
const routes = [{
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/',
    component:() => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
    children: [
      {
        path: '/tables',
        component: () => import(/* webpackChunkName: "home" */ '../views/Tables.vue'),
        meta: { title: '表格' }
      },
      {
        path: '/epgis',
        component: () => import(/* webpackChunkName: "home" */ '../views/map/Epgis.vue'),
        meta: { title: '思级地图' }
      },
      {
        path: '/home-page',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue'),
        meta: { title: '系统首页' }
      },
      {
        path: '/message',
        component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
        meta: { title: '消息中心' }
      },
      {
        path: '/theme',
        component: () => import(/* webpackChunkName: "message" */ '../views/Theme.vue'),
        meta: { title: '更换主题' }
      },
      {
        path: '/drag',
        component: () => import(/* webpackChunkName: "message" */ '../views/DragList.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        path: '/moment',
        component: () => import(/* webpackChunkName: "message" */ '../views/Moment.vue'),
        meta: { title: '日期格式' }
      },
      {
        path: '/dialog',
        component: () => import(/* webpackChunkName: "message" */ '../views/Drag.vue'),
        meta: { title: '拖拽弹窗' }
      },
      {
        path: '/upload',
        component: () => import(/* webpackChunkName: "message" */ '../views/Upload.vue'),
        meta: { title: '可裁剪' }
      },
      {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
        meta: { title: '404' }
      },
      {
          path: '/403',
          component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
          meta: { title: '403' }
      },
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/404',
    component:  () => import(/* webpackChunkName: "error" */ '../views/404.vue')
  },
  {
    path: '/403',
    component:  () => import(/* webpackChunkName: "error" */ '../views/403.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router