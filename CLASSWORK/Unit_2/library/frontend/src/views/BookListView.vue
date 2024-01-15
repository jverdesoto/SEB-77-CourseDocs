<script setup>
import { ref, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
import { useCookies } from 'vue3-cookies'
import { decodeCredential, googleLogout} from 'vue3-google-login'
import NewBook from '@/components/NewBook.vue'
//@ avoids ..//..//..// it doesnt matter where you are.
const booksBe = ref([])
const isLoggedIn = ref(false)

const { cookies } = useCookies()
const userName = ref('')

//fecth begins a promise so afterward. then
// onMounted(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/books`)
//     .then( response => response.json() )
//     .then( result => {
//         booksBe.value = result

//     })
// })
const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
    .then( response => response.json() )
    .then( result => {
        booksBe.value = result
    })
}

function deleteBook(bookId) {
    fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert('Book deleted')
        fetchData()
    })
}
function checkSession() {
    if ( cookies.isKey('user_session') ) {
        isLoggedIn.value = true
        const userData = decodeCredential(cookies.get('user_session'))
        userName.value = userData.given_name
    }

}

onMounted(() => {
    fetchData()
    checkSession()
})
</script>

<template>
    <h1>Book List</h1>
    <ul>
        <li v-for="book in booksBe" :key="book.id">
            <RouterLink :to="'/books/' + book._id">{{ book.title }}</RouterLink> &nbsp; 
            <button @click="deleteBook(book._id)">Delete Book</button>
            <RouterLink :to="'/books/update/'+ book._id">Edit Book</RouterLink>
        </li>
        
    </ul>
    <hr>
    <div >
        <NewBook v-if="isLoggedIn" :fetchData="fetchData" />
    </div>
    
</template>