<template>
  <NewBeer v-if="showNewBeer" @close="handleClose" @accept="handleAccept" />
  <EmptyBeer v-if="!myBeers?.length" @click="addBeer" />
  <CardContainer v-else :items="myBeers" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import EmptyBeer from '@/components/EmptyBeer.vue'
import NewBeer from '@/components/NewBeer.vue'
import CardContainer from '@/components/CardContainer.vue'
import type { Output } from 'valibot'
import type { MyBeerSchema } from '@/types/beer.interface'
import { getBeersFromLocalStorage, saveBeersToLocalStorage } from '@/utils/localStorage'

defineExpose({
  addBeer
})

const myBeers = ref<Array<Output<typeof MyBeerSchema>> | null>([])

const showNewBeer = ref(false)

function addBeer() {
  showNewBeer.value = true
}

function handleClose() {
  showNewBeer.value = false
}

function handleAccept(myBeer: Output<typeof MyBeerSchema>) {
  myBeers.value?.push(myBeer)
  showNewBeer.value = false
}

watch(
  () => myBeers.value,
  (newVal) => {
    if (newVal?.length) {
      saveBeersToLocalStorage(newVal)
    }
  },
  {
    deep: true
  }
)

onMounted(() => {
  const beers = getBeersFromLocalStorage()
  myBeers.value = beers
})
</script>
