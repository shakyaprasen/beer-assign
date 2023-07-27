<template>
  <BaseModal title="Add a New Beer" @close="onCancel" @accept="onAccept">
    <form @submit.prevent class="px-6">
      <img
        :src="beerData.image_url"
        class="h-28 border-gray-300 border-2 border-solid px-9 py-2 rounded-t-md"
      />
      <div class="flex-col mt-6 gap-4 grid">
        <input
          type="text"
          :class="[errors.name ? 'input-error' : 'input']"
          placeholder="Beer name*"
          v-model="beerData.name"
        />
        <input
          type="text"
          :class="[errors.tagline ? 'input-error' : 'input']"
          placeholder="Genre*"
          v-model="beerData.tagline"
        />
        <textarea
          placeholder="Description*"
          :class="[errors.description ? 'textarea-error' : 'textarea']"
          rows="4"
          v-model="beerData.description"
        ></textarea>
      </div>
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseModal from './BaseModal.vue'
import { MyBeerSchema } from '@/types/beer.interface'
import { parse, type Output, ValiError } from 'valibot'
import BeerImg from '@/assets/beer.png'

// @TODO: use a better random id generator
function generateId() {
  return Math.round(Math.random() * 10000)
}

function validate() {
  try {
    Object.keys(errors).forEach((key) => (errors[key as keyof typeof errors] = false))
    parse(MyBeerSchema, beerData)
    return true
  } catch (e: unknown) {
    if ((e as ValiError)?.name === 'ValiError') {
      ;(e as ValiError).issues.forEach(
        (issue) => issue?.path?.forEach((item) => (errors[item.key as keyof typeof errors] = true))
      )
    }
    return false
  }
}

const errors = reactive({
  name: false,
  tagline: false,
  description: false
})

const beerData = reactive<Output<typeof MyBeerSchema>>({
  id: generateId(),
  name: '',
  tagline: '',
  description: '',
  image_url: BeerImg,
  ingredients: {
    malt: [
      {
        name: 'new malt',
        amount: {
          value: 1,
          unit: 'kg'
        }
      }
    ],
    hops: [
      {
        name: 'new malt',
        amount: {
          value: 1,
          unit: 'kg'
        }
      }
    ],
    yeast: 'new yeast'
  }
})

const emits = defineEmits<{
  (event: 'close'): void
  (event: 'accept', beerData: Output<typeof MyBeerSchema>): void
}>()

const onAccept = (_event: Event) => {
  if (!validate()) {
    return
  }
  emits('accept', beerData)
}

const onCancel = (_event: Event) => {
  emits('close')
}
</script>
