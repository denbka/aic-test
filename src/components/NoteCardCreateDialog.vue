<template>
  <ui-dialog
  width="50vw"
  height="500px"
  containerClass="note-card-create-dialog"
  name="CreateDialog">
    <template #title>Создание заметки</template>
    <template>
      <div class="container">
        <note-form></note-form>
      </div>
    </template>
    <template #buttons>
      <ui-button @click="$emit('add-note', noteForm)">Создать</ui-button>
      <ui-button @click="$dialog.hide('CreateDialog')">Отменить</ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import NoteForm from '@/components/NoteForm'
import PageTitle from './PageTitle'
import { mapGetters } from 'vuex'
export default {
  components: {
    NoteForm,
    PageTitle
  },
  computed: {
    ...mapGetters(['noteForm']),
  },
}
</script>

<style lang="scss" scoped>
  .container {
    // height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .create-note-dialog {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 750px) {
    .container {
      width: 90%;
      margin: 0 auto;
    }
  }

</style>