<template>
  <div>
    <page-title>
      Редактирование заметки
      <template #buttons>
        <ui-button
        @click="onCancel(checkChanges)"
        type="plain">
          Отменить редактирование
        </ui-button>
        <ui-button
        @click="deleteNote"
        type="danger">
          Удалить заметку
        </ui-button>
      </template>
    </page-title>
    <note-form
    @delete-note="deleteNote"
    @save-note="editNote"
    @cancel="onCancel">
    </note-form>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import NoteForm from '@/components/NoteForm'
import noteMixin from '@/mixins/noteMixin'
import { isEqual, cloneObject } from '@/helpers'
import { mapGetters } from 'vuex'

export default {
  components: {
    PageTitle,
    NoteForm
  },
  mixins: [ noteMixin ],
  computed: {
    ...mapGetters(['notes', 'noteForm']),
    checkChanges() {
      const initialStateNote = this.getDataById(this.noteForm.id)
      return isEqual(initialStateNote, this.noteForm)
    },
  },
  created() {
    this.setForm()
  },
  methods: {
    setForm() {
      const { id } = this.$route.params
      const currentNote = cloneObject(this.getDataById(id))
      if (!currentNote) return
      this.$store.commit('SET_FORM', currentNote)
    },
    getDataById(id) {
      return this.notes.find(item => item.id === id)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    margin-right: 15px;
  }
  
  button:last-child {
    margin: 0
  }

  @media (max-width: 430px) {
    button {
      margin: 0
    }

    button:last-child {
      margin-top: 10px
    }
  }
</style>