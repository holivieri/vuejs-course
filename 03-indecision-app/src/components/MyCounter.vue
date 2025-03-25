<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    require: true,
   }
});

const counter = ref(props.value);

const squareCounter = computed(() => counter.value * counter.value);
const increment = ref(() => counter.value++);
const decrement = ref(() => counter.value--);
</script>
