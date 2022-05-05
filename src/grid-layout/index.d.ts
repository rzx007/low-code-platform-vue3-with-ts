interface IGridLayoutProps {
  key?: string
  id?: string
  name?: string
  label?: string
  componentPath?: string
  componentName?: string
  span?: number
  props?: Record<string, any>
  events?: IEvent[]
  children?: IGridLayoutProps[]
}

interface IEvent {
  name: string
  handler?: string
}
