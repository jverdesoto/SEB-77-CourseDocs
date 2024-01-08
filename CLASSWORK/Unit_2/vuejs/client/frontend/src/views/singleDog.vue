<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const route = useRoute()
const dog = ref({})


onMounted(() => {
    const id = route.params.id
    const API_URL = `${import.meta.env.VITE_API_URL}/dogs/${id}` 

    fetch(API_URL)
    .then(response => response.json())  
    .then(result => {
         dog.value = result
     })
    })

</script>


<template>
    <p class="container"><a href="/">Back</a></p>
    <div class="container">
        <h1>{{ dog.name }}</h1>
        <p><strong>Age:</strong> {{ dog.age }} years old </p>
        <p><strong>Breed:</strong> {{ dog.breed }}</p>
        <img :src="dog.img" :alt="dog.name" style="width: 300px">
    </div>


</template>