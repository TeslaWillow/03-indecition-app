import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { expect, describe, test } from 'vitest';

const mockChatMessage = {
  template: '<div data-testid="mock-message">Mock ChatMessage</div>',
};

describe('<IndecisionView />', () => {
  test('Renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  test('Calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessage,
        },
      },
    });
    // Simulate custom event
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hola Mundo');

    await new Promise((r) => setTimeout(r, 150));
  });
});
