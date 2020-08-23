<template>
  <div class="form__item">
    <div class="form__item__label" v-if="label">
      {{label}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .form__item {
    display: flex;
    flex-direction: column;

    &__label {
      margin: 15px 0 10px 0;
    }
  }
</style>