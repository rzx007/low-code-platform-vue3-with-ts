<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="name" />
  </svg>
</template>

<script>
import './iconfont.js'
export default {
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
    },
  },
  data() {
    return {
      name: '#icon-' + this.icon,
    }
  },
}
</script>
<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
