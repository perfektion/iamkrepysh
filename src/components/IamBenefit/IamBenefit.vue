<template>
  <section class="iam__benefit" id="benefit">
    <div class="content">
      <h2>Какую пользу принесут регулярные <br />занятия в школе <span>I’m Крепыш</span></h2>
      <p>
        Прививайте ребёнку любовь к спорту с ранних лет. Игровые элементы вызывают интерес у
        ребёнка, а достижения уровней учат ставить и добиваться целей.
      </p>
      <img class="iam__benefit__img" src="./img/fon2.png" alt="Ребёнок из школы I'm Крепыш" />
      <img
        class="iam__benefit__img__second"
        src="./img/fon2-2.png"
        alt="Ребёнок из школы I'm Крепыш"
      />
      <ul class="iam__benefit__list">
        <li class="iam__benefit__list__group">
          <ul>
            <li>Крепкий фундамент физической подготовки</li>
            <li>Здоровье</li>
            <li>Эмоциональный интелект</li>
          </ul>
        </li>
        <li class="iam__benefit__list__group">
          <ul>
            <li>Умение ставить и достигать цели</li>
            <li>Характер и дисциплина</li>
            <li>Координация и ловкость</li>
          </ul>
        </li>
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
  background: url("./img/benefit-bg.svg") no-repeat center top / cover;
  .content {
    text-align: center;
    position: relative;
    padding-bottom: 110px;
    h2 {
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
    .iam__benefit__img__second {
      display: none;
    }
    .iam__benefit__list {
      list-style: none;
      padding: 0;
      margin: 115px 0 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      ul li {
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
@media screen and (max-width: $media_xl) {
  .iam__benefit {
    margin-top: -5px;
    .content {
      p {
        width: auto;
      }
      .iam__benefit__img {
        display: none;
      }
      .iam__benefit__img__second {
        display: block;
        width: 558px;
        margin: 60px auto 0 auto;
      }
      .iam__benefit__list {
        display: block;
        margin: 0;
        ul {
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 270px;
            height: 75px;
            text-align: center;
            border-radius: 6px;
            margin-bottom: 20px;
            margin-top: 0;
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
  }
}
@media screen and (max-width: $media_md) {
  .iam__benefit {
    margin-top: -36px;
    .content {
      p {
        width: auto;
      }
      .iam__benefit__img {
        display: none;
      }
      .iam__benefit__img__second {
        display: block;
        width: 100%;
      }
      .iam__benefit__list {
        flex-direction: column;
        margin: 0;
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-between;
          li {
            width: auto;
            height: 75px;
            text-align: center;
            border-radius: 6px;
            margin-bottom: 20px;
            margin-top: 0;
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
  }
}
@media screen and (max-width: $media_sm) {
  .iam__benefit {
    margin-top: -36px;
    .content {
      p {
        width: auto;
      }
      .iam__benefit__img {
        display: none;
      }
      .iam__benefit__img__second {
        display: block;
        width: 100%;
      }
      .iam__benefit__list {
        flex-direction: column;
        margin: 0;
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-between;
          li {
            width: auto;
            height: 75px;
            text-align: center;
            border-radius: 6px;
            margin-bottom: 20px;
            margin-top: 0;
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
  }
}
</style>
