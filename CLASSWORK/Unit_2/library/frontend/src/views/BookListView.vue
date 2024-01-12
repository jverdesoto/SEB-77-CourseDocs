<script setup>

    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router';
    import NewBook from '@/components/NewBook.vue';
    import { useCookies } from 'vue3-cookies'
    import { decodeCredential } from 'vue3-google-login'

    const { cookies } = useCookies()

    const booksBackEnd = ref([])
    const isLoggedIn = ref(false)
    const userName = ref('')

    onMounted(() => {
        updateData()
        checkSession()
    }) 

    function checkSession() {
    if ( cookies.isKey('user_session') ) {
        isLoggedIn.value = true
        const userData = decodeCredential(cookies.get('user_session'))
        userName.value = userData.given_name
    }
}

    function updateData() {
        fetch(`${import.meta.env.VITE_API_URL}/books`)
        .then(response => response.json())
        .then(result => {
            booksBackEnd.value = result
        })
    }

    function deleteBook(bookId) {
        fetch(`${import.meta.env.VITE_API_URL}/books/${bookId}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Book Deleted')
            updateData()
        })
        .catch(err => console.error(err))
    }

    </script>

<template>
    <h1>Books List</h1>
    <ul>
        <li v-for="book in booksBackEnd" :key="book._id">
            <RouterLink :to="'/books/' + book._id" >{{ book.name }}</RouterLink> &nbsp;
            <button @click="deleteBook(book._id)">Delete</button> &nbsp;
            <RouterLink :to="'/books/edit/' + book._id">Edit Book</RouterLink>

        </li>
    </ul>
    <hr>

    <NewBook v-if="isLoggedIn" :updateData="updateData"/>

</template>