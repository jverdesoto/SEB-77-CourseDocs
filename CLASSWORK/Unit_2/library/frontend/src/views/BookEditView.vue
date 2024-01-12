<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const bookId = route.params.id

const book = ref({
    name: '',
    author: ''
})

function loadBookData() {
    fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`)
    .then(res => res.json())
    .then(data => {
        book.value = {
            name: data.name,
            authorFirstName: data.author.firstName,
            authorLastName: data.author.lastName
        }
    })
}

function updateBook() {
    fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(book.value)
    })
    .then(() => {
        router.replace({ name: 'books'})
    })
    .catch(err => console.error(err))
}

onMounted(loadBookData)

</script>

<template>
    <h1>Edit {{book.name}}</h1>
    <div class="bookEditForm">
        <label for="title">Title: *</label>
        <input type="text" name="name" placeholder="Title" v-model="book.name" required>
        <label for="author">Author's First Name: *</label>
        <input type="text" name="authorFirstName" placeholder="First Name" v-model="book.authorFirstName" required>
        <label for="author">Author's Last Name: *</label>
        <input type="text" name="authorLastName" placeholder="Last Name" v-model="book.authorLastName" required>
        <button @click="updateBook">Update</button>
    </div>
</template>