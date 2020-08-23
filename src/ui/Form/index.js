import FormComponent from './Form'
import FormItemComponent from './FormItem'

export const Form = {
  install(Vue) {
    Vue.component('ui-form', FormComponent)
    Vue.component('ui-form-item', FormItemComponent)
  }
}