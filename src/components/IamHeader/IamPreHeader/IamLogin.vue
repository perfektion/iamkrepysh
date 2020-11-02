<template>
  <a class="iam__header__preheader__login" href="http://cabinet.iamkrepysh.ru/login.php"
    >Личный кабинет<i class="fas fa-user"></i
  ></a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamLogin extends Vue {}
</script>

<style lang="scss">
.iam__header__preheader__login {
  color: $color_grey_dark;
  text-decoration: none;
  &:hover {
    outline: none;
    color: $color_accent;
  }
  &:focus {
    outline: none;
    color: $color_accent;
  }
  &:active {
    outline: none;
    color: $color_accent;
  }
  i {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
