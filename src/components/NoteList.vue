<template>
  <div class="notes">
    <note-card
    v-for="note in notes"
    :note="note"
    :key="note.id"
    @delete-note="$emit('delete-note', note.id)"
    @click="routeToNote(note)">
    </note-card>
    <div class="notes__item notes__item--create">
      <button
      class="button-create"
      @click="$dialog.show('CreateDialog')">
        Создать заметку
      </button>
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'

export default {
  components: { NoteCard },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    routeToNote(note) {
      this.$store.commit('SET_FORM', note)
      this.$router.push(`/${note.id}/edit`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto auto;
    grid-gap: 50px;

    &__item {
      height: 300px;
      padding: 40px;
      cursor: pointer;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0px 5px 20px 1px rgba(42, 0, 141, 0.07);
      overflow: hidden;
      overflow-y: auto;
      position: relative;

      &--create {
        padding: 0;
        height: 40px;
        display: flex;
        
        .button-create {
          width: 100%;
          border: 0;
          background: #fff;
          cursor: pointer;
          outline: 0;
          border-radius: 6px;
        }

        .button-create:hover {
          background: linear-gradient(rgb(93, 171, 255), #2A8BF2);
          color: #fff;
        }
      }
    }

    &__item:hover {
      background: linear-gradient(#7CB8F7, #2A8BF2);
    }
  }

  @media (max-width: 480px) {
    .notes {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
</style>