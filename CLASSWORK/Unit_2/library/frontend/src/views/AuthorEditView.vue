<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const authorId = route.params.id
//route.params.id replaces /:id

const author = ref({
    name: '',
    age: '',
    from: '',
})

// function LoadAuthorData () {
//     fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`)
//     .then(res => res.json())
//     .then(data => {
//         author.value = {
//             name: data.name,
//             age: data.age,
//             from: data.from,
//         }
//     })

// }
function LoadAuthorData () {
    fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`)
    .then(res => res.json())
    .then(data => {
        author.value =  {
            name: data.name,
            age: data.age,
            from: data.from,
        }
    }) 
}


function updateAuthor () {
    fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(author.value)
    })
    .then(() => {
        router.replace({name: 'authors'})
    })
    .catch(err => console.error(err))
    

}

onMounted(LoadAuthorData)

</script>

<template>
    <h1>Edit {{ author.name }}</h1>
    <div class="authorForm">
        <label for="name">Name: *</label>
        <input type="text" name="name" placeholder="Name" v-model="author.name" required>
        <label for="age">Age: *</label>
        <input type="text" name="age" placeholder="Age" v-model="author.age" required>
        <label for="from">From: *</label>
        <input type="text" name="from" placeholder="From" v-model="author.from" required>
        <button @click="updateAuthor">Add Author</button>
        <!-- whenever button is clicked function will run vue syntax -->
    </div>


</template>