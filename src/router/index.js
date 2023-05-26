import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/front/home.vue'
import about from '../views/front/about.vue'
import a from '../views/front/about/a.vue'
import b from '../views/front/about/b.vue'
import id from '../views/front/about/[id].vue'
import user from '../views/user/index.vue'
import products from '../views/front/products/index.vue'
import notFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    children: [
      {
        path: 'a',
        name: 'a',
        component: a
      },
      {
        path: 'b',
        name: 'b',
        component: b
      },
      {
        path: ':id',
        name: 'id',
        component: id
      }
    ]
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('../views/pinia/pinia.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
