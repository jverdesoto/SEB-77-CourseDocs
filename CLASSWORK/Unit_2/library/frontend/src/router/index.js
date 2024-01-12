import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import AuthorListView from '../views/AuthorListView.vue'
import SingleBookView from '../views/SingleBookView.vue'
import SingleAuthorView from '../views/SingleAuthorView.vue'
import BookEditView from '../views/BookEditView.vue'
import AuthorEditView from '../views/AuthorEditView.vue'
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
      path: '/books',
      name: 'books',
      component: BookListView
    },
    {
      path: '/books/:id',
      name: 'singlebook',
      component: SingleBookView
    },
    {
      path: '/books/edit/:id',
      name: 'editbook',
      component: BookEditView
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorListView
    },
    {
      path: '/authors/:id',
      name: 'singleauthor',
      component: SingleAuthorView
    },
    {
      path: '/authors/edit/:id',
      name: 'editauthor',
      component: AuthorEditView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
