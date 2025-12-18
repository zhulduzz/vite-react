<template>
  <div id="app">
    <!-- Header / Navigation -->
    <NavBar />

    <!-- Main Landmark -->
    <main id="main-content">
      <BlogPage />
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2025 My Vue Blog</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import BlogPage from './components/BlogPage.vue';
</script>

<style scoped>
#main-content {
  padding: 20px;
}
</style>


