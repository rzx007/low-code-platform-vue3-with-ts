<template>
  <el-tabs v-model="activeName" v-bind="$attrs">
    <template v-for="(item, index) in listRef" :key="index">
      <el-tab-pane :="item.props">
        <draggable
          :list="item.children"
          :group="{ name: 'zth1' }"
          item-key="name"
          animation="300"
          @add="
            () => {
              traverse(list)
            }
          "
        >
          <template #item="{ element }">
            <zth-render-components
              :active-id="checkedId"
              :element="element"
              @click.prevent.stop="seclectComponent(element)"
            >
            </zth-render-components>
          </template>
        </draggable>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>
<script lang="ts" setup>
import bus from '@/utils/bus'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { ref, onMounted, computed } from 'vue'
const props = defineProps<{ list: IGridLayoutProps[]; busHandler?: Function }>()
const activeName = ref(props.list[0].props?.name || 'first')
const checkedId = ref('')

const traverse = (list: IGridLayoutProps[]) => {
  list.forEach((item) => {
    if (!item.key) {
      item.key = Math.random().toString(36).substr(2)
    }
    if (item.children && item.children.length > 0) {
      traverse(item.children)
    }
  })
}
const seclectComponent = (item: IGridLayoutProps) => {
  if (checkedId.value === item.key) {
    checkedId.value = ''
  } else {
    //@ts-ignore
    checkedId.value = item.key
  }
  bus.emit('seclect-component', item)
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
