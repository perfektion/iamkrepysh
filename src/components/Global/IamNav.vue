<template>
  <button class="iam__nav"><span></span></button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamNav extends Vue {}
</script>

<style lang="scss">
.iam__nav {
  width: 35px;
  height: 21px;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    outline: none;
    & > span,
    & > span::before,
    & > span::after {
      background-color: $color_accent;
    }
  }
  &:focus {
    outline: none;
    & > span,
    & > span::before,
    & > span::after {
      background-color: $color_accent;
    }
  }
  &:active {
    outline: none;
    & > span,
    & > span::before,
    & > span::after {
      background-color: $color_accent;
    }
  }
}
.iam__nav > span,
.iam__nav > span::before,
.iam__nav > span::after {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transition: 0.3s all linear;
}
.iam__nav > span::before {
  content: "";
  top: -10px;
}
.iam__nav > span::after {
  content: "";
  top: 10px;
}
</style>
