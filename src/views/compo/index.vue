<template>
  <div class="compo">
    <Counter></Counter>
  </div>
</template>

<script>
export default {
  name: "compo",
  components: {
    Counter: () => import('@components/compo/Counter.vue')
  }
}
</script>

<style>
</style>