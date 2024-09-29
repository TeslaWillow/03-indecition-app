import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'Mund', itsMine: false, image: 'http://img.jpg' },
];

describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages: messages },
  });

  test('Renders chat messages correctly', () => {
    // Find components
    const chatBubbles = wrapper.findAllComponents({
      name: 'ChatBubble',
    });

    console.log(chatBubbles.length);
  });

  test('Scrolls down to the bottom if messages fill the screen', async () => {
    const scrollToMock = vi.fn();

    // console.log( wrapper.vm.$refs.chatRef );
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
    });

    await new Promise((r) => {
      setTimeout(r, 150);
    });

    // Called (No matter how many times)
    expect(scrollToMock).toHaveBeenCalled();
    // Times
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    // Args
    expect(scrollToMock).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });
});
