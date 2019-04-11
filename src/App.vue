<template>
  <div id="app" class="app">
    <Generator />
  </div>
</template>

<script>
import Generator from './components/Generator.vue'

export default {
  name: 'app',
  components: {
    Generator
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
