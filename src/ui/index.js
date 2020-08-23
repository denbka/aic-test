import {
  Button,
  Input,
  Checkbox,
  Dialog,
  Form,
} from './plugin'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Checkbox)
    Vue.use(Dialog)
    Vue.use(Form)
  }
}