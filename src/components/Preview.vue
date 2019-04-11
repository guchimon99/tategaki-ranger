<template>
  <div class="preview">
    <div class="preview__head">
      <div class="preview__icon"></div>
      <div class="preview__name">
        <div class="preview__display-name"></div>
        <div class="preview__id"></div>
      </div>
    </div>
    <div class="preview__body">{{text}}</div>
    <div class="preview__count" v-bind:class="{'preview__count--over': text.length >= 140 }"><span>{{text.length}}</span> / 140</div>
    <div class="preview__footer">
      <div class="preview__time"></div>
      <div class="preview__device"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"]
}
</script>

<style lang="scss" scoped>
.preview{
  border-radius: 0.5rem;
  background: #FFFFFF;
  padding: 1rem;
  &__head{
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
  &__icon {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    background: #EEE;
    margin-right: 0.5rem;
  }
  &__name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.1rem 0;
  }
  &__display-name{
    background: #999;
    border-radius: 0.2rem;
    height: 0.4rem;
    width: 3rem;
  }
  &__id{
    background: #CCC;
    border-radius: 0.2rem;
    width: 4rem;
    height: 0.4rem;
  }
  &__body {
    white-space: pre;
    overflow: auto;
  }
  &__count{
    font-size: 0.8rem;
    padding: 0.5rem 0;
    color: #AAAAAA;
    text-align: right;
    &--over{
      span {
        font-size: 1rem;
        color: red;
        font-weight: bold;
      }
    }
  }
  &__footer{
    margin-top: 1rem;
    display: flex;
  }
  &__time{
    height: 0.3rem;
    border-radius: 0.15rem;
    background: #EEEEEE;
    flex-grow: 1;
    margin-right: 0.5rem;
  }
  &__device{
    height: 0.3rem;
    border-radius: 0.15rem;
    background: #1B95E0;
    width: 3rem;
  }
}
</style>
