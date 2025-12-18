import { reactive } from 'vue'

export function usePosts() {
  const posts = reactive<{ id: number; title: string }[]>([])
  const addPost = (title: string) => posts.push({ id: Date.now(), title })
  return { posts, addPost }
}
