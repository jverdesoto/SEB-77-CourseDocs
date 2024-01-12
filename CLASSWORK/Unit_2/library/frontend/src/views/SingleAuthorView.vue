<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    

    const author = ref({})

    onMounted(() => {
        const route = useRoute()

        fetch(`${import.meta.env.VITE_API_URL}/authors/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            author.value = result
        })
        .catch(err => console.error(err))
    })
</script>

<template>
    <h1>{{ author.firstName }} {{ author.lastName }}</h1>
    <h4></h4>
</template>