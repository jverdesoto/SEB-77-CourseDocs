<script setup>
import DogList from '@/components/DogList.vue';
import { ref, onMounted } from 'vue';

  const API_URL = 'http://localhost:4000/dogs'
  const myDogs = ref([])

  onMounted(() => {
    fetch(API_URL)
    .then(response => response.json() )
    .then ( result => {
      myDogs.value = result
    })
  })


</script>

<template>
  <main>
    <DogList :list= myDogs />
  </main>
</template>
