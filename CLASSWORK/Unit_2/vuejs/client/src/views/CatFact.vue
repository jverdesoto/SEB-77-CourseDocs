<script setup>
import { ref, onMounted} from 'vue'

const CatFact = ref({})

const fetchCatFact = () => {
   
}

onMounted(() => {
    fetch('http://localhost:3500/cats/fact')
    .then(response => response.json())
    .then (data => {
        CatFact.value = data
        console.log(data)
    })
})





</script>

<template>
<div class="container">
    <h1> Random Cat Fact</h1>
    <p>{{  CatFact }}</p>
    <!-- <button @click="getNewCatFact" class -->
        </div>

</template>
