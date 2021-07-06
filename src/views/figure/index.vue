<template>
  <div class="figure">
    <ShapeByCss></ShapeByCss>
    <MaskDim></MaskDim>
  </div>
</template>

<script>
export default {
  name: 'Figure',
  components: {
    ShapeByCss: () => import('@components/figure/ShapeByCss.vue'),
    MaskDim: () => import('@components/figure/MaskDim.vue'),
  }
}
</script>

<style lang="scss" scoped>
.figure {
  width: 100%;
}
</style>