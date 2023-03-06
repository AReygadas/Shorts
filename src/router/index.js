import { createRouter, createWebHistory } from 'vue-router'
 import Pseudoelementos from '@/components/Pseudoelementos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'home',
       component: Pseudoelementos
     },
     {
       path: '/recursos',
       name: 'recursos',
       // route level code-splitting
       // this generates a separate chunk (About.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import('@/components/Recursos.vue')
     },
     
      {
        path: '/btn',
        name: 'botones',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/Botones1.vue')
      },
      {
        path: '/video',
        name: 'video',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/Videobackground.vue')
      },
      {
         path: '/center',
         name: 'center',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('@/components/center.vue')
       },
       {
          path: '/dropdown',
          name: 'dropdown',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/components/Dropdown.vue')
        },
        {
           path: '/input',
           name: 'Money',
           // route level code-splitting
           // this generates a separate chunk (About.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component: () => import('@/components/TexboxMoney.vue')
         },
         {
            path: '/inputCurrenci',
            name: 'Currency',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/components/inputCurrenci.vue')
          }
        
  ]
})

export default router
