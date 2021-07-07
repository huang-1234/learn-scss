<template>
  <div class="testAfter">
<span class="comment">//视频播放图标</span>
.course[data-type=<span class="string">"2"</span>] {
    .course__cover {
        &:before, &:after {
            content: <span class="string">''</span>;
            display: block;
            position: absolute;
            left: <span class="number">5</span>px;
            bottom: <span class="number">5</span>px;
        }
        &:after {   <span class="comment">//实现圈圈</span>
            width: <span class="number">20</span>px;
            height: <span class="number">20</span>px;
            border: <span class="number">2</span>px solid white;
            background: rgba(<span class="number">0</span>, <span class="number">0</span>, <span class="number">0</span>, .<span class="number">6</span>);
            border-radius: <span class="number">12</span>px;
            background-clip: padding-box;
        }
        &:before {  <span class="comment">//实现三角形</span>
            height: <span class="number">0</span>;
            width: <span class="number">0</span>;
            border-left: <span class="number">8</span>px solid white;
            border-top: <span class="number">5</span>px solid transparent;
            border-bottom: <span class="number">5</span>px solid transparent;
            margin-left: <span class="number">9</span>px;
            margin-bottom: <span class="number">7</span>px;
            z-index: <span class="number">5</span>;
        }
    }
}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>