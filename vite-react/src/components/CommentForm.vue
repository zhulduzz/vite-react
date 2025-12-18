<template>
  <form @submit.prevent="submit">
    <input v-model="text" placeholder="Add comment" />
    <button>Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const emit = defineEmits(['submit'])

function submit() {
  emit('submit', text.value)
  text.value = ''
}
</script>
