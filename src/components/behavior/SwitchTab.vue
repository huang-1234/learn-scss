<template>
  <div class="switch-tab">
    <div class="container">
      <div class="nav-box">
        <button class="nav-A">Tab-A</button>
        <button class="nav-B">Tab-B</button>
        <div class="content-box">
          <div class="content-A">content-A</div>
          <div class="content-B">content-B</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.switch-tab {
  .container {
    width: 300px;
    margin: 50px auto;
    padding: 10px;
    border: 1px solid #ddd;
  }

  .nav-box {
    font-size: 0;
  }

  button {
    width: 150px;
    height: 64px;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 18px;
    cursor: pointer;
  }

  button:focus-within {
    color: #fff;
    background: #ffcc00;
  }

  .content-box {
    font-size: 24px;
    border: 1px solid #ddd;
    height: 100px;
    div {
      display: none;
    }
  }

  .nav-box:not(:focus-within) {
    .nav-A {
      color: #fff;
      background: #ffcc00;
    }

    .content-A {
      display: block;
    }
  }

  .nav-A:focus-within ~ .content-box .content-A {
    display: block;
  }

  .nav-B:focus-within ~ .content-box .content-B {
    display: block;
  }

  // .nav-box:focus-within {
  //     .nav-A:focus ~ .content-box .content-A {
  //         display: block;
  //     }

  //     .nav-B:focus ~ .content-box .content-B {
  //         display: block;
  //     }
  // }
}
</style>