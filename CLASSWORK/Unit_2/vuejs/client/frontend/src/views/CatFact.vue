<script setup>
import { ref, onMounted } from 'vue'

const catFact = ref({})
const CAT_URL = `${import.meta.env.VITE_API_URL}/cats/fact`

const fetchCatFact = () =>{
    fetch(CAT_URL)
    .then(response => {
        return response.json()
    })
    .then (data => {
        catFact.value = data
        console.log(data)
    })
}

onMounted(fetchCatFact)
const getNewCatFact = () => {
    fetchCatFact()
}


</script>

<template>
    <div class="container">
        
        <h1>Random Cat Fact</h1>
        <p>{{ catFact }}</p>
        <button @click="getNewCatFact" class="btn btn-primary">Get another Cat Fact</button>
        <br>
        <a href="/">Back Home</a>
    </div>
</template>


