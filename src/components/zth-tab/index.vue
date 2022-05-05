<template>
  <el-tabs v-model="activeName" v-bind="$attrs">
    <template v-for="(item, index) in listRef" :key="index">
      <el-tab-pane :="item.props">
        <draggable :list="item.children" :group="{ name: 'zth1' }" item-key="name" animation="300">
          <template #item="{ element }">
            <dynamic-component
              :component-path="element.componentPath ? element.componentPath : ''"
              :component-name="element.componentName ? element.componentName : ''"
              v-bind="composeProps(element)"
              :bus-handler="parseScript(element.props?.busHandler || '')"
              v-on="parseEvent(element)"
            >
            </dynamic-component>
          </template>
        </draggable>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>
<script lang="ts" setup>
import { parseScript } from '@/utils/parseScript'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { ref, onMounted, computed } from 'vue'
const props = defineProps<{ list: IGridLayoutProps[]; busHandler?: Function }>()
const activeName = ref(props.list[0].props?.name || 'first')

const composeProps = (element: IGridLayoutProps) => {
  return {
    ...element.props,
    list: element.children,
  }
}

const listRef = computed(() => {
  for (let index = 0; index < props.list.length; index++) {
    const item = props.list[index].children
    if (!item || item.length < 1) {
      item?.unshift({ name: 'skelet', componentPath: 'zth-skelet/index' })
    } else {
      for (let index = 0; index < item.length; index++) {
        const element = item[index]
        if (element.name === 'skelet') {
          item.splice(index, 1)
        }
      }
    }
  }
  return props.list
})

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
onMounted(() => {
  if (props.busHandler) {
    props.busHandler()
  }
})
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
