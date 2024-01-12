<script setup>
defineProps ({
    list: Array
})
</script>
<!-- it has for loop by itself "v-for"  exclusive to vuejs -->
<template>
    <div class="container">
    <h1>Hello Dog</h1>
        <ul class="list-group mt-3">
            <li v-for="dog in list" :key="dog.id" class="list-group-item">
                <a :href="'/dog/' + dog.id">{{  dog.name }}</a>  - {{ dog.age }} years old
                <a :href="'/dog/' + dog.id"><img :src="dog.img" alt="Dog Image" style = "width: 50px"></a>
            </li>
        </ul>
        <a href="cats/fact">get a cat fact</a>
    </div>
</template>