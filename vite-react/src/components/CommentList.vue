<template>
  <ul v-show="comments.length">
    <li v-for="(c, i) in comments" :key="i">
      {{ c }}
    </li>
  </ul>
</template>

<script setup>
defineProps(['comments'])
</script>
