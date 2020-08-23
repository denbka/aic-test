<template>
  <input
  class="ui-input"
  :type="type"
  :value="value"
  v-on="{
    ...$listeners,
    input: event => $emit('input', event.target.value)
  }">
</template>

<script>
export default {
  props: ['value', 'type'],
}
</script>

<style lang="scss" scoped>
  .ui-input {
    height: 36px;
    border: 1px solid #9b9b9b;
    padding-left: 10px;
    border-radius: 3px;
    outline: 0;
    transition: .2s;
    background: inherit;
  }

  .ui-input:focus {
    border-color: rgb(56, 107, 216);
  }
</style>