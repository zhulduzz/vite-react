import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../components/PostList.vue'
import PostDetail from '../components/ItemDetail.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: PostList },
  { path: '/posts/:id', component: PostDetail },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

