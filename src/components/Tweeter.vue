<template>
  <div class="tweeter">
    <span v-if="!text || text.length < 1" class="tweeter__button tweeter__button--empty">文章を入力してください</span>
    <a v-else-if="1 <= text.length && text.length <= 140" v-bind:href="tweetURL" target="_blank" class="tweeter__button">ツイートする</a>
    <span v-else class="tweeter__button tweeter__button--over">140文字を超えています</span>
  </div>
</template>

<script>

export default {
  name: 'Tweeter',
  props: ['text'],
  computed: {
    tweetURL: function(){
      const text = encodeURIComponent(this.text)
      return `https://twitter.com/intent/tweet?text=${text}`
    }
  }
}
</script>

<style scoped lang="scss">
.tweeter {
  padding: 1rem;
  &__button {
    border: none;
    display: block;
    padding: 0.5rem;
    border-radius: 0.2rem;
    color: #FFF;
    background: #0084b4;
    width: 100%;
    text-decoration: none;
    text-align: center;
    &--empty {
      background: #CCC;
      color: #999;
    }
    &--over {
      color: #FFF;
      background: #FF0000;
    }
  }
}
</style>
