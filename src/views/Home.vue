<template>
  <div class="home">
    <page-title>Список заметок</page-title>
    <note-list
    @delete-note="deleteNote"
    :notes="notes">
    </note-list>
    <create-dialog
    @add-note="addNote">
    </create-dialog>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import CreateDialog from '@/components/NoteCardCreateDialog'
import NoteList from '@/components/NoteList'
import noteMixin from '@/mixins/noteMixin'
import { mapGetters } from 'vuex'

export default {
  components: {
    PageTitle,
    NoteList,
    CreateDialog
  },
  mixins: [ noteMixin ],
  computed: {
    ...mapGetters(['notes'])
  },
}
</script>

<style lang="scss" scoped>

</style>
