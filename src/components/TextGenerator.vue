<script lang="ts" setup>
import { ref } from "vue";
import { useTextStore } from "@/store/text";

const store = useTextStore();
const text = ref(store.text);

let timer: number | null = null;

const change = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  const value = target.value;
  text.value = value;

  if (timer !== null) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    store.setText(value);
  }, 10);
};
const reset = () => {
  text.value = "";
  store.setText("");
};
</script>

<template>
  <div class="generator">
    <textarea
      placeholder="タテガキにしたい文章を入力してください"
      class="generator__input"
      :value="text"
      @input="change"
    />
    <button class="generator__reset" v-on:click="reset">×</button>
  </div>
</template>

<style scoped lang="scss">
.generator {
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
  &__reset {
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
    &:active {
      color: #888;
      background: rgba(0, 0, 0, 0.1);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
