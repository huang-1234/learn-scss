<template>
  <div class="compo">
    <Counter></Counter>
    <UnderlineNav></UnderlineNav>
    <!-- <testAfterBefore></testAfterBefore> -->
    <LoveBubble></LoveBubble>
    <ReadGradient></ReadGradient>
    <AnimationError></AnimationError>
    <ShowState></ShowState>
    <StickyBall></StickyBall>
    <TicketVolume></TicketVolume>
    <LoadingTip></LoadingTip>
    <Cube class="inline"></Cube>
    <HoverCtrlBorder></HoverCtrlBorder>
    <h2>Nav 组件</h2>
    <ClickFold class="nav"></ClickFold>
    <SwitchContentTag class="nav"></SwitchContentTag>
    <SwitchContentNav class="nav"></SwitchContentNav>
    <h2>星级评分</h2>
    <StarRating></StarRating>
  </div>
</template>

<script>
export default {
  name: "compo",
  components: {
    Counter: () => import('@components/compo/Counter.vue'),
    UnderlineNav: () => import('@components/compo/UnderlineNav.vue'),
    // testAfterBefore: () => import('@components/compo/testAfterBefore.vue'),
    LoveBubble: () => import('@components/compo/LoveBubble.vue'),
    ReadGradient: () => import('@components/compo/ReadGradient.vue'),
    AnimationError: () => import('@components/compo/AnimationError.vue'),
    ShowState: () => import('@components/compo/ShowState.vue'),
    StickyBall: () => import('@components/compo/StickyBall.vue'),
    TicketVolume: () => import('@components/compo/TicketVolume.vue'),
    LoadingTip: () => import('@components/compo/LoadingTip.vue'),
    Cube: () => import('@components/compo/Cube.vue'),
    HoverCtrlBorder: () => import('@components/compo/HoverCtrlBorder.vue'),

    ClickFold: () => import('@components/compo/ClickFold.vue'),
    SwitchContentTag: () => import('@components/compo/SwitchContentTag.vue'),
    SwitchContentNav: () => import('@components/compo/SwitchContentNav.vue'),

    StarRating: () => import('@components/compo/StarRating.vue'),
  }
}
</script>

<style>
.inline {
  display: inline-block;
}
.nav {
  display: inline-block;
}
</style>