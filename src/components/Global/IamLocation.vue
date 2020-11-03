<template>
  <button class="iam__location"><i class="fas fa-map-marker-alt"></i>Краснодар</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamLocation extends Vue {}
</script>

<style lang="scss">
.iam__location {
  outline: none;
  color: $color_grey_dark;
  font-size: 0.9375rem;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
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
    margin-right: 0.5rem;
  }
}
</style>
