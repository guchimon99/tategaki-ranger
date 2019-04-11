<template>
  <div class="tweeter">
    <a v-bind:href="tweetURL" target="_blank" class="tweeter__button">ツイートする</a>
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
  }
}
</style>
