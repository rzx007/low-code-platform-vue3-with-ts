<template>
  <div class="zth-panel-container">
    <panel-header>组件库</panel-header>
    <div class="zth-panel-body">
      <div class="search-input">
        <el-input v-model="input2" placeholder="Type something" :prefix-icon="Search" />
      </div>
      <el-tabs v-model="activeName" class="panel-tabs" @tab-click="handleClick">
        <el-tab-pane name="first">
          <template #label>
            <span class="custom-tabs-label"> 原子组件 </span>
          </template>
          <atom></atom>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          <template #label>
            <span class="custom-tabs-label"> 精选组件 </span>
          </template>
          Config
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import panelHeader from '../common/panel-header.vue'
import atom from './widgets/atom.vue'
import { ref } from 'vue'
const input2 = ref('Hello World!')
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">
.zth-panel-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
  .zth-panel-body {
    height: calc(100% - 48px);
    border-top: 1px solid transparent;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .search-input {
      margin: 12px 16px;
    }
    .panel-tabs {
      .el-tabs__item {
        padding: 0px;
      }
      .custom-tabs-label {
        display: inline-block;
        padding: 0 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
