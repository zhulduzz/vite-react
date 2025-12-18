<template>
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :post="post"
    @add-comment="$emit('add-comment', $event)"
  />
</template>

<script setup>
import BlogPost from './BlogPost.vue'
defineProps(['posts'])
defineEmits(['add-comment'])
</script>
