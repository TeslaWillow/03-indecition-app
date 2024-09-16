import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';

describe('<ChatBubble />', () => {
  test('Render own message correcly', () => {
    const msg = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message: msg,
        itsMine: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(msg);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('Render recived message correctly', () => {
    const msg = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message: msg,
        itsMine: false,
      },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300 img').exists()).toBeFalsy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(msg);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
  });

  test('Render recived message correctly with image', () => {
    const msg = 'Hola mundo';
    const img = 'https://picsum.photos/200';
    const wrapper = mount(ChatBubble, {
      props: {
        message: msg,
        itsMine: false,
        image: img,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300 img').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300 img').attributes('src')).toBe(img);
    expect(wrapper.find('.bg-gray-300').text()).toContain(msg);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
  });
});
