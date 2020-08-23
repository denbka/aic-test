import ButtonComponent from './Button'

export const Button = {
  install(Vue) {
    Vue.component('ui-button', ButtonComponent)
  }
}