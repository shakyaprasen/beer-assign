<template>
  <div
    class="w-full bg-gray-50 flex justify-center items-center rounded-md text-gray-400 font-semibold"
  >
    <span class="text-center"
      >Nothing to see yet. <br />
      <button type="button" class="text-blue-600 p-0 border-none bg-transparent" @click="clicked">
        Click here
      </button>
      to add your first beer!
    </span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()

function clicked() {
  emit('click')
}
</script>
