<template>
  <NavBar />

  <PostFilter v-model="search" />

  <!-- Loading -->
  <div v-if="loading" class="loading">Loading posts...</div>

  <!-- Error -->
  <div v-if="error" class="error">{{ error }}</div>

  <!-- Blog List -->
  <BlogList
    v-if="!loading && !error"
    :posts="filteredPosts"
    @add-comment="handleAddComment"
  />
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import NavBar from './NavBar.vue'
import PostFilter from './PostFilter.vue'
import BlogList from './BlogList.vue'

const search = ref('')
const posts = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch posts from API
async function fetchPosts() {
  loading.value = true
  error.value = null

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('Failed to fetch posts')
    const data = await res.json()

    // Преобразуем данные в формат с комментариями
    posts.value = data.slice(0, 10).map(post => ({
      id: post.id,
      title: post.title,
      content: post.body,
      comments: []
    }))
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})

// Фильтрация по поиску
const filteredPosts = computed(() =>
  posts.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

watch(search, (newVal) => {
  console.log('Search changed:', newVal)
})

// Добавление комментария
function handleAddComment({ postId, comment }) {
  const post = posts.value.find(p => p.id === postId)
  if (post) post.comments.push(comment)
}
</script>

<style scoped>
.loading {
  color: #ff6fb5;
  font-weight: 500;
  margin: 10px 0;
}
.error {
  color: red;
  font-weight: 600;
  margin: 10px 0;
}
</style>
