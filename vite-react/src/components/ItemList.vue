<template>
  <ul>
    <li v-for="item in store.items" :key="item.id">
      {{ item.name }}
      <button @click="store.removeItem(item.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useItemStore } from '../store/items'
const store = useItemStore()
</script>
