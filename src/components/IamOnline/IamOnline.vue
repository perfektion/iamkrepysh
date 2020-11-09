<template>
  <section id="online" class="iam__online content">
    <img class="iam__online__mockup" src="./img/phone1.png" alt="Мобильное приложение" />
    <div class="iam__online__content">
      <h2 class="iam__online__title">
        Отслеживайте результаты и<br />смотрите тренировки <span>онлайн</span>
      </h2>
      <ul>
        <li>Уровни</li>
        <li>Аналитика роста</li>
        <li>Обратная связь тренера</li>
        <li>Рейтинги по стране, городу и школе</li>
      </ul>
      <div class="iam__online__links">
        <a
          class="iam__online__btn"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=ru.iamkrepysh.client&amp;hl=en"
        >
          <img class="online__btn-img" src="./img/google-play.png" />
        </a>
        <a
          class="iam__online__btn"
          target="_blank"
          href="https://apps.apple.com/ru/app/im-%D0%BA%D1%80%D0%B5%D0%BF%D1%8B%D1%88/id1494638149"
        >
          <img class="online__btn-img" src="./img/app-store.png" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamOnline',
});
</script>

<style lang="scss">
.iam__online {
  display: flex;
  align-items: center;
  padding-top: 50px;
  .iam__online__content {
    margin-left: 25px;
    .iam__online__title {
      margin-bottom: 30px;
    }
    ul {
      list-style: none;
      padding-left: 0;
      li {
        box-shadow: 0px 5px 25.11px 1.89px rgba(29, 29, 29, 0.08);
        border-radius: 6px;
        transition: all 0.3s ease;
        padding: 17px 30px;
        margin-top: 1rem;
        width: fit-content;
        color: $color_grey;
        font-size: 1rem;
        line-height: 1.48em;
        &::after {
          content: "";
          background: #ff6f00;
          height: 2px;
          width: 47px;
          display: block;
          position: relative;
          top: -11px;
          right: 76px;
        }
      }
    }
  }
  .iam__online__links {
    display: flex;
    align-items: center;
    margin-top: 45px;
    .iam__online__btn {
      display: block;
      transition: all 0.3s ease;
      &:hover{
        outline: none;
        opacity: 0.6;
      }
      &:focus{
        outline: none;
        opacity: 0.6;
      }
      &:active{
        outline: none;
        opacity: 0.6;
      }
      img {
        height: 60px;
      }
    }
    .iam__online__btn + .iam__online__btn {
      margin-left: 10px;
    }
  }
}

@media screen and (max-width: $media_sm) {
  .iam__online {
    flex-direction: column;
    align-items: center;
    .iam__online__mockup {
      width: 80%;
      margin-right: 10%;
      order: 2;
    }
    .iam__online__content {
      ul {
        li {
          width: 100%;
          text-align: center;
          &::after {
            content: none;
          }
        }
      }
      .iam__online__links {
        flex-direction: column;
      }
      .iam__online__btn + .iam__online__btn {
        margin-top: 10px;
      }
    }
  }
}
</style>
