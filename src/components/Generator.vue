<template>
  <div class="generator">
    <textarea class="generator__input" v-model="text"></textarea>
    <div class="generator__preview">{{preview}}</div>
  </div>
</template>

<script>

export default {
  name: 'Generator',
  data: function () {
    return {
      text: ""
    }
  },
  created: function(){
    this.text = this.defaultText
  },
  props: ['default-text', 'preview'],
  watch: {
    text: function() {
      this.$emit('update-text', this.text)
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
