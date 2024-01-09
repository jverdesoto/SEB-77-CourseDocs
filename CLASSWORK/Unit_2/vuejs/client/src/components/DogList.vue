<script setup>
    defineProps({
        list: Array
    })
</script>

<template>

    <div class="container">
        <h1 class="text-center">Hello Dog</h1>
        <ul class="list-group mt-3">
            <li v-for="dog in list" :key="dog.id" class="list-group-item list-group-item-actiont text-center p-3">
                <strong><router-link :to="{ name: 'dog', params: { id: dog.id } }"> {{ dog.name }} </router-link></strong>
                - {{ dog.age }} years old</li>
        </ul>
        <a href="cats/fact">Cat Fact</a>
    </div>

</template>

<style>

    h1 {
        font-family: 'Chalkduster', fantasy;
    }

    ul {
        font-family: 'Andale Mono', monospace;
    }

    li {
        width: 300px;
    }
</style>