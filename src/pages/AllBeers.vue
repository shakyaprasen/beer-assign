<template>
  <main>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <div v-else-if="data">
      <span v-if="isFetching && !isFetchingNextPage">Fetching...</span>
      <CardContainer :items="pages"> </CardContainer>
      <div class="flex justify-center">
        <button
          @click="() => fetchNextPage()"
          :disabled="!hasNextPage || isFetchingNextPage"
          class="text-blue-500 mt-8 font-medium hover:text-blue-600"
        >
          <span v-if="isFetchingNextPage">Loading more </span>
          <span v-else-if="hasNextPage">Load More <down class="h-4 w-4 inline-block" /></span>
          <span v-else>Nothing more to load</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query'
import { computed } from 'vue'

import Down from '@/assets/chevron-down.svg?component'
import { getBeers } from '@/api/calls';
import CardContainer from '../components/CardContainer.vue'

const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isLoading,
  isError
} = useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: getBeers,
  getNextPageParam: (_, pages) => {
    return pages.length + 1
  }
})

const pages = computed(() => {
  return data.value?.pages.flat()
})
</script>
