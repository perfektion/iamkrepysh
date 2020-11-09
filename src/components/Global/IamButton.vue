<template>
  <button :type="typeProp" :class="classProp" class="iam__button"><slot></slot></button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    typeProp: {
      type: String,
      required: false,
    },
    classProp: {
      type: String,
      required: false,
    },
  },
})
export default class IamButton extends Vue {}
</script>

<style lang="scss">
.iam__button {
  border: none;
  background: none;
  background-color: $color_accent;
  border-radius: 6px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 45px;
  padding-right: 45px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    outline: none;
    background-color: $color_accent_dark;
  }
  &:focus {
    outline: none;
    background-color: $color_accent_dark;
  }
  &:active {
    outline: none;
    background-color: $color_accent_dark;
  }
}
@media screen and (max-width: $media_sm) {
  .iam__button {
    width: 70%;
  }
}
</style>
