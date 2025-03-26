<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click=counter++>+1</button>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click=counter-->-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';


const { counter, squareCounter } = useCounter(17);


// import { computed, ref } from 'vue';
// import { useCounter } from '../composables/useCounter';


// const { counter, increment, decrement, squareCounter } = useCounter(10);

// }

// const props = defineProps({
//   value: {
//     type: Number,
//     default: 0,
//     require: true,
//    }
// });


</script>

<style scoped>

/* .btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
} */
</style>
