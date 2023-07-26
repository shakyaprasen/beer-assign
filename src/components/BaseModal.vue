<template>
  <div
    class="fixed inset-0 overflow-y-auto z-50 flex bg-gray-500 bg-opacity-75 items-center justify-center"
    @click.self="onCancel"
  >
    <div class="bg-white rounded overflow-x-visible shadow-md z-50 flex flex-col">
      <div class="flex-grow">
        <div class="flex flex-row justify-between align-top shadow-drop-bottom">
          <div class="p-6 text-2xl font-semibold">
            {{ title }}
          </div>
        </div>
        <div class="">
          <slot></slot>
        </div>
      </div>
      <slot name="footer">
        <div class="p-6 flex-shrink-0 mt-auto flex justify-end shadow-drop-top">
          <button type="button" class="button-transparent" @click="onCancel">Cancel</button>
          <button type="button" class="ml-6 button" @click="onAccept">Save</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})

const emits = defineEmits<{
  (event: 'close'): void
  (event: 'accept'): void
}>()

const onAccept = (_event: Event) => {
  emits('accept')
}

const onCancel = (_event: Event) => {
  emits('close')
}
</script>
