<template>
  <div id="app" class="app">
    <Generator
      v-on:update-text="updateTextHandler"
      v-bind:default-text="text"
      v-bind:preview="preview" />
  </div>
</template>

<script>
import verticalizer from './libraries/verticalizer'
import store from './store'
import Generator from './components/Generator.vue'

export default {
  name: 'app',
  data: function(){
    return {
      text: store.state.text
    }
  },
  computed: {
    preview: function(){
      return verticalizer(this.text)
    }
  },
  components: {
    Generator
  },
  methods: {
    updateTextHandler: function(text){
      store.setText(text)
    }
  }
}
</script>

<style>
:root {
  font-size: 16px;
}

*, *::before, *::after{
   box-sizing: border-box;
}

input, textarea {
  font-size: 1rem;
}

body {
  margin: 0;
  background: #FAFAFA;
  font-family: 'M PLUS 1p', sans-serif;
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
}
</style>
