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
    name: 'root',
    children: [
      {
        path: 'home',
        component: () => import('./views/Home.vue')
      },
      {
        path: 'projects',
        component: () => import('./views/Projects.vue'),
        children: [
          {
            path: '',
            component: () => import('./views/projects/AllProjects.vue')
          },
          {
            path: 'project/:id/',
            component: () => import('./views/projects/Project.vue'),
            children: [
              {
                path: 'description',
                component: () => import('./views/project/Description.vue')
              },
              {
                path: 'architecture',
                component: () => import('./views/project/Architecture.vue')
              },
              {
                path: 'team',
                component: () => import('./views/project/Team.vue')
              },
              {
                path: 'documentation',
                component: () => import('./views/project/Documentation.vue')
              },
              {
                path: 'events',
                component: () => import('./views/project/Events.vue')
              }
            ]
          },
        ]
      },
      {
        path: 'forum',
        component: () => import('./views/StackOverSlow.vue'),
        children: [
          {
            path: '',
            component: () => import('./views/forum/Questions.vue')
          },
          {
            path: 'question/:id',
            component: () => import('./views/forum/Question.vue')
          },
          {
            path: 'leaders',
            component: () => import('./views/forum/Leaders.vue')
          },
          {
            path: 'ask',
            component: () => import('./views/forum/CreateQuestion.vue')
          }
        ]
      },
      {
        path: 'employees',
        component: () => import('./views/Employees.vue')
      },
      {
        path: 'adaptation',
        component: () => import('./views/Adaptation.vue'),
        children: [
          {
            path: 'general',
            component: () => import('./views/adaptation/General.vue')
          },
          {
            path: 'education',
            component: () => import('./views/adaptation/Education.vue')
          },
          {
            path: 'testing',
            component: () => import('./views/adaptation/Testing.vue')
          },
        ]
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
  },
  
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
