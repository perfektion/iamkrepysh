<template>
  <div class="iam__phone">
    <a href="tel:8 (928) 282-87-08">
      <i class="fas fa-phone"></i>
      8 (928) 282-87-08
    </a>
    <p>Звонки по России бесплатно</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamPhone extends Vue {}
</script>

<style lang="scss">
.iam__phone {
  a {
    color: $color_accent;
    font-size: 1.25rem;
    font-weight: 600;
    margin-left: 4px;
    text-decoration: none;
    &:hover {
      outline: none;
      color: $color_accent_dark;
    }
    &:focus {
      outline: none;
      color: $color_accent_dark;
      background-color: $color_grey_light;
    }
    &:active {
      outline: none;
      color: $color_accent_dark;
      background-color: $color_grey_light;
    }
    i {
      font-size: 0.9375rem;
      margin-right: 10px;
    }
  }
  p {
    color: $color_grey;
    font-size: 0.875rem;
    margin: 5px 0 0 0;
  }
}
</style>
