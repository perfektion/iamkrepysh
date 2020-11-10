<template>
  <button @click="popupClick" class="iam__location__button">
    <i class="fas fa-map-marker-alt"></i
    >{{ town !== 0 ? citys.find(c => c.value == town).name : "Город не выбран" }}
  </button>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <IamPopup :closeBtn="false" v-model:active="popupOpen">
        <h2 class="iam__location__title">Выберите <span>свой город</span></h2>
        <form focus method="POST" action="" class="iam__location__form">
          <template v-for="city in citys" :key="city.id">
            <input :id="city.id" type="radio" name="town" :value="city.value" v-model="town" />
            <label :for="city.id" class="iam__location__content__label">{{ city.name }}</label>
          </template>

          <IamButton @click="submitForm" type="submit" class="iam__location__form__submit"
            >Выбрать</IamButton
          >
        </form>
        <div class="iam__location__map">
          <img class="iam__location__img" src="./img/map.svg" alt="" />
          <img class="iam__location__img__marker marker-1" src="./img/map-marker.svg" />
          <img class="iam__location__img__marker marker-2" src="./img/map-marker.svg" />
          <img class="iam__location__img__marker marker-3" src="./img/map-marker.svg" />
          <img class="iam__location__img__marker marker-4" src="./img/map-marker.svg" />
        </div>
      </IamPopup>
    </transition>
  </teleport>
</template>

<script lang="ts">
import IamPopup from '@/components/Global/IamPopup/IamPopup.vue';
import IamButton from '@/components/Global/IamButton.vue';
import { defineComponent } from 'vue';
import Cookies from 'js-cookie';

export default defineComponent({
  name: 'IamLocation',
  components: {
    IamPopup,
    IamButton,
  },
  data: () => ({
    popupOpen: false,
    town: 0,
    citys: [
      {
        id: 'city-1',
        name: 'Краснодар',
        value: 1,
      },
      {
        id: 'city-2',
        name: 'Москва (скоро)',
        value: 2,
      },
      {
        id: 'city-3',
        name: 'Омск (скоро)',
        value: 3,
      },
      {
        id: 'city-4',
        name: 'Архангельск (скоро)',
        value: 4,
      },
    ],
  }),

  methods: {
    submitForm(e: Event) {
      if (this.town) {
        document.cookie = `city=${this.town}; max-age=604800`;
        this.popupOpen = false;
      }
      e.preventDefault();
    },
    popupClick() {
      this.popupOpen = !this.popupOpen;
      const inp = document.querySelector('#city-1');
      window.console.log(inp);
    },
  },
  created() {
    // eslint-disable-next-line no-unused-expressions
    Number(Cookies.get('city'))
      ? (this.town = Number(Cookies.get('city')))
      : (this.popupOpen = true);
  },
});
</script>

<style lang="scss">
.iam__location__button {
  outline: none;
  color: $color_grey_dark;
  font-size: 0.9375rem;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
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
  i {
    margin-right: 0.5rem;
  }
}

.iam__location__title {
  margin: 0;
  font-size: 1.5625rem;
}
.iam__location__form {
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type="radio"]:focus + .iam__location__content__label {
    color: #ff6f00;
  }

  input[type="radio"]:checked + .iam__location__content__label::before {
    content: "";
    background: #ff6f00;
    border: 2px solid #fff;
    box-shadow: 0px 0px 4.75px 0.25px rgba(0, 0, 0, 0.1);
    width: 14px;
    height: 14px;
  }

  .iam__location__content__label {
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 0.9375rem;

    &::before {
      content: "";
      display: inline-block;
      box-sizing: content-box;
      width: 14px;
      height: 14px;
      bottom: 1px;
      background: #fff;
      border: 2px solid #d9d9d9;
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: -2px;
    }

    &::before + input[type="radio"]:checked {
      content: "";
      background: #ff6f00;
      border: 2px solid #fff;
      box-shadow: 0px 0px 4.75px 0.25px rgba(0, 0, 0, 0.1);
      width: 14px;
      height: 14px;
    }
  }
}
.iam__location__form__submit {
  width: fit-content;
  margin-top: 15px;
}
.iam__location__img {
  position: absolute;
  right: 50px;
  top: 40px;
}
.iam__location__img__marker {
  position: absolute;
  box-shadow: 0px 0px 5px rgba(255, 111, 0, 0.15);
}
.marker-1 {
  top: 222px;
  right: 572px;
}
.marker-2 {
  top: 248px;
  right: 388px;
}
.marker-3 {
  top: 180px;
  right: 514px;
}
.marker-4 {
  top: 142px;
  right: 474px;
}

@media screen and (max-width: $media_md) {
  .iam__location__map {
    display: none;
  }

  .iam__location__form__submit {
    width: 100%;
  }
}

@media screen and (max-width: $media_sm) {
  .iam__location__map {
    display: none;
  }

  .iam__location__form__submit {
    width: 100%;
  }
}
</style>
