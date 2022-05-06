<template>
  <div :class="[activeId === element.key ? 'zth-borders-selected' : 'zth-border-container']">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'zth-container-border',
  props: {
    element: {
      type: Object as PropType<IGridLayoutProps>,
      required: true,
    },
    activeId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data() {
    return {
      display: 'inline-block',
    }
  },
  updated() {
    this.$nextTick(() => {
      this.display = this.element.extra?.display === 'inline' ? 'inline-block' : 'block'
    })
  },
})
</script>
<style lang="scss">
.zth-borders-selected {
  display: v-bind(display);
  z-index: 2;
  border: 1px solid #197aff;
  border-width: 2px;
}
.zth-border-container {
  box-sizing: border-box;
  display: v-bind(display);
  &:hover {
    border: 1px dashed #197aff;
  }
}
</style>
