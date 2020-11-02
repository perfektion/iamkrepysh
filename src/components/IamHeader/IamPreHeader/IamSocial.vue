<template>
  <ul class="iam__header__preheader__social">
    <li>
      <a href="https://www.instagram.com/iamkrepysh/" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCpJ-S8YyhueEPjJd_w2QpjQ" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamSocial extends Vue {}
</script>

<style lang="scss">
.iam__header__preheader__social {
  list-style: none;
  margin: 0 0 0 600px;
  padding: 0;
  li {
    display: inline;
    padding: 0;
    margin: 0;
  }
  a {
    margin-right: 10px;
    font-size: 1rem;
    color: $color_grey_dark;
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
  }
}
</style>
