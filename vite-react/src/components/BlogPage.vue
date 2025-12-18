<template>
  <NavBar />

  <PostFilter v-model="search" />

  <BlogList
    :posts="filteredPosts"
    @add-comment="handleAddComment"
  />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import NavBar from './NavigationBar.vue'
import PostFilter from './PostFilter.vue'
import BlogList from './BlogList.vue'

const search = ref('')

const posts = ref([
  { id: 1, title: 'Vue Basics', content: '...', comments: [] },
  { id: 2, title: 'Reactivity', content: '...', comments: [] }
])

const filteredPosts = computed(() =>
  posts.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

watch(search, (newVal) => {
  console.log('Search changed:', newVal)
})

function handleAddComment({ postId, comment }) {
  const post = posts.value.find(p => p.id === postId)
  post.comments.push(comment)
}
</script>
