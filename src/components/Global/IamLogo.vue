<template>
  <a class="iam__logo" href="/"
    ><img src="/img/logo.png" alt="Логотип школы физической подготовки детей I'm Крепыш»"
  /></a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamLogo extends Vue {}
</script>

<style lang="scss">
.iam__logo{
  &:hover{
    outline: none;
    background-color:$color_grey_light;
  }
  &:focus{
    outline: none;
    background-color:$color_grey_light;
  }
  &:active{
    outline: none;
    background-color:$color_grey_light;
  }
}
</style>
