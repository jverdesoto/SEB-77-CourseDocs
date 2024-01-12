<script setup>
import { ref , onMounted } from 'vue'
import {RouterLink} from 'vue-router'
import NewAuthor from '@/components/NewAuthor.vue';

const authorsBe = ref([])
//fecth begins a promise so afterward. then
function fetchData () {
    fetch(`${import.meta.env.VITE_API_URL}/authors`)
    .then( response => response.json() )
    .then( result => {
        authorsBe.value = result
        console.log(authorsBe)
    })
}


function deleteAuthor(authorId) {
    fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert('Author deleted')
        fetchData()
    })
}


onMounted(fetchData)

</script>

<template>
    <h1>Author List</h1>
    <ul>
        <li v-for="author in authorsBe" :key="author.id">
            <RouterLink :to="'/authors/' + author._id">{{ author.name }}</RouterLink>
            <button @click="deleteAuthor(author._id)">Delete Author</button>
            <RouterLink :to="'/authors/update/'+ author._id">Edit Author</RouterLink>
        </li>
    </ul>
    <hr>
    <NewAuthor />
</template>