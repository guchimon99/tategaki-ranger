<script setup lang="ts">
import { computed } from "vue";
import { useTextStore } from "../store/text";
import { verticalize } from "../services/verticalize";

const store = useTextStore();
const tweetURL = computed(() => {
  const textValue = encodeURIComponent(verticalize(store.text));
  return `https://twitter.com/intent/tweet?text=${textValue}`;
});
</script>

<template>
  <div class="tweeter">
    <span
      v-if="!store.text || store.text.length < 1"
      class="tweeter__button tweeter__button--empty"
      >文章を入力してください</span
    >
    <a
      v-else-if="1 <= store.text.length && store.text.length <= 140"
      v-bind:href="tweetURL"
      target="_blank"
      class="tweeter__button"
      >ツイートする</a
    >
    <span v-else class="tweeter__button tweeter__button--over"
      >140文字を超えています</span
    >
  </div>
</template>

<style scoped lang="scss">
.tweeter {
  padding: 1rem;
  &__button {
    border: none;
    display: block;
    padding: 0.5rem;
    border-radius: 0.2rem;
    color: #fff;
    background: #0084b4;
    width: 100%;
    text-decoration: none;
    text-align: center;
    &--empty {
      background: #ccc;
      color: #999;
    }
    &--over {
      color: #fff;
      background: #ff0000;
    }
  }
}
</style>
