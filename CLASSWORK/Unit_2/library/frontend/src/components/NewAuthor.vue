<script setup>
    import { ref, defineProps } from 'vue';
    
    const { updateData } = defineProps(['updateData'])
    
    const author = ref({
        firstName: '',
        lastName: ''
    })

    function addAuthor() {
        if (author.value.firstName === '' || author.value.lastName === '') {
            alert('All fields are required')
            return
        }

        fetch(`${import.meta.env.VITE_API_URL}/authors/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author.value)
        })
        .then (() => {
            updateData()
        })
        .then (res => {
            author.value = {
                firstName: '',
                lastName: ''
            }
            console.log(res);
        })
        .catch(err => console.error(err))
    }
</script>

<template>
    <h3>Add a new author</h3>
    <div class="authorForm">
        <label for="firstName">First Name: *</label>
        <input type="text" name="firstName" placeholder="Title" v-model="author.firstName" required>
        <label for="lastName">Last Name: *</label>
        <input type="text" name="lastName" placeholder="Title" v-model="author.lastName" required>
        <button @click="addAuthor">Add Author</button>
    </div>
</template>