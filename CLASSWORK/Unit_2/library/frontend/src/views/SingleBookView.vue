<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    

    const book = ref({})

    onMounted(() => {
        const route = useRoute()

        fetch(`${import.meta.env.VITE_API_URL}/books/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            book.value = result
        })
        .catch(err => console.error(err))
    })
</script>

<template>
    <h1>{{  book.name }}</h1>
    <h4>{{ book.author?.firstName }} {{ book.author?.lastName }}</h4>
</template>