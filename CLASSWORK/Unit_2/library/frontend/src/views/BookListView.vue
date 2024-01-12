<script setup>
import { ref, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
import NewBook from '@/components/NewBook.vue'
//@ avoids ..//..//..// it doesnt matter where you are.
const booksBe = ref([])
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

onMounted(fetchData)
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
    <NewBook />
    <!-- this is the heart of vue cause of its syntax -->
    <!-- location of it is also important -->
</template>