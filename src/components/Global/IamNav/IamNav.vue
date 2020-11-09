<template>
  <button
    @click="showNav = !showNav"
    class="iam__nav__btn"
    :class="{ iam__nav__btn_active: showNav }"
  >
    <span class="iam__nav__btn_first"></span>
    <span class="iam__nav__btn_second"></span>
    <span class="iam__nav__btn_third"></span>
    <span class="iam__nav__btn_fourth"></span>
  </button>
  <teleport v-if="showNav" to="#iam__header">
    <section class="iam__nav__content">
      <ul class="iam__nav__items content">
        <ul>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#benefit"
              >Какую пользу принесут тренировки?</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#base"
              >База физической подготовки</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#video-training"
              >Как проходят тренировки?</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#online"
              >Смотрите тренировки онлайн</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#statistics"
              >Статистика</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#iamicon"
              >Тренируйся играя!</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#results"
              >Результаты крепышей</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#reviews-video"
              >Почему нас любят?</a
            >
          </li>
        </ul>
        <ul>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#history"
              >История создания школы</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#trainers"
              >Наши тренеры</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#safegym"
              >Технология Safe Gym</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#cost"
              >Стоимость тренировок</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#trial-training"
              >Пробная тренировка</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#questions"
              >Ответы на вопросы родителей</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#mobile-app"
              >Мобильное приложение</a
            >
          </li>
          <li class="iam__nav__item">
            <a @click="showNav = !showNav" class="iam__nav__item__link" href="#footer">Контакты</a>
          </li>
        </ul>
      </ul>
    </section>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    showNav: false,
  }),
});
</script>

<style lang="scss">
.iam__nav__btn {
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
.iam__nav__btn > span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transition: 0.3s all linear;
}
.iam__nav__btn_first {
  top: 0;
}
.iam__nav__btn_second {
  top: 50%;
  transform: translateY(-50%);
}
.iam__nav__btn_third {
  top: 50%;
  transform: translateY(-50%);
}
.iam__nav__btn_fourth {
  bottom: 0;
}
.iam__nav__btn_active {
  .iam__nav__btn_first {
    opacity: 0;
  }
  .iam__nav__btn_second {
    transform: translateY(-50%) rotate(45deg);
  }
  .iam__nav__btn_third {
    transform: translateY(-50%) rotate(-45deg);
  }
  .iam__nav__btn_fourth {
    opacity: 0;
  }
}
.iam__nav__content {
  position: absolute;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  padding-top: 70px;
  min-height: 100%;
}
.iam__nav__items {
  height: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  list-style: none;
  background: url(./img/map-2.svg) no-repeat center top;
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
  }
  .iam__nav__item {
    padding: 10px 0;
    margin: 0 0 20px 0;
    .iam__nav__item__link {
      display: block;
      font-size: 1.125rem;
      color: #000;
      transition: all 0.3s ease;
      margin-left: 40px;
      text-decoration: none;
      &::after {
        content: "";
        height: 2px;
        width: 25px;
        background: #000;
        display: block;
        position: relative;
        bottom: 9px;
        right: 40px;
        transition: all 0.3s ease;
      }
      &:hover {
        outline: none;
        color: #f08143;
        margin-left: 45px;
        &::after {
          background: $color_accent;
        }
      }
      &:focus {
        outline: none;
        color: #f08143;
        margin-left: 45px;
        &::after {
          background: $color_accent;
        }
      }
      &:active {
        outline: none;
        color: #f08143;
        margin-left: 45px;
        &::after {
          background: $color_accent;
        }
      }
    }
  }
}

@media screen and (max-width: $media_sm) {
  .iam__nav__items {
    flex-direction: column;
  }
  .iam__nav__items {
    background: #fff;
  }
}
</style>
