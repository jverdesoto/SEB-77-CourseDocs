<script setup>
import DogList from '@/components/DogList.vue'
import { ref, onMounted } from 'vue';

const API_URL = `${import.meta.env.VITE_API_URL}/dogs` 
let myDogs= ref([])

onMounted(() => {
  fetch(API_URL)
  .then( response => response.json())
  .then( result => {
      myDogs.value = result
  })
}
)

</script>

<template>
  <main>
    <DogList :list=myDogs />
  </main>
</template>
