<script setup>
import { ref } from 'vue'

const author = ref({
    name: '',
    age: '',
    from: '',
})

function addAuthor() {
    if( author.value.name === '' || author.value.age === '' || author.value.from === '') {
        alert('All values are required')
        return
    }
    fetch(`${import.meta.env.VITE_API_URL}/authors/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(author.value)
    })
    .then(res => {
        author.value = {
        name: '',
        age: '',
        from: '',
        }
        console.log(res)
    })
    .catch(err => console.error(err))

}

</script>

<template>
    <h3>Add a new author</h3>
    <div class="authorForm">
        <label for="name">Name: *</label>
        <input type="text" name="name" placeholder="Name" v-model="author.name" required>
        <label for="age">Age: *</label>
        <input type="text" name="age" placeholder="Age" v-model="author.age" required>
        <label for="from">From: *</label>
        <input type="text" name="from" placeholder="From" v-model="author.from" required>
        <button @click="addAuthor">Add Author</button>
        <!-- whenever button is clicked function will run vue syntax -->
    </div>


</template>