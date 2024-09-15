import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';
import { describe, test } from 'vitest';

describe('<MyCounter />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    console.log(wrapper.html());
  });
});
