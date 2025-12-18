<template>
  <form @submit.prevent="submitPost">
    <input v-model="title" placeholder="Название поста" />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePostStore } from '../store/posts'

const store = usePostStore()
const title = ref('')

function submitPost() {
  if(title.value.trim().length < 3) return alert('Название слишком короткое')
  store.addPost(title.value)
  title.value = ''
}
</script>
