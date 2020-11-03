<template>
  <div class="iam__logo">
    <a href="/"
      ><img src="../img/logo.png" alt="Логотип школы физической подготовки детей I'm Крепыш»"
    /></a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamLogo extends Vue {}
</script>

<style lang="scss">
.iam__logo a {
  display: inline-block;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
    background-color: $color_grey_light;
  }
  &:active {
    outline: none;
    background-color: $color_grey_light;
  }
}
</style>
