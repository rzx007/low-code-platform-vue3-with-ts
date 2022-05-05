<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script lang="ts">
export default {
  name: 'zth-raw-displayer',
  props: {
    title: {
      required: true,
      type: String,
    },
    value: {
      type: Array,
      required: true,
    },
  },
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
