
<script setup>

import { ref, onMounted } from 'vue'

const CAT_URL = `${import.meta.env.VITE_API_URL}/cats/fact`
const catFact = ref('')

const fetchCatFact = () => {
    fetch(CAT_URL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        catFact.value = data
    })
    .catch(error => {
        console.error('error', error);
    })
}



onMounted(fetchCatFact)


</script>






<template>
    <p class="container"><a href="/">Back</a></p>
    <div class="container">
        <h1>{{ catFact }}</h1>
        <a  class="btn btn-primary" href="/cat/fact">Get another cat fact</a>
    </div>


</template>