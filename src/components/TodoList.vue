<template>
  <ol class="todo-list">
    <li
    v-for="(todo, key) in todos"
    class="todo-list__item"
    :key="key">
      <div class="todo-list__item__container">
        <ui-checkbox
        @change="$emit('snap-form')"
        v-model="todo.complete">
        </ui-checkbox>
        <span
        @click="$emit('change-data', todo, key, true)"
        v-if="!todo.toEdit">
          {{todo.title}}
        </span>
        <ui-input
        @keyup.enter="$emit('change-data', todo, key, false)"
        v-model="todo.title"
        v-else>
        </ui-input>
        <div
        v-if="!todo.toEdit"
        class="delete-card-button"
        @click.stop="$emit('delete-todo', key)">
          <i class="el-icon-delete"></i>
        </div>
      </div>
    </li>
    <li class="todo-list__item">
      <div class="todo-list__item__container">
        <ui-input
        @keyup.enter="addTodo"
        v-model="todoInput">
        </ui-input>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    todoInput: '',
  }),
  methods: {
    addTodo() {
      this.$emit('add-todo', this.todoInput)
      this.todoInput = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-list {

    &__item {
      margin: 5px 0;

      &__container {
        display: flex;
        align-items: center;

        input {
          width: 100%;
        }

        .delete-card-button {
          margin-left: 10px;
          display: flex;
          padding: 10px;
          cursor: pointer;
        }

        .el-icon-delete {
          color: red
        }
      }
    }
  }
</style>