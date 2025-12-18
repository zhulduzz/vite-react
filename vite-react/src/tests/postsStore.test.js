import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '../stores/posts.js'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('Pinia store sets posts correctly', () => {
  const store = usePostsStore()
  store.setPosts([{ id: 1, title: 'Test' }])
  expect(store.posts.length).toBe(1)
  expect(store.posts[0].title).toBe('Test')
})
