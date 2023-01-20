<script lang="ts" setup>
import { ref } from "vue";
import copy from "copy-to-clipboard";
import { useTextStore } from "@/store/text";

const { text } = useTextStore();
const shown = ref(true);

const copyText = () => {
  shown.value = true;

  window.setTimeout(() => {
    try {
      copy(text);
      alert("コピーしました");
    } finally {
      shown.value = false;
    }
  }, 3);
};
</script>

<template>
  <div class="copy-form">
    <button @click="copyText" class="copy-form__button">
      クリップボードにコピー
    </button>
    <pre v-if="shown" id="copy-form-text" class="copy-form__text">{{
      text
    }}</pre>
  </div>
</template>

<style scoped lang="scss">
.copy-form {
  padding: 0 1rem 1rem;
  &__button {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    text-align: center;
    border: none;
    background: #fafafa;
    border: #ccc solid 1px;
  }
  &__text {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 100%;
  }
}
</style>
