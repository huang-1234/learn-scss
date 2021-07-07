<template>
  <div class="underline-nav">
    <div class="bruce flex-ct-x" data-title="下划线跟随导航栏">
      <ul class="underline-navbar">
        <li v-for="label in navLabels" :key="label.enText">{{ label.enText }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  naem: "underline",
  data() {
    return {
      navLabels: [
        { enText: "Alibaba", chText: "阿里巴巴" },
        { enText: "Tencent", chText: "腾讯" },
        { enText: "Jingdong", chText: "京东" },
        { enText: "Netease", chText: "网易" },
        { enText: "ByteDance", chText: "字节跳动" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.underline-nav {
  /* @import url('./underline.scss') */
  .underline-navbar {
    display: flex;
    li {
      position: relative;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
      color: #09f;
      transition: all 300ms;
      &::before {
        position: absolute;
        left: 100%;
        top: 0;
        border-bottom: 2px solid transparent;
        width: 0;
        height: 100%;
        content: "";
        transition: all 300ms;
      }
      &:active {
        background-color: #09f;
        color: #fff;
      }
      &:hover {
        &::before {
          left: 0;
          top: 0;
          z-index: -1;
          border-bottom-color: #09f;
          width: 100%;
          transition-delay: 100ms;
        }
        & + li::before {
          left: 0;
        }
      }
    }
  }
}
</style>