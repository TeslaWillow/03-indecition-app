import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<MyCounter />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 15,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
  });

  test('Increments the counter when click on btn add + 1', async () => {
    let value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const btnIncrement = wrapper.find('button.btn.ml-2');
    await btnIncrement.trigger('click');

    value++;
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
  });
  test('Decrements the counter when click on btn less - 1', async () => {
    let value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const btnDecrement = wrapper.find('button.btn');
    await btnDecrement.trigger('click');

    value--;
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
  });
});
