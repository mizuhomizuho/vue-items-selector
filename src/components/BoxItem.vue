<script setup>
import { isBoxItemValid } from '@/validators.js'

defineProps({
  boxItem: {
    required: true,
    type: Object,
    validator: isBoxItemValid,
  },
})
</script>

<template>
  <li
    class="truncate bg-zinc-900 border border-zinc-800 p-3 justify-center flex items-center cursor-pointer"
  >
    {{ boxItem.name }}
  </li>
</template>

<style scoped></style>
