import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded страницы
const HomePage = () => import('../pages/HomePage.vue')
const BlogPage = () => import('../pages/BlogPage.vue')
const NotFound = () => import('../pages/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    children: [
      {
        path: ':id',           // динамический маршрут
        name: 'BlogPost',
        component: () => import('../pages/BlogPostPage.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 404 страница
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Пример навигационного гварда
router.beforeEach((to, from, next) => {
  console.log(`Navigating to ${to.fullPath}`)
  next()
})

export default router
