<template>
  <section class="iam__offer">
    <div class="content">
      <h1>Всестороннее <span>физическое развитие</span> ребенка</h1>
      <p>Весело, безопасно с гарантией результата.</p>
      <IamButton>Записаться</IamButton>
      <p class="iam__offer__copy">* приглашаем на пробную тренировку</p>
      <a href="#benefit" class="iam__offer__scrollto">
        <i class="fas fa-arrow-down"></i>
        Какую пользу принесут регулярные занятия?
      </a>
    </div>
    <IamOfferAge></IamOfferAge>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamButton from '@/components/Global/IamButton.vue';
import IamOfferAge from '@/components/IamOffer/IamOfferAge.vue';

@Options({
  components: {
    IamButton,
    IamOfferAge,
  },
})
export default class IamOffer extends Vue {}
</script>

<style lang="scss">
.iam__offer {
  position: relative;
  .content {
    margin: 0 auto;
    padding-bottom: 3rem;
    position: relative;
    background-color: #fff;
    background: url(/img/sun.png) top left no-repeat, url(/img/children1.png) bottom left no-repeat,
      url(/img/fon1.jpg) top right no-repeat;
    h1 {
      width: 660px;
      padding: 124px 0 15px 0;
      margin: 0;
    }
    p {
      color: $color_grey_dark;
      padding-bottom: 35px;
      margin: 0;
    }
    .iam__offer__copy {
      font-size: 0.875rem;
      color: #9a9a9a !important;
      width: 190px;
      line-height: 1.33em;
      margin-top: 1rem;
    }
    .iam__offer__scrollto {
      color: #000;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
      margin-top: 160px;
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
        color: $color_accent;
        margin-right: 8px;
      }
    }
  }
}
</style>
