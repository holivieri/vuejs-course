<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-5 bg-orange-500 rounded hover:bg-orange-700 mr-2" @click=counter++>+1</button>
      <button class="p-5 bg-orange-500 rounded hover:bg-orange-700 mr-2" @click=counter-->-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts">

</script>
