<script setup>
import ItemsBox from '@/components/ItemsBox.vue'
import {LEFT_ITEMS, RIGHT_ITEMS} from '@/constants.js'
import SelectedItems from "@/components/SelectedItems.vue";

const tdClass = 'basis-1/2 bg-zinc-800 border-zinc-800 border'
</script>

<template>
  <main class="flex flex-wrap min-h-screen">
    <div :class="tdClass">1</div>
    <SelectedItems :class="tdClass" />
    <ItemsBox :items="LEFT_ITEMS" :class="tdClass" />
    <ItemsBox :items="RIGHT_ITEMS" :class="tdClass" />
  </main>
</template>

<style scoped></style>
