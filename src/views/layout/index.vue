<template>
  <div class="layout">
    <Rem class="compo layout-inline"></Rem>
    <TextAlign class="compo layout-inline"></TextAlign>
    <WritingMode class="compo layout-inline"></WritingMode>
    <ObjectFit class="compo"></ObjectFit>
    <OverflowX class="compo"></OverflowX>
    <TextOverflow class="compo"></TextOverflow>
    <MarginLeft class="compo"></MarginLeft>
  </div>
</template>

<script>
// import Rem from '@components/layout/Rem.vue'
export default {
  components: {
    Rem: () => import('@components/layout/Rem.vue'),
    TextAlign: () => import('@components/layout/TextAlign.vue'),
    WritingMode: () => import('@components/layout/WritingMode.vue'),
    ObjectFit: () => import('@components/layout/ObjectFit.vue'),
    OverflowX: () => import('@components/layout/OverflowX.vue'),
    TextOverflow: () => import('@components/layout/TextOverflow.vue'),
    MarginLeft: () => import('@components/layout/MarginLeft.vue')
  }
}
</script>

<style lang="scss" scoped>
.layout {
  margin-bottom: 1.5rem;
  .compo {
    margin-bottom: 1.5rem;
  }
  .layout-inline {
    display: inline-block;
    bottom: 20rem;
  }
}
</style>