interface IGridLayoutProps {
  key?: string
  id?: string
  name?: string
  label?: string
  componentPath?: string
  componentName?: string
  props?: Record<string, any>
  events?: IEvent[]
  extra?: IExtra
  style?: Record<string, any>
  children?: IGridLayoutProps[]
}

interface IEvent {
  name: string
  handler?: string
}
interface IExtra {
  span?: number
  display?: string
  [key: string]: any
}
