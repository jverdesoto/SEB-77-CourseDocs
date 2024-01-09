<script setup>
    import { ref, onMounted } from 'vue';

    const catFact = ref('')
    const CAT_URL = `${import.meta.env.VITE_API_URL}/cats/fact`

    const fetchCatFact = () => {
        fetch(CAT_URL)
            .then(response => response.json())
            .then(data => {
                catFact.value = data
                console.log(data);
            })
            .catch(error => {
                console.error('Error fectching', error)
            })
    }
    
    onMounted(fetchCatFact)
    
    const getNewCatFact = () => {
        fetchCatFact()
    }
    
</script>

<template>
    <ul class="nav">
        <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">Back</router-link></li>
    </ul>

    <div class="container mt-3">
        <h1>Random Cat Fact</h1>
        <p>{{ catFact }}</p>
        <button @click="getNewCatFact" class="btn btn-primary">Get New Fact</button>
    </div>
</template>
