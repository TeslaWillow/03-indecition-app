import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('Renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
  });

  test('Emit sendMessage event when button is clicked with message value', async () => {
    const msg = 'Hola mundo';
    await wrapper.find('input[type="text"]').setValue(msg);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([msg]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('Emit sendMessage event when keypress.enter is trigger', async () => {
    const msg = 'Hola mundo';
    const input = wrapper.find('input[type="text"]');
    await input.setValue(msg);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([msg]);
  });

  test('Emit sendMessage event when keypress.enter is trigger', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input[type="text"]');
    await input.trigger('keypress.enter'); // enter
    await wrapper.find('button').trigger('click'); // click

    expect(wrapper.emitted('sendMessage')?.[0]).toBeFalsy();
  });
});
