<script setup>
import ItemsBox from '@/components/ItemsBox.vue'
import { LEFT_ITEMS, RIGHT_ITEMS } from '@/constants.js'
import { ref } from 'vue'
import { getGoodItems } from '@/functions.js'

const tdClass = 'basis-1/2 bg-zinc-800 border-zinc-800 border'

const leftItems = ref([])
const rightItems = ref([])

const leftGoodItems = getGoodItems(LEFT_ITEMS)
const rightGoodItems = getGoodItems(RIGHT_ITEMS)
</script>

<template>
  <main class="flex flex-wrap min-h-screen">
    <ItemsBox :items="leftItems" :pull-for-remove="leftItems" :class="tdClass" />
    <ItemsBox :items="rightItems" :pull-for-remove="rightItems" :class="tdClass" />
    <ItemsBox :items="leftGoodItems" :pull-for-add="leftItems" :limit="6" :class="tdClass" />
    <ItemsBox :items="rightGoodItems" :pull-for-add="rightItems" :limit="1" :class="tdClass" />
  </main>
</template>

<style scoped></style>
