<script lang="ts" setup>
import TextGenerator from "./components/TextGenerator.vue";
import TextTweeter from "./components/TextTweeter.vue";
import TextPreviewer from "./components/TextPreviewer.vue";
import TextCopier from "./components/TextCopier.vue";
</script>

<template>
  <div id="app" class="app">
    <TextGenerator />
    <TextPreviewer />
    <TextTweeter />
    <TextCopier />
    <div class="footer">
      バグの報告とかは <a href="https://twitter.com/guchimon99">@guchimon99</a
      ><br />
      原案
      <a href="https://twitter.com/Ash4Crypto/status/1115994874040311809"
        >しまちょー </a
      ><br />
      テスター <a href="https://twitter.com/xSaludSaru">xSalud</a>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
textarea,
button {
  font-size: 1rem;
}

body {
  margin: 0;
  background: #f0f0f0;
  font-family: "M PLUS 1p", sans-serif;
}

.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0;
  margin: 0 auto;
  max-width: 40rem;
  .generator {
    margin-bottom: 1rem;
  }
  .preiew {
    margin-bottom: 1rem;
  }
  .footer {
    margin-top: 3rem;
    padding: 1rem 1rem 3rem;
    text-align: center;
    color: #333333;
    font-size: 0.8rem;
    line-height: 1.8;
  }
}
</style>
