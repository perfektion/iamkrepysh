<template>
  <section role="dialog" v-if="active" class="iam__popup">
    <div class="content">
      <button v-if="closeBtn" @click="onClick" class="iam__popup__close__button">
        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
          <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
        </svg>
      </button>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamPopup',

  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  methods: {
    onClick() {
      this.$emit('update:active');
    },
  },
});
</script>

<style lang="scss">
.iam__popup {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.8);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  transform: translateZ(0);
  z-index: 99992;
  .content {
    background-color: #fff;
    width: auto;
    position: relative;
    padding: 65px 60px;
    border-radius: 10px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.07);
    .iam__popup__close__button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px;
      background: none;
      border: none;
      width: 44px;
      cursor: pointer;
      & svg {
        display: block;
        fill: $color_grey;
        height: 100%;
        overflow: visible;
        position: relative;
        width: 100%;
      }
      &:hover {
        outline: none;
        & svg {
          fill: $color_accent;
        }
      }
      &:focus {
        outline: none;
        & svg {
          fill: $color_accent;
        }
      }
      &:active {
        outline: none;
        & svg {
          fill: $color_accent;
        }
      }
    }
  }
}

@media screen and (max-width: $media_sm) {
  .iam__popup {
    .content {
      padding: 35px 30px;
    }
  }
}
</style>
