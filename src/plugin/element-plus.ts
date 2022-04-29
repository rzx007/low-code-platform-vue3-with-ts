import { App } from 'vue'
import { ElRow } from 'element-plus'
import 'element-plus/es/components/row/style/css'
import { ElTabPane } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
export const ElementPlugin = (app: App) => {
  app.component(ElRow.name, ElRow)
  app.component(ElTabPane.name, ElTabPane)
}
