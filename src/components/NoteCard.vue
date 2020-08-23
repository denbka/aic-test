<template>
  <div
  class="notes__item"
  @click="$emit('click')">
    <div class="title">
      <h3>{{note.title}}</h3>
    </div>
    <ul class="notes__item__todos">
      <li
      v-for="todo in isOpenList ? note.todos : note.todos.filter((item, key) => key < 3)"
      :key="todo.id">
        <i
        class="el-icon-check"
        :class="!todo.complete && 'hidden-icon'">
        </i>
        <span>{{todo.title}}</span>
      </li>
      <span
      class="notes__item__spoiler"
      @click.stop="isOpenList = !isOpenList"
      v-if="note.todos.length > 3">
        {{!isOpenList ? 'Открыть полностью' : 'Закрыть список'}}
      </span>
    </ul>
    <div
    class="delete-card-button"
    @click.stop="$emit('delete-note')">
      <i class="el-icon-delete"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    },
  },
  data: () => ({
    isOpenList: false
  })
}
</script>

<style lang="scss" scoped>

  .el-icon-check {
    margin-right: 5px;
  }
  .hidden-icon {
    opacity: 0;
  }

  .delete-card-button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 10px;
    border-radius: 50%;
    display: flex;
    padding: 10px;
    transition: .2s;
  }

  .el-icon-delete {
    color: red
  }

  .notes__item__spoiler:hover {
    color: #fff;
  }
</style>