<template>
  <li class="flex bg-white rounded-s drop-shadow-md w-full py-6 pl-4 lg:pr-32 xl:pr-8 pr-8 cursor-pointer card">
    <div class="flex justify-center items-center w-1/6 card-img" v-tooltip="props.ingredients">
      <img :src="props.img" alt="beer image" class="xl:h-40 h-32 2xl:px-6"/>
    </div>
    <div class="flex w-full flex-col peer-hover:bg-white ml-4">
      <span class="text-2xl font-semibold md:text-3xl"><slot name="name"></slot></span>
      <span class="text-yellow-600 font-medium mt-2 text-sm md:text-base"><slot name="tag"></slot></span>
      <span class="mt-2 line-clamp-2 xl:line-clamp-3 text-sm md:text-base"><slot name="description"></slot></span>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true,
  }

})
</script>


