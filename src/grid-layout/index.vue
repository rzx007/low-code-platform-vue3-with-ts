<template>
  <div class="zth-engine-main">
    <div class="zth-engine-header"></div>
    <div class="zth-workbench-body">
      <div class="zth-left">
        <grid-area></grid-area>
      </div>
      <div class="zth-fixed-pane"></div>
      <div class="zth-workbench-center">
        <div style="height: 2300px; width: 100%"></div>
      </div>
      <div class="zth-right"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gridArea from './grid-area/index.vue'
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>
<style lang="scss">
.zth-engine-main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #edeff3;
  .zth-engine-header {
    height: 48px;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 2px;
    padding: 8px 12px 8px 16px;
  }
  .zth-workbench-body {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    min-height: 0;
    position: relative;
    display: flex;
    .zth-left {
      height: 100%;
      width: 48px;
      background-color: #fff;
      flex-shrink: 0;
      overflow: hidden;
    }
    .zth-fixed-pane {
      margin-left: 1px;
      width: 300px;
      background-color: #fff;
      height: 100%;
      flex-shrink: 0;
      position: relative;
      z-index: 820;
    }
    .zth-workbench-center {
      flex: 1;
      z-index: 10;
      overflow: auto;
    }
    .zth-right {
      height: 100%;
      width: 300px;
      background-color: #fff;
      flex-shrink: 0;
      margin-left: 2px;
      position: relative;
    }
  }
}
</style>
