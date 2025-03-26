import { computed, ref } from "vue";

export const useCounter = (initialValue: number) => {

  const counter = ref(initialValue);

const squareCounter = computed(() => counter.value * counter.value);
const increment = ref(() => counter.value++);
const decrement = ref(() => counter.value--);

  return {
    counter,
    squareCounter,
    increment,
    decrement,
  };

  };

