<template>
  <draggable
    v-model="list"
    class="dragArea"
    :group="{ name: 'zth1' }"
    item-key="name"
    animation="300"
    @add="add"
  >
    <template #item="{ element }">
      <div
        :class="[checkedId === element.key ? 'zth-borders-selected' : '']"
        @click.prevent="seclectComponent(element)"
      >
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
      list: JSON.parse(JSON.stringify(this.tasks)),
      checkedId: '',
      wiltheList: ['zth-grid', 'zth-tab'],
    }
  },
  methods: {
    // 数组递归遍历
    traverse(list: IGridLayoutProps[]) {
      list.forEach((item) => {
        if (!item.key) {
          item.key = Math.random().toString(36).substr(2)
        }
        if (item.children && item.children.length > 0) {
          this.traverse(item.children)
        }
      })
    },
    add(e) {
      console.log(e)
      this.traverse(this.list)
    },
    // 生成不重复的key
    generateKey() {
      return Math.random().toString(36).substr(2, 9)
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
      if (this.checkedId === item.key) {
        this.checkedId = ''
      } else {
        //@ts-ignore
        this.checkedId = item.key
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
  padding: 12px;
  box-sizing: border-box;
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
