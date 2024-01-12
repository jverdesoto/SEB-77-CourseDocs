<script setup>

    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router';
    import NewAuthor from '@/components/NewAuthor.vue';

    const authorsBackEnd = ref([])

    onMounted(updateData)

    function updateData() {
        fetch(`${import.meta.env.VITE_API_URL}/authors`)
        .then(response => response.json())
        .then(result => {
            authorsBackEnd.value = result
        })
        .catch(err => console.error(err))
    }

    function deleteAuthor(authorId) {
        fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Author Deleted')
            updateData()
        })
        .catch(err => console.error(err))
    }

    </script>

<template>
    <h1>Authors List</h1>
    <ul>
        <li v-for="author in authorsBackEnd" :key="author._id">
            <RouterLink :to="'/authors/' + author._id" >{{ author.firstName }} {{ author.lastName }}</RouterLink> &nbsp;
            <button @click="deleteAuthor(author._id)">Delete</button> &nbsp;
            <RouterLink :to="'/authors/edit/' + author._id" >Edit Author</RouterLink>
        </li>
    </ul>
    <hr>
    <NewAuthor :updateData="updateData"/>
</template>