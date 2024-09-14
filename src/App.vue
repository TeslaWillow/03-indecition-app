<template>
  <h1 class="text-3xl font-bold underline">
    My app
  </h1>
  <hr />

  <MyCounter :value="5" />

  <hr />

  <MyCounterScript :value="10" />

  <hr />

  <MyCounterScript2 :value="15" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<style></style>