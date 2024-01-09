<script setup>
import {ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const dog = ref({})

onMounted(()=> {
    const id = route.params.id
    const API_URL = `${import.meta.env.VITE_API_URL}/dogs/${id}`

    fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        dog.value = result
        console.log(dog);
    })
})
</script>
<template>
    <h1>{{ dog.name }}</h1>
    <p><strong>Age:</strong> {{ dog.age }} years old</p>
    <p><strong>Breed:</strong> {{ dog.breed }}</p>
    <img :src='dog.img' class="w-100">
</template>
