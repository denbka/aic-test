import { cloneObject } from '@/helpers'

export const UndoRedo = {
  data: () => ({
    snapshots: [],
    redoSnapshots: [],
    initialState: null
  }),
  mounted() {
    if (!this.noteForm || (this.noteForm && !this.noteForm.title.length)) return
    this.initialState = cloneObject(this.noteForm)
  },
  methods: {
    onSnapshot(form, isRedoRemove = true) {
      this.snapshots.push(cloneObject(form))
      if (isRedoRemove) this.redoSnapshots.splice(0, this.redoSnapshots.length)
    },
    undo() {
      if (this.snapshots.length) this.redoSnapshots.push(this.snapshots.pop())
      this.cleanForm()
      if (!this.snapshots.length) {
        this.$store.commit('SET_FORM', cloneObject(this.initialState))
        return
      }
      this.$store.commit('SET_FORM', this.snapshots[this.snapshots.length-1])
    },
    redo() {
      if (this.redoSnapshots.length) this.onSnapshot(this.redoSnapshots.pop(), false)
      this.cleanForm()
      if (!this.snapshots.length) {
        this.$store.commit('SET_FORM', cloneObject(this.initialState))
        return
      }
      this.$store.commit('SET_FORM', this.snapshots[this.snapshots.length-1])
    },
    cleanForm() {
      this.$store.commit('SET_FORM', {
        title: '',
        todos: []
      })
    }
  }
}