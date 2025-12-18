<template>
  <div>
    <h1>Blog Page</h1>
    <BlogList :posts="posts" @add-comment="addComment" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BlogList from '../components/BlogList.vue'

const posts = ref([
  { id: 1, title: 'Test Post', content: 'Lorem ipsum', comments: [] }
])

function addComment({ postId, comment }) {
  const post = posts.value.find(p => p.id === postId)
  post.comments.push(comment)
}
</script>
