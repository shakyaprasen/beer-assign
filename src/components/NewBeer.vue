<template>
  <BaseModal title="Add a New Beer" @close="onCancel" @accept="onAccept">
    <form @submit.prevent class="px-6">
      <img
        src="@/assets/beer.png"
        class="h-28 border-gray-300 border-2 border-solid px-6 py-2 rounded-t-md"
      />
      <div class="flex-col mt-6 gap-4 grid">
        <input
          type="text"
          class="input"
          placeholder="Beer name*"
        />
        <input
          type="text"
          class="input"
          placeholder="Genre*"
        />
        <textarea
          class="textarea"
          placeholder="Description*"
          rows="4"
        ></textarea>
      </div>
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from './BaseModal.vue'

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
