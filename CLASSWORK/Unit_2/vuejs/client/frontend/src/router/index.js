import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleDog from '../views/SingleDog.vue'
import CatFact from '../views/CatFact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dog/:id',
      name: 'dog',
      component: SingleDog
    },
    {
      path: '/cats/fact',
      name: 'cat',
      component: CatFact
    }
  ]
})

export default router
