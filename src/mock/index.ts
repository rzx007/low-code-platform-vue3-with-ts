export const list = [
  {
    id: '1',
    name: 'zth-button',
    label: '按钮',
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
    name: 'zth-row',
    label: '网格',
    componentPath: 'zth-grid/index',
    span: 12,
    props: {
      gutter: 20,
      justify: 'center',
    },
    children: [],
  },
  {
    id: '3',
    name: 'zth-tab',
    label: 'tab',
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
        children: [],
      },
      {
        id: '32',
        name: 'task 4-2',
        props: {
          label: 'tab2',
          name: 'tab2',
        },
        children: [],
      },
    ],
  },
  {
    id: '4',
    name: 'zth-table',
    label: '表格',
    componentPath: 'zth-table/index',
    props: {
      busHandler: `return function () {
        bus.on('query', (params) => {
        alert('接受外部组件的传值:'+params)
      }) }`,
    },
  },
] as IGridLayoutProps[]
