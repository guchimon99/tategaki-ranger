<template>
  <div class="generator">
    <textarea class="generator__input" v-model="text"></textarea>
    <div class="generator__preview">{{preview}}</div>
  </div>
</template>

<script>

import verticalizer from '../libraries/verticalizer'

const DEFAULT_TEXT = `古池や
蛙飛びこむ
水の音`

export default {
  name: 'Generator',
  data: function () {
    return {
      text: DEFAULT_TEXT
    }
  },
  methods: {

  },
  computed: {
    preview: function () {
      return verticalizer(this.text)
    }
  }
}
</script>

<style scoped lang="scss">
  .generator{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    &__input {
      padding: 1rem;
      width: 100%;
      resize: horizontal;
      flex-grow: 1;
    }
    &__preview{
      padding: 1rem;
      flex-grow: 1;
      white-space: pre;
    }
  }
</style>
