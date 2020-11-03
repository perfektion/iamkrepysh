<template>
  <aside class="iam__offer__age">
    <h2 class="visually_hidden">Занятия для детей с 1,5 до 12 лет</h2>
    с 1,5 до 12 лет
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamOfferAge extends Vue {}
</script>

<style lang="scss">
.iam__offer__age {
  position: absolute;
  transform: rotate(90deg);
  font-size: 1.25rem;
  color: #fff;
  font-family: "BIP";
  background: $color_accent;
  right: -70px;
  bottom: 75%;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 0 0 6px 6px;
}
</style>
