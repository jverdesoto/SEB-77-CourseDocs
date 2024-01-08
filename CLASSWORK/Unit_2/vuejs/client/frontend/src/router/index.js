import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import singleDog from '../views/singleDog.vue'
import catFact from '../views/catFact.vue'


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
      component: singleDog
    },
    {
      path: '/cat/fact',
      name: 'cat', 
      component: catFact
    }

  ]
})

export default router
