export default (Vue) => {
  const sub = new Vue()
  
  const show = (dialogName, props) => {
    if (props) {
      props.buttons.map(button => {
        sub.$on(button.title, button.handler)
      })
    }
    sub.$emit('toggle', { dialogName, visible: true, ...props })
  }

  const hide = (dialogName) => {
    sub.$emit('toggle', { dialogName, visible: false })
  }

  return {
    sub,
    show,
    hide,
  }
}