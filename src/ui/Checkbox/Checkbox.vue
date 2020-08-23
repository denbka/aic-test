<template>
  <label class="ui-checkbox">
    <input
    class="original-input"
    type="checkbox"
    :checked="value"
    v-on="{
      ...$listeners,
      input: event => $emit('input', event.target.checked)
    }">
    <span class="ui-checkbox-title">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  props: ['value'],
  mounted() {
  }
}
</script>

<style lang="scss">

  .ui-checkbox {
    margin: 10px 0;
    display: flex;
    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
  }
  .ui-checkbox-title {
    display: flex;
    align-items: center;
  }
  .ui-checkbox-title:before {
    content: '';
    display: flex;
    width: 20px;
    height: 20px;
    border: 2px solid rgb(219, 219, 219);
    margin-right: 5px;
    border-radius: 3px;
  }

  input:checked ~ .ui-checkbox-title:before {
    background: chartreuse;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

</style>
