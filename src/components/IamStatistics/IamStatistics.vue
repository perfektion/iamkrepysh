<template>
  <section id="statistics" class="iam__statistics">
    <div class="iam__statistics__content">
      <img class="iam__img__first" src="./img/child1.png" alt="Ребёнок на канате" />
      <div class="iam__statistics__main">
        <h2>
          Чтобы создать самые <span>эффективные</span><br />и <span>безопасные</span> тренировки:
        </h2>
        <ul class="iam__statistics__items">
          <li>10<span>Лет работы</span></li>
          <li>11297<span>Занятий проведено</span></li>
          <li>120<span>Авторских игр</span></li>
          <li>550<span>Уникальных упражнений </span></li>
        </ul>
      </div>
      <img class="iam__img__second" src="./img/child2.png" alt="Девочка с мячом" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamStatistics',
});
</script>

<style lang="scss">
.iam__statistics {
  background-color: $color_grey_bg;
  .iam__statistics__content {
    display: flex;
    max-width: $width_max;
    margin: 0 auto;
    position: relative;
    .iam__statistics__main {
      padding-top: 100px;
      padding-bottom: 94px;
      position: relative;
      left: -75px;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 40px;
        position: relative;
        li {
          border-radius: 15px;
          box-shadow: 0px 10px 24px 6px rgba(78, 78, 78, 0.06);
          width: 270px;
          height: 190px;
          background: #fff;
          transition: all 0.3s ease;
          font-family: "BIP";
          font-size: 5.3125rem;
          color: $color_accent;
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 15px;
          z-index: 4;
          span {
            font-family: $font_family;
            font-size: 1rem;
            color: $color_grey_dark;
            margin-top: 1rem;
          }
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px solid #ff6f00;
          z-index: 1;
          left: 150px;
          bottom: 70px;
        }
      }
    }
    .iam__img__first {
      display: block;
      width: 100%;
      height: fit-content;
      z-index: 5;
    }
    .iam__img__second {
      position: relative;
      right: 175px;
      top: 418px;
      height: 304px;
      z-index: 5;
    }
  }
}
</style>
