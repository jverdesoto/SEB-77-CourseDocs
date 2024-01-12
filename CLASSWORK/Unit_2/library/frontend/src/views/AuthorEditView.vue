<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const authorId = route.params.id

const author = ref({
    firstName: '',
    lastName: ''
})

function loadAuthorData() {
    fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`)
    .then(res => res.json())
    .then(data => {
        author.value = {
            firstName: data.firstName,
            lastName: data.lastName
        }
    })
}

function updateAuthor() {
    fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author.value)
    })
    .then(() => {
        router.replace({ name: 'authors'})
    })
    .catch(err => console.error(err))
}

onMounted(loadAuthorData)

</script>

<template>
    <h1>Edit Author</h1>

    <div class="authorEditForm">
        <label for="firstName">First Name: *</label>
        <input type="text" name="firstName" placeholder="Title" v-model="author.firstName" required>
        <label for="lastName">Last Name: *</label>
        <input type="text" name="lastName" placeholder="Title" v-model="author.lastName" required>
        <button @click="updateAuthor">Update</button>
    </div>
</template>