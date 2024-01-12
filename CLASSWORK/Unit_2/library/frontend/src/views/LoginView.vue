<script setup>
import { decodeCredential, googleLogout, GoogleLogin } from 'vue3-google-login'

</script>

<template>
    <h1>Login</h1>
    <div v-if="isLoggedIn"> 
        <h2> Hello {{ userName }}</h2>
        <button @click="hendleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin: callback="callback" />
    </div>
</template>