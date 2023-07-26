<template>
  <NewBeer v-if="showNewBeer" @close="handleClose" @accept="handleAccept" />
  <EmptyBeer @click="addBeer" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import EmptyBeer from '@/components/EmptyBeer.vue'
import NewBeer from '@/components/NewBeer.vue'

defineExpose({
  addBeer
})

const showNewBeer = ref(false)

function addBeer() {
  showNewBeer.value = true
}

function handleClose() {
  showNewBeer.value = false
}

function handleAccept() {
  showNewBeer.value = false
}
</script>

<style></style>
