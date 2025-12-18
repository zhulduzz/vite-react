<template>
  <nav aria-label="Main navigation">
    <button
      @click="toggle"
      :aria-expanded="open.toString()"
      aria-controls="nav-title"
    >
      Toggle Menu
    </button>

    <p v-if="open" id="nav-title">My Blog</p>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(true)

function toggle() {
  open.value = !open.value
}
</script>

