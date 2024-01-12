<script setup>
    import { ref, defineProps } from 'vue';

    const { updateData } = defineProps(['updateData'])

    const book = ref({
        name: '',
        authorFirstName: '',
        authorLastName: ''
    })

    function addBook() {
        if (book.value.name === '' || book.value.authorFirstName === '' || book.value.authorLastName === '') {
            alert('All fields are required')
            return
        }

        fetch(`${import.meta.env.VITE_API_URL}/books/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book.value)
        })
        .then(() => {
            updateData()
        })
        .then(res => {
            book.value = {
                title: '',
                authorFirstName: '',
                authorLastName: ''
            }
            
            console.log(res);
        })
        .catch(err => console.error(err))

    }
</script>

<template>
    <h3>Add a new book</h3>

    <div class="bookForm">
        <label for="title">Title: *</label>
        <input type="text" name="name" placeholder="Title" v-model="book.name" required>
        <label for="author">Author's First Name: *</label>
        <input type="text" name="authorFirstName" placeholder="First Name" v-model="book.authorFirstName" required>
        <label for="author">Author's Last Name: *</label>
        <input type="text" name="authorLastName" placeholder="Last Name" v-model="book.authorLastName" required>
        <button @click="addBook">Add Book</button>
    </div>
</template>