<template>
  <zth-container-border :element="element" v-bind="$attrs">
    <dynamic-component
      :component-path="element.componentPath ? element.componentPath : ''"
      :component-name="element.componentName ? element.componentName : ''"
      v-bind="composeProps(element)"
      :bus-handler="parseScript(element.props?.busHandler || '')"
      v-on="parseEvent(element)"
    >
    </dynamic-component>
  </zth-container-border>
</template>
<script lang="ts">
import { parseScript } from '@/utils/parseScript'
import { PropType, defineComponent } from 'vue'
export default defineComponent({
  name: 'zth-render-components',
  props: {
    element: {
      type: Object as PropType<IGridLayoutProps>,
      required: true,
    },
  },
  methods: {
    // 特殊组件props处理
    composeProps(element: IGridLayoutProps) {
      return {
        ...element.props,
        list: element.children,
      }
    },
    // 组件事件处理
    parseEvent(element: IGridLayoutProps) {
      const event: { [x: string]: any } = {}
      if (element.events && element.events.length > 0) {
        element.events.forEach((item: IEvent) => {
          if (item.handler) {
            event[item.name] = parseScript(item.handler)
          }
        })
      }
      return event
    },
    parseScript(str: string) {
      return parseScript(str)
    },
  },
})
</script>
<style></style>
