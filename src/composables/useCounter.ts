import { ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);

  const squareCounter = computed(() => counter.value * counter.value);

  // const increment = () => { counter.value++; };
  // const decrement = () => { counter.value--; };
  return {
    counter,
    squareCounter,
  };
};
