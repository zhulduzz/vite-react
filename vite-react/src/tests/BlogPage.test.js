import { mount } from '@vue/test-utils'
import BlogPage from '../components/BlogPage.vue'

describe('BlogPage', () => {
  test('renders search input', () => {
    const wrapper = mount(BlogPage)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  test('renders posts list', async () => {
    const wrapper = mount(BlogPage)
    await wrapper.setData({ posts: [{ id: 1, title: 'Test', content: '...' }] })
    expect(wrapper.text()).toContain('Test')
  })
})
