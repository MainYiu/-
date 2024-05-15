import { type App } from 'vue'
import svgPlugin from './svgPlugin/index_svgPlugin.vue'

const gloableComponents = { svgPlugin }
export default {
  install(app: App) {
    Object.keys((key: string) => {
      app.component(key, gloableComponents[key])
    })
  }
}
