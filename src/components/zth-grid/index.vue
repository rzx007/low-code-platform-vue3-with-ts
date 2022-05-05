<template>
  <draggable
    :list="list"
    :group="{ name: 'zth1' }"
    :component-data="$attrs"
    tag="el-row"
    item-key="name"
    animation="300"
  >
    <template #item="{ element }">
      <el-col :span="element.span || 24">
        <dynamic-component
          :component-path="element.componentPath ? element.componentPath : ''"
          :component-name="element.componentName ? element.componentName : ''"
          v-bind="composeProps(element)"
          :bus-handler="parseScript(element.props?.busHandler || '')"
          v-on="parseEvent(element)"
        >
        </dynamic-component>
      </el-col>
    </template>
  </draggable>
</template>
<script setup lang="ts">
import { parseScript } from '@/utils/parseScript'
import draggable from '@/vuedraggable/src/vuedraggable.js'

const props = defineProps<{ list: IGridLayoutProps[] }>()

const composeProps = (element: IGridLayoutProps) => {
  return {
    ...element.props,
    list: element.children,
  }
}
const parseEvent = (element: IGridLayoutProps) => {
  const event: { [x: string]: any } = {}
  if (element.events && element.events.length > 0) {
    element.events.forEach((item: IEvent) => {
      if (item.handler) {
        event[item.name] = parseScript(item.handler)
      }
    })
  }
  return event
}
</script>
<style></style>
