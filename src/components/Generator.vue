<template>
  <div class="generator">
    <textarea class="generator__input" v-model="text"></textarea>
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
    display: flex;
    flex-direction: column;
    &__input {
      border-radius: 0.2rem;
      margin-top: 1rem;
      padding: 1rem;
      width: 100%;
      min-height: 15rem;
      resize: none;
      flex-grow: 1;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
</style>
