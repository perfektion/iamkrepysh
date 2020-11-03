<template>
  <section class="iam__benefit" id="benefit">
    <div class="content">
      <h2>Какую пользу принесут регулярные занятия в школе <span>I’m Крепыш</span></h2>
      <p>
        Прививайте ребёнку любовь к спорту с ранних лет. Игровые элементы вызывают интерес у
        ребёнка, а достижения уровней учат ставить и добиваться целей.
      </p>
      <img class="iam__benefit__img" src="./img/fon2.png" alt="Ребёнок из школы I'm Крепыш" />
      <ul class="iam__benefit__list">
        <div class="iam__benefit__list__group">
          <li>Крепкий фундамент физической подготовки</li>
          <li>Здоровье</li>
          <li>Эмоциональный интелект</li>
        </div>
        <div class="iam__benefit__list__group">
          <li>Умение ставить и достигать цели</li>
          <li>Характер и дисциплина</li>
          <li>Координация и ловкость</li>
        </div>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamBenefit extends Vue {}
</script>

<style lang="scss">
.iam__benefit {
  padding-top: 130px;
  position: relative;
  background: url(./img/benefit-bg.svg) no-repeat center top / cover;
  .content {
    text-align: center;
    position: relative;
    padding-bottom: 110px;
    h2 {
      width: 520px;
      margin: 0 auto;
    }
    p {
      width: 660px;
      margin: 0 auto;
      margin-top: 20px;
      color: $color_grey_dark;
      position: relative;
    }
    .iam__benefit__img {
      position: absolute;
      bottom: 0;
      left: 270px;
      display: flex;
      justify-self: center;
      z-index: 1;
      margin-top: 100px;
    }
    .iam__benefit__list {
      list-style: none;
      padding: 0;
      margin: 115px 0 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      li {
        width: 270px;
        height: 75px;
        text-align: center;
        border-radius: 6px;
        margin-top: 20px;
        transition: all 0.3s ease;
        border: 2px solid #ff6f00;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        line-height: 1.48em;
      }
    }
  }
}
</style>
