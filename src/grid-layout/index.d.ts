interface IGridLayoutProps {
  name?: string
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
