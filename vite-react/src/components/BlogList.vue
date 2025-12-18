<template>
  <transition-group name="fade" tag="div">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :class="{ highlighted: post.comments.length > 0 }"
      @add-comment="$emit('add-comment', $event)"
    />
  </transition-group>
</template>

<script setup>
import BlogPost from './BlogPost.vue'

defineProps(['posts'])
defineEmits(['add-comment'])
</script>

<style scoped>
/* Scoped styles — действуют только внутри BlogList.vue */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Dynamic class: подсветка поста, если есть комментарии */
.highlighted {
  border: 1px solid #ff82c9;
  background-color: #ffe6f2;
  border-radius: 12px;
  padding: 8px;
  transition: all 0.3s ease;
}
</style>
