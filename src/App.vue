<template>
  <div id="app">
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <ui-dialog
    width="600px"
    height="200px"
    name="ActionDialog">
    </ui-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['notes'])
  },
  mounted() {
    this.setStoreData()
  },
  methods: {
    setStoreData() {
      const items = this.getDataFromLocalStorage()
      if (!items) return
      this.$store.commit('SET_ITEMS', items)
    },
    getDataFromLocalStorage() {
      if (!localStorage.getItem('notes')) return
      return JSON.parse(localStorage.getItem('notes'))
    },
  },
}
</script>

<style lang="scss">

@font-face {
  font-family: 'TTNorms';
  src: url('./assets/fonts/TTNorms-Medium.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'TTNorms';
  src: url('./assets/fonts/TTNorms-Bold.ttf');
  font-weight: 700;
}

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  background: linear-gradient(#F3F3FB, #FDFBFD);
  line-height: 25px;
}

#app, button, input {
  font-family: 'TTNorms', sans-serif;
  font-size: 18px;
}
#app {
  min-height: 100vh;

  .wrapper {
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
  }
}

h1,h2,h3,h4 {
  margin: 0;
  font-weight: 700;
  line-height: 30px;
}

ul, ol {
  padding: 0;
  margin: 0
}

ol {
  margin-left: 20px;
}

ul {
  list-style-type: none;
}

</style>
