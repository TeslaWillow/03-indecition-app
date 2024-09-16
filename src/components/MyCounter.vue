<template>
  <section class="mb-3">
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter--">-1</button>
      <button class="btn ml-2" @click="counter++">+1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value?: number;
};

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);
</script>

<style scoped>
.btn {
  @apply p-3 bg-red-600 rounded hover:bg-red-800 text-white;
}
</style>