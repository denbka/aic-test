import { generateID } from '@/helpers'

export default {
  methods: {
    addNote(data) {
      this.$store.commit('ADD_NOTE', {
        ...data,
        id: generateID()
      })
      this.$dialog.hide('CreateDialog')
    },
    editNote(data) {
      this.$store.commit('EDIT_NOTE', data)
      this.$dialog.show('ActionDialog', {
        title: 'Изменения сохранены',
        message: 'Вернуться на главную или продолжить изменения?',
        buttons: [
          {
            title: 'На главную',
            handler: () => {
              this.$dialog.hide('ActionDialog')
              this.$router.push('/')
            }
          },
          {
            title: 'Остаться',
            handler: () => {
              this.$dialog.hide('ActionDialog')
            }
          }
        ]
      })
    },
    deleteNote(id) {
      const noteId = this.$route.params.id ? this.$route.params.id : id
      this.$dialog.show('ActionDialog', {
        title: 'Подтверждение удаления',
        message: 'Вы точно хотите удалить данную заметку?',
        buttons: [
          {
            title: 'Удалить',
            handler: () => {
              this.$store.commit('DELETE_NOTE', noteId)
              this.$dialog.hide('ActionDialog')
              this.$router.push('/')
            }
          },
          {
            title: 'Отмена',
            handler: () => {
              this.$dialog.hide('ActionDialog')
            }
          }
        ]
      })
    },
    async onCancel(isChanges) {
      if (isChanges) {
        this.$router.push('/')
        return
      }
      this.$dialog.show('ActionDialog', {
        title: 'Подтверждение действия',
        message: 'Вы точно хотите перейти на главную?',
        buttons: [
          {
            title: 'Да',
            handler: () => {
              console.log(this.$dialog);
              this.$dialog.hide('ActionDialog')
              this.$router.push('/')
            }
          },
          {
            title: 'Отмена',
            handler: () => {
              this.$dialog.hide('ActionDialog')
            }
          }
        ]
      })
    },
  }
}