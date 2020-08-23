import DialogComponent from './Dialog'
import PluginCore from './PluginCore'

export const Dialog = {
  install(Vue) {
    if (Vue.prototype.$dialog) return

    const plugin = new PluginCore(Vue)

    Object.defineProperty(Vue.prototype, '$dialog', {
      get: () => plugin
    })

    Vue.component('ui-dialog', DialogComponent)
  }
}
