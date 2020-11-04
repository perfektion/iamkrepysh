<template>
  <section class="iam__base" id="base">
    <div class="content">
      <h2>База физической подготовки <span>фундаментальна</span></h2>
      <p>
        Она открывает двери здоровью и активному образу жизни. Укрепляем связки, суставы, мышцы и
        только после этого изучаем спортивные навыки.
      </p>
      <img src="./img/fon3.svg" alt="Дети школы I'm Крепыш и дети, которые ничем не занимаются" />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamBase extends Vue {}
</script>

<style lang="scss">
.iam__base {
  background-color: #fff;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    color: $color_grey_dark;
    width: 700px;
    margin: 0 auto;
    margin-top: 20px;
  }
  img {
    width: 900px;
    margin: 0 auto;
    margin-top: 55px;
  }
}

@media screen and (max-width: $media_sm) {
.iam__base {
  background-color: #fff;
  text-align: center;
  padding-top: 90px;
  padding-bottom: 100px;
  p {
    color: $color_grey_dark;
    width: 100%;
  }
  img {
    width: 100%;
  }
}
}
</style>
