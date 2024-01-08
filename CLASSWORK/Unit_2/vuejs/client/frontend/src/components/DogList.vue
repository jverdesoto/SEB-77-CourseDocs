<script setup>
defineProps({
    list: Array
})
</script>

<template>

<div class="container">
  <h1>Hello Dog</h1>
    <ul class="list-group mt-3">
        <li v-for="dog in list" :key="dog.id" class="list-group-item">
            <a :href="'/dog/' + dog.id"> 
                <img :src="dog.img" :alt="dog.breed" height="100px" >
            </a> <br>
            <a :href="'/dog/' + dog.id">
                <strong>{{ dog.name }}</strong> 
            </a> <br>
            {{ dog.age }} years old <br>
            {{ dog.breed }}


        </li>
    </ul>
    <a href="cat/fact">Get a cat fact</a>
</div>

</template>

<style scoped>

</style>