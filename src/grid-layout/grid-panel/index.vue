<template>
  <component :is="activePanel"></component>
</template>
<script setup lang="ts">
import componentsPane from './components-pane/index.vue'
import { ref } from 'vue'
const activePanel = componentsPane
</script>
<style></style>
