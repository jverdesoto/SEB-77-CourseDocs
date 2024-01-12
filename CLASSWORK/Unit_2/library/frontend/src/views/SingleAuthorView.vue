<script setup>
import { ref, onMounted } from 'vue'
import { useRoute} from 'vue-router'


const author = ref({})

onMounted(() => {
    const route = useRoute()
    const id = route.params.id

    fetch(`${import.meta.env.VITE_API_URL}/authors/${id}`)
    .then(response => response.json())
    .then( result => {
        author.value = result
    })
    .catch(err => console.error(err))
})

</script>

// v-if creates condition
// ? more react means .name is optional but as soon as it gets data it will load
<template>
    <h1>{{ `${author.name}` }}</h1>
    <h2>{{ `${author.age} years old` }}</h2>
    <h3>{{ `From ${author.from}` }}</h3>

</template>