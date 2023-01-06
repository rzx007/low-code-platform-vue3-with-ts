<template>
  <draggable
    v-model="list"
    class="dragArea"
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
      <zth-render-components :active-id="checkedId" :element="element" @click.prevent.stop="seclectComponent(element)">
      </zth-render-components>
    </template>
  </draggable>
  <zth-raw-displayer :value="list" title="List" />
</template>
<script lang="ts">
import bus from '@/utils/bus'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'grid-layout',
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
</style>
