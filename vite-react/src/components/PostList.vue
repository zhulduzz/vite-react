<template>
  <PostForm />
  <ul>
    <PostItem 
      v-for="post in store.posts" 
      :key="post.id" 
      :post="post" 
      @delete="store.removePost"
    />
  </ul>
</template>

<script setup lang="ts">
import { usePostStore } from '../stores/posts'
import PostItem from './PostItem.vue'
import PostForm from './PostForm.vue'

const store = usePostStore()
</script>
