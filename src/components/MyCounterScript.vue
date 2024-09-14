<template>
  <section class="mb-3">
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="decrement()">-1</button>
      <button class="btn ml-2" @click="increment()">+1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    const increment = () => { counter.value++; };
    const decrement = () => { counter.value--; };

    return {
      counter,
      squareCounter,
      increment,
      decrement,
    }
  },
});
</script>

<style scoped>
.btn {
  @apply p-3 bg-green-600 rounded hover:bg-green-800 text-white;
}
</style>