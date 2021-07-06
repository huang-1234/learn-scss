<template>
  <div class="nav-container">
    <ul class="highlight-list right">
      <li v-for="linkMsg in linkMsgs" :key="linkMsg.pathname">
        <!-- router-link的tag属性表示将link组件渲染成什么组件，默认为a标签.
        replace属性表示替换导航，就不具备和push效果的返回历史导航 。
        .router-link-active 点击的那个link增加样式-->
        <router-link :to="{ path: linkMsg.pathname }" tag="a">{{ linkMsg.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkMsgs: [
        { pathname: "/layout", text: "Layout" },
        { pathname: "/behavior", text: "behavior" },
        { pathname: "/color", text: "color" },
        { pathname: "/figure", text: "figure" },
        { pathname: "/compo", text: "compo" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  .router-link-active{
    color:red;
  }
  /* position: -webkit-sticky;
  position: sticky;
  top: 0.5rem; */
  background-color: #e8eeec;

  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  .highlight-list {
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 600px;
    height: 60px;
    & + .highlight-list {
      margin-top: 10px;
    }
    li {
      padding: 0 10px;
      height: 40px;
      background-color: #e8eeec;
      line-height: 40px;
      font-size: 16px;
      color: rgb(43, 39, 39);
    }
    &.left li {
      & + li {
        margin-left: 10px;
      }
      &:last-child {
        margin-left: auto;
      }
    }
    &.right li {
      & + li {
        margin-left: 10px;
      }
      &:first-child {
        margin-right: auto;
      }
    }
  }
}
</style>