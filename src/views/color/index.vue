<template>
  <div class="color">
    <TextSelect></TextSelect>
  </div>
</template>

<script>
export default {
  name: "color",
  components: {
    TextSelect: () => import('@components/colorShow/TextSelect.vue')
  }
}
</script>

<style>
</style>