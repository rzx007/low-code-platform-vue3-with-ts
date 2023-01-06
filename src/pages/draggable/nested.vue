<template>
  <draggable v-model="list" :group="{ name: 'zth1' }" item-key="name" animation="300" @add="add">
    <template #item="{ element }">
      <div :class="[checkedId === element.id ? 'zth-borders-selected' : '']" @click.stop="seclectComponent(element)">
        <dynamic-component
          :component-path="element.componentPath ? element.componentPath : ''"
          :component-name="element.componentName ? element.componentName : ''"
          v-bind="composeProps(element)"
          :bus-handler="parseScript(element.props?.busHandler || '')"
          v-on="parseEvent(element)"
        >
          <!-- <nested-draggable v-if="element.children && element.children.length > 0" :tasks="element.children" /> -->
        </dynamic-component>
      </div>
    </template>
  </draggable>
  <zth-raw-displayer :value="list" title="List" />
</template>
<script lang="ts">
import bus from '@/utils/bus'
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
      checkedId: '',
      wiltheList: ['zth-grid', 'zth-tab'],
    }
  },
  methods: {
    // 生成不重复的key
    generateKey() {
      return Math.random().toString(36).substr(2, 9)
    },
    add(e: any) {
      console.log(e)
    },
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
    seclectComponent(item: IGridLayoutProps) {
      if (this.checkedId === item.id) {
        this.checkedId = ''
      } else {
        this.checkedId = item.id
      }
      bus.emit('seclect-component', item)
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
.zth-borders-selected {
  z-index: 2;
  border: 1px solid #197aff;
  border-width: 2px;
}
</style>
