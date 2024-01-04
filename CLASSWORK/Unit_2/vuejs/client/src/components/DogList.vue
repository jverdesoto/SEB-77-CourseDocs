<script setup>
    defineProps({
        list: Array
    })
</script>

<template>
    <h1>Hello Dog</h1>
    <ul>
        <li v-for="dog in list" :key="dog.id">{{ dog.name }} - {{ dog.age }} years old</li>
    </ul>
</template>
