<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Item name" />
    <p v-if="error" style="color:red">{{ error }}</p>
    <button type="submit">Add Item</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useItemStore } from '../stores/items'

const name = ref('')
const error = ref('')
const store = useItemStore()

function submitForm() {
  if (!name.value || name.value.length < 3) {
    error.value = 'Name is required and must be at least 3 characters'
    return
  }
  store.addItem(name.value)
  name.value = ''
  error.value = ''
}
</script>
