<template>
  <div
    class="container mx-auto px-4 py-10 grid grid-cols-1 grid-rows-[minmax(1px,_auto)_1fr] min-h-screen"
  >
    <div class="flex justify-between mb-6">
      <nav class="text-gray-400 text-lg font-semibold">
        <RouterLink to="/" activeClass="text-xl active-text text-black">All Beers</RouterLink>
        <RouterLink to="/my-beers" class="pl-4" activeClass="text-xl text-black text-black"
          >My Beers</RouterLink
        >
      </nav>
      <button v-if="isMyBeer" type="button" class="button" @click="newBeer">Add a new beer</button>
    </div>
    <RouterView v-slot="{ Component }">
      <component ref="childRoute" :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import MyBeers from './pages/MyBeers.vue'

const route = useRoute()
const childRoute = ref<InstanceType<typeof MyBeers> | null>(null)

const isMyBeer = computed(() => route.path === '/my-beers')

function newBeer() {
  if (isMyBeer.value) {
    childRoute.value?.addBeer()
  }
}
</script>
