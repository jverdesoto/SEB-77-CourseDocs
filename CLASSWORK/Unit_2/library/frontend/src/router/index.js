import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import AuthorListView from '../views/AuthorListView.vue'
import SingleBookView from '../views/SingleBookView.vue'
import SingleAuthorView from '../views/SingleAuthorView.vue'
import BookEditView from '@/views/BookEditView.vue'
import AuthorEditView from '@/views/AuthorEditView.vue'
import LoginView from '@/views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/books',
      name: 'books',
      component: BookListView
    },
    {
      path:'/books/:id',
      name: 'singlebooks',
      component: SingleBookView
    },
    {
      path:'/books/update/:id',
      name: 'editbooks',
      component: BookEditView
    },
    {
      path:'/authors/update/:id',
      name: 'editauthors',
      component: AuthorEditView
    },
    {
      path:'/authors/:id',
      name: 'singleauthors',
      component: SingleAuthorView
    },
    {
      path:'/authors',
      name: 'authors',
      component: AuthorListView
    },
    {
      path:'/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
