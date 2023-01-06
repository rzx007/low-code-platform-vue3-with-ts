<template>
  <el-table :data="TbaleData" border stripe>
    <el-table-column v-for="col in columns" :key="col.prop" :prop="col.prop" :label="col.label" :width="col.width">
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { ref, defineComponent, PropType, nextTick } from 'vue'
type ColumnProps = {
  type?: string
  prop: string
  label: string
  width?: number
  align?: 'left' | 'right' | 'center'
}
export default defineComponent({
  props: {
    busHandler: {
      type: Function as PropType<Function>,
      default: () => {
        //to do
      },
    },
    columns: {
      type: Array as PropType<ColumnProps[]>,
      default: () => [
        {
          prop: 'name',
          label: 'Name',
        },
        {
          prop: 'age',
          label: 'Age',
        },
        {
          prop: 'address',
          label: 'Address',
        },
      ],
    },
  },
  data() {
    return {
      TbaleData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sidney No. 1 Lake Park',
        },
      ],
    }
  },
  mounted() {
    nextTick(() => {
      if (this.busHandler) {
        this.busHandler()
      }
    })
  },
})
</script>
<style></style>
