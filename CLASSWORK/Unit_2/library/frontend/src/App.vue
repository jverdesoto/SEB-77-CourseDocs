<script setup>
import { RouterLink, RouterView } from 'vue-router'


// set cookies here? before login
</script>

<template>
  <header>

  
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/books">Book List</RouterLink>
        <RouterLink to="/authors">Author List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>