<template>
  <div>
    <div>
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import nestedDraggable from './nested.vue'
export default defineComponent({
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  components: {
    nestedDraggable,
  },
  data() {
    return {
      list: [
        {
          id: '1',
          name: 'task 1',
          componentPath: 'zth-button/index',
          // componentName: 'el-button',
          span: 12,
          props: {
            busHandler: `return function () { console.log(bus); bus.emit('query', '我是来自button的数据') }`,
            type: 'primary',
            text: '查询',
          },
        },
        {
          id: '2',
          name: 'task 3',
          componentPath: 'zth-grid/index',
          span: 12,
          props: {
            gutter: 20,
            justify: 'center',
          },
          children: [
            {
              id: '21',
              name: 'task 3-1',
              // componentName: 'el-button',
              componentPath: 'zth-button/index',
              span: 18,
              props: {
                type: 'danger',
                text: '危险',
              },
            },
            {
              id: '22',
              name: 'task 3-2',
              // componentName: 'el-button',
              componentPath: 'zth-button/index',
              span: 8,
              props: {
                text: '查询',
                type: 'warning',
              },
            },
            {
              id: '23',
              name: 'task 3-3',
              // componentName: 'el-button',
              componentPath: 'zth-button/index',
              span: 8,
              props: {
                type: 'primary',
                text: '查询',
              },
            },
          ],
        },
        {
          id: '3',
          name: 'task 4',
          componentPath: 'zth-tab/index',
          span: 12,
          props: {
            type: 'card',
          },
          events: [
            {
              name: 'tab-click',
              handler: `return function (data, event) { console.log(data, event); }`,
            },
          ],
          children: [
            {
              id: '31',
              name: 'task 4-1',
              props: {
                label: 'tab1',
                name: 'tab1',
              },
              children: [
                {
                  id: '311',
                  name: 'task 4-11',
                  componentPath: 'zth-button/index',
                  props: {
                    busHandler: `return function () { console.log(bus); bus.emit('query', '我是来自tab组件') }`,
                    type: 'success',
                    text: '保存',
                  },
                },
              ],
            },
            {
              id: '32',
              name: 'task 4-2',
              props: {
                label: 'tab2',
                name: 'tab2',
              },
              children: [
                {
                  id: '321',
                  name: 'task 4-21',
                  // componentName: 'el-button',
                  componentPath: 'zth-button/index',
                  props: {
                    type: 'danger',
                  },
                },
              ],
            },
          ],
        },
        {
          id: '4',
          name: 'task 2',
          componentPath: 'zth-table/index',
          props: {
            busHandler: `return function () {
              bus.on('query', (params) => {
              alert('接受外部组件的传值:'+params)
            }) }`,
          },
        },
      ] as IGridLayoutProps[],
    }
  },
})
</script>
<style scoped></style>
