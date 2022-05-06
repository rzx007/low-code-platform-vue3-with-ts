<template>
  <draggable
    :list="list"
    :group="{ name: 'zth1' }"
    :component-data="$attrs"
    tag="el-row"
    item-key="name"
    animation="300"
    @add="
      () => {
        traverse(list)
      }
    "
  >
    <template #item="{ element }">
      <el-col :span="Number(element.extra?.span) || 24">
        <zth-render-components
          :active-id="checkedId"
          :element="element"
          @click.prevent.stop="seclectComponent(element)"
        >
        </zth-render-components>
      </el-col>
    </template>
  </draggable>
</template>
<script lang="ts">
import bus from '@/utils/bus'
import draggable from '@/vuedraggable/src/vuedraggable.js'
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  name: 'zth-grid',
  components: { draggable },
  props: {
    list: {
      type: Array as PropType<IGridLayoutProps[]>,
      required: true,
    },
  },
  data() {
    return {
      checkedId: '',
    }
  },
  methods: {
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
<style lang="scss">
.el-row {
  padding: 12px;
  background-color: beige;
}
</style>
