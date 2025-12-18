import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: []
  }),
  actions: {
    setPosts(data) {
      this.posts = data
    }
  }
})
