<template>
  <div class="iam__header__preheader">
    <div class="content">
      <IamLocation></IamLocation>
      <IamSocial></IamSocial>
      <IamLogin></IamLogin>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamLocation from '@/components/Global/IamLocation/IamLocation.vue';
import IamSocial from '@/components/IamHeader/IamPreHeader/IamSocial.vue';
import IamLogin from '@/components/IamHeader/IamPreHeader/IamLogin.vue';

@Options({
  components: {
    IamLocation,
    IamSocial,
    IamLogin,
  },
})
export default class IamPreHeader extends Vue {}
</script>

<style lang="scss">
.iam__header__preheader {
  width: 100%;
  padding: 25px 0;
  background: $color_grey_light;
  font-size: 0.9375rem;
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
