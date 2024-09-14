import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      squareCounter,
      increment,
      decrement,
    };
  },
});
