<template>
  <el-button type="primary" size="default" @click="clickEvent">{{ text }}</el-button>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ text?: string; busHandler?: Function }>(), {
  text: '查询',
})
const clickEvent = () => {
  props.busHandler ? props.busHandler() : ''
}
</script>
<style></style>
