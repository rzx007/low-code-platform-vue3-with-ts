<template>
  <div class="container-border">
    <slot>
      <zth-button ref="child"></zth-button>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'zth-container-border',
  mounted() {
    this.$nextTick(() => {
      console.log(this.$slots.default())

      // this.$refs.child.forEach((item: any) => {
      //   item.$el.style.border = '1px solid red'
      // })
    })
  },
  methods: {
    handleClick(e: MouseEvent) {
      console.log(e)
    },
  },
})
</script>
<style></style>
