<script setup>
    import { useRoute } from 'vue-router'
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
            console.log(dog);
        })
    })
</script>

<template>
    <ul class="nav">
        <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">Back</router-link></li>
    </ul>

    <div class="container mt-3">
        <div class="card" style="width: 18rem;">
        <img :src="dog.img" :alt="dog.name" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">{{ dog.name }}</h3>
            <p class="card-text"><strong>Age: </strong>{{ dog.age }}</p>
            <p class="card-text"><strong>Breed: </strong>{{ dog.breed }}</p>
        </div>
    </div>
    </div>
</template>
