<template>
  <ui-form class="note-form">
    <ui-form-item label="Название заметки">
      <ui-input
      @change="onSnapshot(noteForm)"
      v-model="noteForm.title">
      </ui-input>
    </ui-form-item>
    <ui-form-item label="Задачи">
      <todo-list
      @snap-form="onSnapshot(noteForm)"
      :todos="noteForm.todos"
      @delete-todo="deleteTodo"
      @add-todo="addTodo"
      @change-data="changeData">
      </todo-list>
    </ui-form-item>
    <ui-form-item v-if="type === 'edit'">
      <div class="action-buttons">
        <ui-button @click="$emit('save-note', noteForm)">
          Сохранить
        </ui-button>
        <div class="action-buttons__changes-buttons">
          <ui-button
          @click="undo"
          :disabled="snapshots.length ? false : true">
            <i class="el-icon-d-arrow-left"></i>
          </ui-button>
          <ui-button
          @click="redo"
          :disabled="redoSnapshots.length ? false : true">
            <i class="el-icon-d-arrow-right"></i>
          </ui-button>
        </div>
      </div>
    </ui-form-item>
  </ui-form>
</template>

<script>
import TodoList from '@/components/TodoList'
import { mapGetters } from 'vuex'
import { UndoRedo } from '@/ui/plugin'
export default {
  components: {
    TodoList
  },
  mixins: [ UndoRedo ],
  computed: {
    ...mapGetters(['noteForm', 'eventQueue']),
    type() {
      return this.$route.params.id ? 'edit' : 'create'
    }
  },
  mounted() {
    this.toAddFlagsToTasks()
  },
  beforeDestroy() {
    this.formCleaning()
  },
  methods: {
    toAddFlagsToTasks() {
      this.noteForm.todos = this.noteForm.todos.map(item => {
        item.toEdit = false
        return item
      })
    },
    deleteTodo(key) {
      this.noteForm.todos.splice(key, 1)
      this.onSnapshot(this.noteForm)
    },
    addTodo(todoInput) {
      this.noteForm.todos.push({
        title: todoInput,
        complete: false
      })
      this.onSnapshot(this.noteForm)
    },
    changeData(todo, key, toEdit) {
      todo.toEdit = toEdit
      this.noteForm.todos.splice(key, 1, todo)
    },
    formCleaning() {
      this.$store.commit('SET_FORM', {
        title: '',
        todos: []
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.note-form {
  margin: 50px 0;
  width: 50%;
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    flex-direction: column;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    &__changes-buttons {
      button {
        margin-right: 10px;
      }

      button:last-child {
        margin: 0;
      }
    }
  }
}

@media (max-width: 900px) {
  .note-form {
    width: 70%;
  }
}

@media (max-width: 630px) {
  .note-form {
    width: 100%;
  }

  .action-buttons {
    flex-direction: column-reverse;


    &__changes-buttons {
      display: flex;
      margin-bottom: 10px;

      button {
        flex: 1
      }
    }
  }
}

</style>