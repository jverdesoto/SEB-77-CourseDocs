<script setup>
defineProps({
    list: Array
})
</script>

<template>
    <div class="container">
    <h1>Hello Dog</h1>
    <ul class="list-group">
        <li v-for="dog in list" :key="dog.id" class="list-group-item">  
            <router-link :to="`/dog/${dog.id}`">{{ dog.name }}</router-link>
             - {{ dog.age }} years old
        </li>
    </ul>
</div>
</template>
