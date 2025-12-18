<template>
  <div id="app">
    <NavBar />
    <main id="main-content">
      <BlogPage />
    </main>
    <footer>
      <p>&copy; 2025 Lolita Blog</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import BlogPage from './components/BlogPage.vue'
</script>

<style scoped>
#app {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background-color: #fff0f5; /* лолита-пастель */
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#main-content {
  flex: 1;
  padding: 20px;
}
footer {
  text-align: center;
  padding: 10px;
  background-color: #ffe4e1;
}
</style>



