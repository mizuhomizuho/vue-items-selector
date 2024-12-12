<script setup>
import { validateBoxItems } from '@/validators.js'
import BoxItem from '@/components/BoxItem.vue'

defineProps({
  items: {
    required: true,
    type: Array,
    validator: validateBoxItems,
  },
})
</script>

<template>
  <ul class="flex flex-wrap">
    <BoxItem class="basis-1/3" v-for="item in items" :key="item.id" :box-item="item" />
  </ul>
</template>

<style scoped></style>
