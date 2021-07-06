<template>
  <div class="behavior">
    <Attr></Attr>
    <InvalidTable></InvalidTable>
    <BeautityRadio></BeautityRadio>
    <LoginRegister></LoginRegister>
    <LeaveNav></LeaveNav>
    <SwitchTab></SwitchTab>
    <FollowMouse></FollowMouse>
    <HiddenNav></HiddenNav>
  </div>
</template>

<script>
export default {
  components: {
    Attr: () => import('@components/behavior/Attr.vue'),
    InvalidTable: () => import('@components/behavior/InvalidTable.vue'),
    BeautityRadio: () => import('@components/behavior/BeautityRadio.vue'),
    LoginRegister: () => import('@components/behavior/LoginRegister.vue'),
    LeaveNav: () => import('@components/behavior/LeaveNav.vue'),
    SwitchTab: () => import('@components/behavior/SwitchTab.vue'),
    FollowMouse: () => import('@components/behavior/FollowMouse.vue'),
    HiddenNav: () => import('@components/behavior/HiddenNav.vue'),
  }
}
</script>

<style lang="scss" scoped>
</style>