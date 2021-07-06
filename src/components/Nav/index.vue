<template>
  <div class="header-nav">
    <!-- <div class="nav-container">
      <ul class="highlight-list right">
        <li v-for="linkMsg in linkMsgs" :key="linkMsg.pathname">
          <router-link :to="{ path: linkMsg.pathname }">{{ linkMsg.text }}</router-link>
        </li>
      </ul>
    </div> -->
    <div class="router-label">
      <HeaderNav></HeaderNav>
      <MainNav></MainNav>
    </div>
    <div class="router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeaderNav: () => import('@components/Nav/HeaderNav.vue'),
    MainNav: () => import('@components/Nav/MainNav.vue'),
  },

}
</script>

<style lang="scss" scoped>
.header-nav {
  min-width: 90vw;
  min-height: 150vh;
  margin: 0 auto;
  background-color: rgb(215, 223, 220);
  .router-label{

    position: sticky;
    top:0rem;
    
  }
  .router-content {
    width: 90vw;
    margin: 5rem auto;
  }
}
</style>
