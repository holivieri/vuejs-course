<template>
  <h1 class="text-3xl font-bold underline">
    Contador
  </h1>
  <MyCounter :value="1" ></MyCounter>
  <MyCounterScript :value="2"></MyCounterScript>
  <MyCounterScript2 :value="3"></MyCounterScript2>
</template>

<script lang="ts" setup>

import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';

</script>
