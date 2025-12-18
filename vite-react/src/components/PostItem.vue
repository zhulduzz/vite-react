<template>
  <li>
    <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
    <button @click="$emit('delete', post.id)">Удалить</button>
  </li>
</template>

<script setup lang="ts">
defineProps<{ post: { id: number; title: string } }>()
</script>
