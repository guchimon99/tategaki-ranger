<template>
  <div class="copier">
    <button v-on:click="copy" class="copier__button">クリップボードにコピー</button>
    <pre v-if="shown" id="copier-text" class="copier__text">{{text}}</pre>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  name: 'Copier',
  props: ['text'],
  data: function(){
    return {
      shown: false
    }
  },
  methods: {
    copy: function(){
      this.shown = true

      setTimeout(()=> {
        var textarea = document.querySelector("#copier-text")
        document.getSelection().selectAllChildren(textarea)
        const result = document.execCommand("copy")
        this.shown = false
        if (result) alert('コピーしました')
      }, 3)
    }
  }
}
</script>

<style scoped lang="scss">
.copier {
  padding: 0 1rem 1rem;
  &__button{
    width: 100%;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    text-align: center;
    border: none;
    background: #FAFAFA;
    border: #CCC solid 1px;
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
