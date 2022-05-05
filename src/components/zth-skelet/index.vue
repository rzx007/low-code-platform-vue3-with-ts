<template>
  <div ref="self" class="zth-container-placeholder">拖拽组件或者模板到这里</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Hello World!')
const self = ref(null)
defineExpose({
  self,
})
</script>
<style lang="scss">
.zth-container-placeholder {
  height: 100%;
  width: 100%;
  min-height: 48px;
  background: #f1f1f1;
  border: 1px solid #e0e0e0;
  color: #a7b1bd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
