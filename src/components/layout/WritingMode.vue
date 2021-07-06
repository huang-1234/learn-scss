<template>
  <div class="writing-mode">
    <div class="bruce flex-ct-x" data-title="使用writing-mode排版竖向文本">
      <div class="vertical-text">
        <h3>情</h3>
        <p>
          我见犹怜，
          <br />爱不释手。
          <br />雅俗共赏，
          <br />君子好逑。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.vertical-text {
  /* writing-mode: vertical-rl; */
  h3 {
    padding-left: 20px;
    font-weight: bold;
    font-size: 0.75rem;
    color: #f66;
  }
  p {
    font-size: 0.75rem;
    line-height: 30px;
    color: #66f;
  }
}
</style>