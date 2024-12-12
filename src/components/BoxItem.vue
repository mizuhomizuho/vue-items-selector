<script setup>
import { isBoxItemValid } from '@/validators.js'

const props = defineProps({
  boxItem: {
    required: true,
    type: Object,
    validator: isBoxItemValid,
  },
})

const classes = [
  'truncate border border-zinc-800 p-3 justify-center flex items-center cursor-pointer',
  props.boxItem.color,
]
</script>

<template>
  <li :class="classes">
    {{ boxItem.name }}
  </li>
</template>

<style scoped></style>
