import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import App from '@/views/App'

describe('App.vue', () => {
  it('renders App', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.text()).to.include('App')
  })
})
