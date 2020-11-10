<template>
  <section class="iam__trainers">
    <div class="content">
      <h2>Команда тренеров работают над развитием <span>вашего ребёнка</span></h2>
      <p>Каждый эксперт даёт только то, чему посвятил свою жизнь</p>
      <img src="./img/team.png" alt="Команда тренеров школы" />
      <ul class="iam__trainers__arias">
        <li class="iam__trainers__arias__first">Гибкость</li>
        <li class="iam__trainers__arias__second">Силу</li>
        <li class="iam__trainers__arias__third">Скорость</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class IamTrainersTeam extends Vue {}
</script>

<style lang="scss">
.iam__trainers {
  text-align: center;
  padding: 100px 0;
  background-color: #fff;
  .content {
    position: relative;
    h2 {
      width: 440px;
      margin: 0 auto;
    }
    p {
      color: $color_grey_dark;
    }
    img {
      position: inherit;
      z-index: 2;
    }
  }
  .iam__trainers__arias {
    list-style: none;
    position: absolute;
    top: 0;
    z-index: 1;
    li {
      width: 180px;
      text-align: center;
      padding-top: 21px;
      padding-bottom: 21px;
      font-size: 1.25rem;
      color: #fff;
      border-radius: 6px;
      font-family: "BIP";
      position: absolute;
    }
    .iam__trainers__arias__first {
      background: #237fce;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      top: 264px;
      left: 60px;
      &::before {
        content: url(./img/circles-1.svg);
        position: absolute;
        top: -30px;
        left: -30px;
      }
    }
    .iam__trainers__arias__second {
      position: absolute;
      background: #c31f06;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 723px;
      left: 410px;
      &::before {
        content: url(./img/circles-2.svg);
        position: absolute;
        bottom: -30px;
        left: -30px;
      }
    }
    .iam__trainers__arias__third {
      position: absolute;
      background: #e49a37;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 304px;
      left: 810px;
      &::after {
        content: url(./img/circles-3.svg);
        position: absolute;
        top: -30px;
        right: -30px;
      }
    }
  }
}
@media screen and (max-width: $media_xl) {
  .iam__trainers {
    text-align: center;
    padding: 100px 0;
    background-color: #fff;
    .content {
      position: relative;
      h2 {
        width: 440px;
        margin: 0 auto;
      }
      p {
        color: $color_grey_dark;
      }
      img {
        width: 600px;
      }
    }
    .iam__trainers__arias {
      list-style: none;
      position: absolute;
      top: 0;
      z-index: 1;
      li {
        width: 180px;
        text-align: center;
        padding-top: 21px;
        padding-bottom: 21px;
        font-size: 1.25rem;
        color: #fff;
        border-radius: 6px;
        font-family: "BIP";
        position: absolute;
      }
      .iam__trainers__arias__first {
        background: #237fce;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        top: 264px;
        left: 40px;
        &::before {
          content: url(./img/circles-1.svg);
          position: absolute;
          top: -30px;
          left: -30px;
        }
      }
      .iam__trainers__arias__second {
        position: absolute;
        background: #c31f06;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 604px;
        left: 330px;
        &::before {
          content: url(./img/circles-2.svg);
          position: absolute;
          bottom: -30px;
          left: -30px;
        }
      }
      .iam__trainers__arias__third {
        position: absolute;
        background: #e49a37;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 270px;
        left: 660px;
        &::after {
          content: url(./img/circles-3.svg);
          position: absolute;
          top: -30px;
          right: -30px;
        }
      }
    }
  }
}

@media screen and (max-width: $media_md) {
  .iam__trainers {
    .content {
      img {
        width: 100%;
      }
      h2 {
        width: 100%;
      }
      .iam__trainers__arias {
        list-style: none;
        position: inherit;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        widows: 100%;
        padding: 0;
        li {
          text-align: center;
          font-size: 1.125rem;
          position: static;
          width: 32%;
        }
        .iam__trainers__arias__first {
          background: #237fce;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          top: 0;
          left: 0;
          &::before {
            content: "";
            position: inherit;
          }
        }
        .iam__trainers__arias__second {
          position: inherit;
          background: #c31f06;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          top: 0;
          left: 0;
          &::before {
            content: "";
            position: inherit;
          }
        }
        .iam__trainers__arias__third {
          position: inherit;
          background: #e49a37;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          &::after {
            content: "";
            position: inherit;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $media_sm) {
  .iam__trainers {
    .content {
      img {
        width: 100%;
      }
      h2 {
        width: 100%;
      }
      .iam__trainers__arias {
        list-style: none;
        position: inherit;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        widows: 100%;
        padding: 0;
        li {
          text-align: center;
          font-size: 1.125rem;
          position: static;
          width: 32%;
        }
        .iam__trainers__arias__first {
          background: #237fce;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          top: 0;
          left: 0;
          &::before {
            content: "";
            position: inherit;
          }
        }
        .iam__trainers__arias__second {
          position: inherit;
          background: #c31f06;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          top: 0;
          left: 0;
          &::before {
            content: "";
            position: inherit;
          }
        }
        .iam__trainers__arias__third {
          position: inherit;
          background: #e49a37;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          &::after {
            content: "";
            position: inherit;
          }
        }
      }
    }
  }
}
</style>
