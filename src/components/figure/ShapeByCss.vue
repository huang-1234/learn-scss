<template>
  <div class="shape">
    <div class="inbl" id="square"></div>
    <div class="inbl" id="circle"></div>
    <div class="inbl" id="oval"></div>
    <div class="inbl" id="triangle-up"></div>
    <div class="inbl" id="triangle-down"></div>
    <div class="inbl" id="star-six"></div>
    <div class="inbl" id="star-five"></div>

    <div class="inbl" id="yin-yang"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.shape {
  .inbl {
    display: inline-block;
  }
  #square {
    width: 100px;
    height: 100px;
    background: red;
  }
  #circle {
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50%;
  }
  #oval {
    width: 200px;
    height: 100px;
    background: red;
    border-radius: 100px / 50px;
  }
  @import url('./shape.scss/triangle.scss');
  @import url('./shape.scss/six-star.scss');
  @import url("./shape.scss/five-star.scss");
  @import url('./shape.scss/yin-yang.scss');
}
</style>