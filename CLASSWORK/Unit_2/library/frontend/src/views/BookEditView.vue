<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const bookId = route.params.id
//route.params.id replaces /:id

const book = ref({
    title: '',
    year: '',
    author: '',
    
})

function LoadBookData () {
    fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`)
    .then(res => res.json())
    .then(data => {
        book.value =  {
            title: data.title,
            year: data.year,
            author: data.author.name,
        }
        console.log(book.value);
    }) 
}



const updateBook = () => {
    fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book.value)
    })
    .then(() => {
        //replace or push same
        router.replace({name: 'books'})
    })
    .catch(err => console.error(err))

}

onMounted(LoadBookData)
</script>

<template>  
    <h1>Edit {{ book.title }}</h1>
    <div class="bookForm">
        <label for="title">Title: *</label>
        <input type="text" name="title" placeholder="Title" v-model="book.title" required>
        <label for="author">Author: *</label>
        <input type="text" name="author" placeholder="Author" v-model="book.author" required>
        <label for="Year">Publisihing Year: *</label>
        <input type="number" min="1500" name="year" placeholder="Year" v-model="book.year" required>
        <button @click="updateBook">Add Book</button>


        <!-- whenever button is clicked function will run vue syntax -->
    </div>
</template>