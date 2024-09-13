import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const counter = ref(props.value ?? 5);
    const squareCounter = computed(() => counter.value * counter.value);

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
