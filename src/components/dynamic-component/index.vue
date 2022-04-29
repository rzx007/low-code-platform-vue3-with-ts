<template>
  <component :is="AsyncComp" v-bind="$attrs">
    <slot />
  </component>
</template>
<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
const props = defineProps<{
  componentPath?: string
  componentName?: string
}>()
const AsyncComp = computed(() => {
  if (props.componentPath) {
    return defineAsyncComponent(() => import(`../${props.componentPath}.vue`))
  }
  return props.componentName
})
</script>
<style></style>
