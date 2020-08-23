<template>
  <form class="form" @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
import FormItem from './FormItem'
export default {
  components: { FormItem }
}
</script>

<style lang="scss" scoped>

</style>