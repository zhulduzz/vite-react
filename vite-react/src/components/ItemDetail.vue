<template>
  <div>
    <h2>Item Detail Page</h2>
    <p>Item ID: {{ itemId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Берём динамический параметр из URL
const route = useRoute()
const itemId = route.params.id
</script>
