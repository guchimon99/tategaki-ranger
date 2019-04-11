<template>
  <div class="generator">
    <textarea
      placeholder="タテガキにしたい文章を入力してください"
      class="generator__input"
      v-model="text"></textarea>
    <button class="generator__reset" v-on:click="reset">×</button>
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
  },
  methods: {
    reset: function(){
      this.text = ""
    }
  }
}
</script>

<style scoped lang="scss">
  .generator{
    display: flex;
    flex-direction: column;
    position: relative;
    &__input {
      border-radius: 0.2rem;
      padding: 1rem 3rem 1rem 1rem;
      width: 100%;
      min-height: 15rem;
      resize: none;
      flex-grow: 1;
      border: none;
      &:focus {
        outline: none;
      }
    }
    &__reset{
      line-height: 1;
      font-size: 1.4rem;
      color: #999;
      font-weight: bold;
      padding: 0.8rem 0.8rem;
      background: transparent;
      border: none;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      &:active{
        color: #888;
        background: rgba(0,0,0,0.1);
      }
      &:focus{
        outline: none;
      }
    }
  }
</style>
