<template>
  <div class="container mx-auto px-4 py-10">
    <nav>
      <RouterLink to="/" activeClass="font-semibold" >All Beers</RouterLink>
      <RouterLink to="/my-beers" activeClass="font-semibold" class="pl-4">My Beers</RouterLink>
    </nav>
    <RouterView class="mt-3" />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
