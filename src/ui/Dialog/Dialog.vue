<template>
  <div
  @click.self="clickToClose ? visible = false : null"
  class="dialog-overlay"
  v-if="visible">
    <div
    :style="{ width, height }"
    class="dialog-container"
    :class="adaptive && 'dialog-container--adaptive'">
      <h1 class="title">
        {{title.length ? title : null}}
        <slot name="title"></slot>
      </h1>
      <div
      class="message-container"
      v-if="message.length">
        <p>{{message}}</p>
      </div>
      <slot></slot>
      <div
      class="buttons"
      v-if="buttons.length">
        <ui-button
        v-for="(button,key) in buttons"
        :key="key"
        @click="$dialog.sub.$emit(button.title)">
          {{button.title}}
        </ui-button>
      </div>
      <div class="buttons" v-else>
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    clickToClose: {
      type: Boolean,
      required: false,
      default: true
    },
    containerClass: {
      type: String,
      required: false
    },
    adaptive: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({
    visible: false,
    buttons: [],
    message: '',
    title: ''
  }),
  beforeMount() {
    this.$dialog.sub.$on('toggle', this.onToggle)
  },
  methods: {
    onToggle({ dialogName, visible, message, title, buttons }) {
      if (buttons) this.buttons = buttons
      if (title) this.title = title
      if (message) this.message = message
      if (this.name !== dialogName) return
      this.visible = visible
      if (this.visible) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog-overlay ~ body {
    overflow-y: hidden;
  }

  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
  }

  .dialog-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;
  }

  .title {
    width: 100%;
    text-align: center;
    margin-top: 25px;
  }

  .message-container {
    margin: 0 25px;
    text-align: center;
  }

  .buttons {
    display: flex;
    
    button {
      flex: 1;
      background: transparent;
      color: rgb(34, 34, 34);
      border-top: 1px solid rgb(231, 231, 231);
      border-right: 1px solid rgb(231, 231, 231);
      border-radius: 0px;
      padding: 10px 0;
    }

    button:last-child {
      border-right: 0;
    }
    button:hover {
      color: #fff;
      background: linear-gradient(rgb(105, 175, 250), rgb(73, 161, 255));
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 8vw;
    }
  }

  @media (max-width: 750px) {
    .dialog-container--adaptive {
      width: 90vw !important;
      height: 70vh !important;
    }
  }

</style>