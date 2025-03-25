<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="increment">+1</button>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="decrement">-1</button>
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

<style scoped>

/* .btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
} */
</style>
