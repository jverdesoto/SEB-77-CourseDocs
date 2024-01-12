<script setup>
import { ref, onMounted } from 'vue'
import { useRoute} from 'vue-router'


const book = ref({})

onMounted(() => {
    const route = useRoute()
    const id = route.params.id

    fetch(`${import.meta.env.VITE_API_URL}/books/${id}`)
    .then(response => response.json())
    .then( result => {
        book.value = result
    })
    .catch(err => console.error(err))
})

</script>

<template>
    <h1>{{ book.title }}</h1>
    <h2 v-if="book.author">{{ `When author wrote this he was ${book.author.age} years old` }}</h2>
    <h3>{{`He is from ${ book.author?.from}`}}</h3>
    

</template>