<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script lang="ts">
const props = {
  title: {
    required: true,
    type: String,
  },
  value: {
    type: String,
    required: true,
  },
}
export default {
  name: 'zth-raw-displayer',
  props,
  computed: {
    valueString(): string {
      // ts-ignore
      return JSON.stringify(this.value, null, 2)
    },
  },
}
</script>
<style scoped>
pre {
  text-align: start;
}
</style>
