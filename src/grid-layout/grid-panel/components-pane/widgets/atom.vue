<template>
  <el-collapse>
    <el-collapse-item name="1">
      <template #title>
        <span class="coll-label">通用</span>
      </template>
      <draggable
        v-model="lists"
        class="category-coll"
        :group="{ name: 'zth1', pull: 'clone', put: false }"
        :sort="false"
        delay="100"
        item-key="id"
        :clone="add"
      >
        <template #item="{ element }">
          <div class="com-snippet">
            <div class="comp-icon">
              <img :src="'/imgs/' + element.name + '.png'" alt="" srcset="" />
            </div>
            <div class="com-name">{{ element.label }}</div>
          </div>
        </template>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>
<script setup lang="ts">
import { list } from '@/mock/index'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { reactive, ref } from 'vue'
const lists = ref(list)
const listsCopy = ref(list)
const add = (element: IGridLayoutProps) => {
  console.log(element)
  return JSON.parse(JSON.stringify(element))
}
</script>
<style lang="scss">
.coll-label {
  display: inline-block;
  padding-left: 16px;
}
.category-coll {
  display: flex;
  flex-wrap: wrap;
  .com-snippet {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 14px;
    align-items: center;
    width: 33.3333333333%;
    height: 114px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
    transition: box-shadow 0.2s ease;
    cursor: pointer;
    .comp-icon {
      width: 56px;
      height: 56px;
      margin: 0 1px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
