<template>
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>

    <CommentList :comments="post.comments" />

    <CommentForm @submit="sendComment" />
  </article>
</template>

<script setup>
import CommentList from './CommentList.vue'
import CommentForm from './CommentForm.vue'

const props = defineProps(['post'])
const emit = defineEmits(['add-comment'])

function sendComment(text) {
  emit('add-comment', {
    postId: props.post.id,
    comment: text
  })
}
</script>
