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
        <li v-for="item in navItems" :key="item" class="iam__nav__item">
          <a @click="showNav = !showNav" class="iam__nav__item__link" :href="item.link">{{
            item.title
          }}</a>
        </li>
      </ul>
    </section>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamNav',
  data: () => ({
    showNav: false,
  }),
  computed: {
    navItems(): unknown {
      return this.$store.state.navItems;
    },
  },
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
  column-count: 2;
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

@media screen and (max-width: $media_md) {
  .iam__nav__items {
    column-count: 1;
    background: #fff;
  }
}

@media screen and (max-width: $media_sm) {
  .iam__nav__items {
    column-count: 1;
    background: #fff;
  }
}
</style>
