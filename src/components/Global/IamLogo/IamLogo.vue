<template>
  <div class="iam__logo">
    <RouterLink to="/">
      <img src="./img/logo.png" alt="Логотип школы физической подготовки детей I'm Крепыш»" />
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamLogo',
});
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
