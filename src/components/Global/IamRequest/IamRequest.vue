<template>
  <IamButton @click="popupOpen = !popupOpen">Записаться</IamButton>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <IamPopup :closeBtn="true" v-model:active="popupOpen">
        <section class="iam__request">
          <h1 class="iam__request__title">Оставьте <span>заявку</span></h1>
          <p>Мы свяжемся с Вами в ближайшее время</p>
          <form action="#" method="POST">
            <input
              type="text"
              name="user_name"
              class="consultation__name"
              placeholder="Ваше имя..."
              required=""
            />
            <input
              type="tel"
              name="user_phone"
              class="consultation__tel"
              placeholder="Ваш телефон..."
              required=""
            />
            <input
              type="text"
              name="user_age"
              class="consultation__age"
              placeholder="Возраст ребёнка..."
              required=""
            />
            <input type="hidden" name="city" value="Краснодар" />
            <select class="card-search__select" name="user_gym" required="">
              <option class="card-search__select-option-1" value="nill"
                >Выберите зал в вашем городе...</option
              >
              <option class="card-search__select-option" value="1"
                >Краснодар, ул. Симиренко, д.47</option
              >
              <option class="card-search__select-option" value="2"
                >Краснодар, ул. Яснополянская, зд. 2/4</option
              >
              <option class="card-search__select-option" value="3"
                >Краснодар, ул. Зиповская, д. 34 кор. 2</option
              >
            </select>
            <IamButton class="iam__request__btn" type="submit"
              >Записаться на пробную тренировку</IamButton
            >
            <p class="personal-data">
              Оставляя заявку я даю своё согласие на<br />
              <a href="personal-data.html" target="_blank">обработку персональных данных</a>
            </p>
          </form>
        </section>
      </IamPopup>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IamPopup from '@/components/Global/IamPopup/IamPopup.vue';
import IamButton from '@/components/Global/IamButton.vue';

export default defineComponent({
  name: 'IamRequest',
  components: {
    IamPopup,
    IamButton,
  },
  data: () => ({
    popupOpen: false,
  }),
});
</script>
<style lang="scss">
.iam__request {
  display: flex;
  align-items: center;
  flex-direction: column;
  .iam__request__title {
    text-align: center;
    margin: 0;
  }
  p {
    color: $color_grey_dark;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      outline: none;
      border: 1px solid #e5e5e5;
      border-radius: 6px;
      background: #f6f6f6;
      font-size: 1rem;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-top: 12px;
      &:focus {
        border: 1px solid $color_accent;
      }
    }
    select {
      width: 100%;
      margin-top: 10px;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      padding-top: 17px;
      padding-bottom: 17px;
      padding-left: 23px;
      padding-right: 25px;
      -webkit-appearance: none;
      background: url(./img/arrow-down.svg) no-repeat center right;
      background-position-x: calc(100% - 20px);
      background-color: #f9f9f9;
      border: 1px solid #eeeeee;
      border-radius: 6px;
      color: $color_grey_dark;
      &:focus {
        border: 1px solid $color_accent;
      }
    }
    .iam__request__btn {
      margin-top: 20px;
    }
    .personal-data {
      font-size: 0.875rem;
      color: $color_grey;
      a {
        color: $color_accent;
        text-decoration: none;
        &:hover {
          outline: none;
          text-decoration: underline;
        }
        &:focus {
          outline: none;
          text-decoration: underline;
        }
        &:active {
          outline: none;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
