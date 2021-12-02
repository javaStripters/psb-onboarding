import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/unathorized', 
    component: () => import('./views/Authorization.vue')
  },
 
  {
    path: '/authorized',
    component: () => import('./views/Authorized.vue'),
    children: [
      {
        path: 'home',
        component: () => import('./views/Home.vue')
      },
      {
        path: 'projects',
        component: () => import('./views/Projects.vue')
      },
      {
        path: 'about',
        component: () => import('./views/About.vue')
      },
      {
        path: 'upload',
        component: () => import('./views/Upload.vue')
      }
    ]
  },


  {
    path: '*',
    redirect: '/authorized/home'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
