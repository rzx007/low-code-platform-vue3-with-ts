<template>
  <div class="zth-panel-title">
    <span class="title-text">
      <slot>标题</slot>
    </span>
    <div class="icon-text">
      <zth-icon icon="fixed_fill" style="margin-right: 10px"></zth-icon>
      <zth-icon icon="guanbi" title="关闭"></zth-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>
<style lang="scss">
.zth-panel-title {
  height: 48px;
  font-size: 16px;
  padding: 0 15px;
  color: #0f1726;
  font-weight: 700;
  line-height: 48px;
  position: relative;
  display: flex;
  justify-content: space-between;
  .title-text {
    color: #0f1726;
  }
  .icon-text {
    cursor: pointer;
  }
}
</style>
