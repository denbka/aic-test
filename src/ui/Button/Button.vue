<template>
  <button
  :disabled="disabled"
  class="ui-button"
  :class="[getTypeClass, getDisabled]"
  v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    getTypeClass() {
      switch (this.type) {
        case 'primary':
        return 'ui-button__primary'
        case 'danger':
        return 'ui-button__danger'
        case 'plain':
        return 'ui-button__plain'
      }
    },
    getDisabled() {
      return this.disabled ? 'ui-button__disabled-button' : ''
    }
  }
}
</script>

<style lang="scss" scoped>

.ui-button {
  border: 0;
  color: #fff;
  padding: 8px 30px;
  cursor: pointer;
  outline: 0;
  border-radius: 6px;

  &__primary {
    background: linear-gradient(rgb(93, 171, 255), rgb(55, 146, 243));
  }

  &__danger {
    background: rgb(226, 74, 74);
  }

  &__plain {
    background: transparent;
    color: #000;
    border: 1px solid rgb(139, 139, 139);
  }

  &__disabled-button {
    cursor: auto;
    background: rgb(168, 207, 248);
  }
}

</style>