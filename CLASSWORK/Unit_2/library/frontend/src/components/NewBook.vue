<script setup>
import { ref } from 'vue'
//because we are using eslink format errors not coding.
// {} deconstruct fetch
const {fetchData} = defineProps(['fetchData'])
const book = ref({
    title: '',
    author: '',
    year: '',
})
function addBook() {
    if( book.value.title === '' || book.value.author === '' || book.value.year === '' ) {
        alert('All values are required')
        return
    }
    //this fetch first line is a get request 
    fetch(`${import.meta.env.VITE_API_URL}/books/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book.value)
    })
    .then(res => {
        book.value= {
        title: '',
        author: '',
        year: ''
        }
        console.log(res)
        
    })
    .catch(err => console.error(err))
}

</script>

<template>
    <h3>Add a new book</h3>
    <div class="bookForm">
        <label for="title">Title: *</label>
        <input type="text" name="title" placeholder="Title" v-model="book.title" required>
        <label for="author">Author: *</label>
        <input type="text" name="author" placeholder="Author" v-model="book.author" required>
        <label for="Year">Publisihing Year: *</label>
        <input type="number" min="1500" name="Year" placeholder="Year" v-model="book.year" required>
        <button @click="addBook">Add Book</button>
        <!-- whenever button is clicked function will run vue syntax -->
    </div>
</template>