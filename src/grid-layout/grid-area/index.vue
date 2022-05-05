<template>
  <div class="grid-area">
    <div class="grid-area-top">
      <span
        v-for="(item, index) in gridAreaTop"
        :key="index"
        :class="['area-icon', topAvtive === item.value ? 'area-icon-active' : '']"
        :title="item.label"
        @click="setTopActive(item.value)"
      >
        <zth-icon :icon="item.icon"></zth-icon>
      </span>
    </div>
    <div class="grid-area-bottom">
      <span
        v-for="(item, index) in gridAreaBottom"
        :key="index"
        :class="['area-icon', topAvtive === item.value ? 'area-icon-active' : '']"
        :title="item.label"
        @click="setTopActive(item.value)"
      >
        <zth-icon :icon="item.icon"></zth-icon>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const topAvtive = ref('2')
const gridAreaTop = ref([
  { icon: 'shuxing', label: 'outLine tree', value: '1' },
  { icon: 'zujian', label: '组件库', value: '2' },
  { icon: 'data-management', label: '数据源', value: '3' },
  { icon: 'js', label: '源码面板', value: '4' },
])

const gridAreaBottom = ref([
  { icon: 'wenhao', label: '如何使用', value: '5' },
  { icon: 'json-schema', label: 'Schema', value: '6' },
])

const setTopActive = (value: string) => {
  topAvtive.value = value
}
</script>
<style lang="scss">
.grid-area {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  .grid-area-top {
    padding-top: 12px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }
  .grid-area-bottom {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }
  .area-icon {
    display: inline-block;
    height: 46px;
    width: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
  .area-icon-active {
    color: #1890ff !important;
  }
}
</style>
