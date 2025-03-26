<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-5 bg-green-500 rounded hover:bg-green-700 mr-2" @click=counter++>+1</button>
      <button class="p-5 bg-green-500 rounded hover:bg-green-700 mr-2" @click=counter-->-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
      value: { type: Number, required: true }
    },
  setup(props) {

    const { counter, squareCounter } = useCounter(props.value);

    return {
      counter,
      squareCounter,
    }}

  }
)
</script>
