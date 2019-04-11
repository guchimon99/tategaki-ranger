<template>
  <div id="app" class="app">
    <Generator
      v-on:update-text="updateTextHandler"
      v-bind:default-text="store.text"
      v-bind:preview="verticalized" />
    <Tweeter
      v-bind:text="verticalized" />
  </div>
</template>

<script>
import verticalizer from './libraries/verticalizer'
import store from './store'

import Generator from './components/Generator.vue'
import Tweeter from './components/Tweeter.vue'

export default {
  name: 'app',
  data: function(){
    return {
      store: store.state,
    }
  },
  computed: {
    verticalized: function(){
      return verticalizer(this.store.text)
    }
  },
  components: {
    Generator,
    Tweeter
  },
  methods: {
    updateTextHandler: function(text){
      store.setText(text)
    }
  }
}
</script>

<style lang="scss">
:root {
  font-size: 16px;
}

*, *::before, *::after{
   box-sizing: border-box;
}

input, textarea, button {
  font-size: 1rem;
}

body {
  margin: 0;
  background: #FAFAFA;
  font-family: 'M PLUS 1p', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40rem;
  .generator {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .tweeter {
    flex-shrink: 0;
  }
}
</style>
