<script setup>
import { isNumber, validateBoxItems } from '@/validators.js'
import BoxItem from '@/components/BoxItem.vue'
import { removePullItem, setPullItem } from '@/functions.js'

defineProps({
  items: {
    required: true,
    type: Array,
    validator: validateBoxItems,
  },
  pullForAdd: {
    required: false,
    type: Array,
    validator: validateBoxItems,
  },
  pullForRemove: {
    required: false,
    type: Array,
    validator: validateBoxItems,
  },
  limit: {
    required: false,
    type: Number,
    validator: isNumber,
  },
})
</script>

<template>
  <ul class="flex flex-wrap">
    <BoxItem
      class="basis-1/3"
      v-for="item in items"
      :key="item.id"
      :box-item="item"
      @click="
        pullForAdd
          ? setPullItem(pullForAdd, item, limit)
          : pullForRemove
            ? removePullItem(pullForRemove, item)
            : null
      "
    />
  </ul>
</template>

<style scoped></style>
