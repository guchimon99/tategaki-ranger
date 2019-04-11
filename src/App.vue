<template>
  <div id="app" class="app">
    <Generator
      v-on:update-text="updateTextHandler"
      v-bind:default-text="store.text" />
    <Preview
      v-bind:text="verticalized"/>
    <Tweeter
      v-bind:text="verticalized" />
    <Copier
      v-bind:text="verticalized" />
    <div class="footer">
      バグの報告とかは <a href="https://twitter.com/guchimon99">@guchimon99</a><br>
      原案 <a href="https://twitter.com/Ash4Crypto/status/1115994874040311809">しまちょー </a><br>
      テスター <a href="https://twitter.com/xSaludSaru">xSalud</a>
    </div>
  </div>
</template>

<script>
import verticalizer from './libraries/verticalizer'
import store from './store'

import Generator from './components/Generator.vue'
import Tweeter from './components/Tweeter.vue'
import Preview from './components/Preview.vue'
import Copier from './components/Copier.vue'

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
    Tweeter,
    Preview,
    Copier
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
  background: #F0F0F0;
  font-family: 'M PLUS 1p', sans-serif;
}

.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0;
  margin: 0 auto;
  max-width: 40rem;
  .generator {
    margin-bottom: 1rem;
  }
  .preiew {
    margin-bottom: 1rem;
  }
  .footer {
    margin-top: 3rem;
    padding: 1rem 1rem 3rem;
    text-align: center;
    color: #333333;
    font-size: 0.8rem;
    line-height: 1.8;
  }
}
</style>
