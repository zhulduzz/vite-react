import { mount } from '@vue/test-utils'
import BlogList from '../components/BlogList.vue'

const samplePosts = [
  { id: 1, title: 'Post 1', content: 'Content 1', comments: [] },
  { id: 2, title: 'Post 2', content: 'Content 2', comments: [] }
]

describe('BlogList', () => {
  test('renders all posts', () => {
    const wrapper = mount(BlogList, {
      props: { posts: samplePosts }
    })
    expect(wrapper.text()).toContain('Post 1')
    expect(wrapper.text()).toContain('Post 2')
  })

  test('emits add-comment event', async () => {
    const wrapper = mount(BlogList, { props: { posts: samplePosts } })
    await wrapper.vm.$emit('add-comment', { postId: 1, comment: 'Nice!' })
    expect(wrapper.emitted()['add-comment']).toBeTruthy()
  })
})
