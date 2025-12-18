import { mount } from '@vue/test-utils'
import BlogPost from '../components/BlogPost.vue'

const post = { id: 1, title: 'Test Post', content: 'Lorem', comments: [] }

describe('BlogPost', () => {
  test('renders post title and content', () => {
    const wrapper = mount(BlogPost, { props: { post } })
    expect(wrapper.text()).toContain('Test Post')
    expect(wrapper.text()).toContain('Lorem')
  })

  test('emits add-comment when comment added', async () => {
    const wrapper = mount(BlogPost, { props: { post } })
    await wrapper.vm.$emit('add-comment', { postId: 1, comment: 'Nice!' })
    expect(wrapper.emitted()['add-comment']).toBeTruthy()
  })
})
