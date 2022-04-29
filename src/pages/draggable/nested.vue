<template>
  <dynamic-component component-name="button">12</dynamic-component>
  <draggable v-model="list" :group="{ name: 'zth1' }" item-key="name">
    <template #item="{ element }">
      <dynamic-component
        :component-path="element.componentPath ? element.componentPath : ''"
        :component-name="element.componentName ? element.componentName : ''"
        v-bind="composeProps(element)"
        :bus-handler="parseScript(element.props?.busHandler || '')"
        v-on="parseEvent(element)"
      >
        <!-- <nested-draggable v-if="element.children && element.children.length > 0" :tasks="element.children" /> -->
      </dynamic-component>
    </template>
  </draggable>
  <zth-raw-displayer class="col-3" :value="list" title="List" />
</template>
<script lang="ts">
import { parseScript } from '@/utils/parseScript'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'nested-draggable',
  components: { draggable },
  props: {
    tasks: {
      type: Array as PropType<IGridLayoutProps[]>,
      required: true,
    },
  },
  data() {
    return {
      list: this.tasks,
      wiltheList: ['zth-grid', 'zth-tab'],
    }
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
        element.events.forEach((item: Ievent) => {
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
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
.el-row {
  padding: 12px;
  background-color: beige;
}
.element {
  background-color: aqua;
  margin: 0 12px;
}
</style>
