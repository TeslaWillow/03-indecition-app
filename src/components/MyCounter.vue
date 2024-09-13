<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="decrement()">-1</button>
      <button @click="increment()">+1</button>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value?: number;
};

const props = defineProps<Props>();

const counter = ref(props.value ?? 5);

const squareCounter = computed(() => counter.value * counter.value);

const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
</script>