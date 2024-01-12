<script setup>
import { ref, onMounted } from 'vue'
import DogList from '@/components/DogList.vue'
const API_URL = `${import.meta.env.VITE_API_URL}/dogs`
const myDogs = ref([])
// its one line code . is linked to fetch
onMounted(()=>{
fetch(API_URL) 
.then( response => response.json() )
.then( result => {
    myDogs.value = result
  })
})
</script>
<template>
  <main>
    <DogList :list=myDogs />
  </main>
</template>




