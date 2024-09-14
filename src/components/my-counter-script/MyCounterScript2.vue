<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="decrement()">-1</button>
      <button class="btn ml-2" @click="increment()">+1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>
.btn {
  @apply p-3 bg-blue-500 rounded hover:bg-blue-600;
}
</style>