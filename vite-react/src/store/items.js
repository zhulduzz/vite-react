import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [] as { id: number; title: string }[]
  }),
  getters: {
    postCount: (state) => state.posts.length
  },
  actions: {
    addPost(title: string) {
      this.posts.push({ id: Date.now(), title })
    },
    removePost(id: number) {
      this.posts = this.posts.filter(p => p.id !== id)
    }
  }
})
