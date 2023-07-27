<template>
  <ul class="grid grid-cols-1 gap-6 xl:grid-cols-2 h-fit">
    <template v-for="(item, index) in props.items" :key="index">
      <CardItem :img="item.image_url" :ingredients="getIngredients(item.ingredients)">
        <template #name>{{ item.name }} </template>
        <template #description>{{ item.description }} </template>
        <template #tag>{{ item.tagline }} </template>
      </CardItem>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import CardItem from './CardItem.vue'
import type { Beer, MyBeerSchema } from '../types/beer.interface'
import type { Output } from 'valibot'

const props = defineProps({
  items: {
    type: Array as PropType<Array<Output<typeof MyBeerSchema> | Beer>>,
    default: () => []
  }
})

function getIngredients(ingredients: Beer['ingredients']) {
  return 'Ingredients: ' + Object.keys(ingredients).join(', ')
}
</script>
