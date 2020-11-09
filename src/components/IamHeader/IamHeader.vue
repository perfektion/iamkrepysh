<template>
  <header id="iam__header" class=".iam__header">
    <IamPreHeader></IamPreHeader>
    <div class="iam__header__content">
      <div class="content">
        <IamLogo></IamLogo>
        <IamPhone></IamPhone>
        <IamNav></IamNav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamPreHeader from '@/components/IamHeader/IamPreHeader/IamPreHeader.vue';
import IamLogo from '@/components/Global/IamLogo/IamLogo.vue';
import IamPhone from '@/components/Global/IamPhone.vue';
import IamNav from '@/components/Global/IamNav/IamNav.vue';

@Options({
  components: {
    IamPreHeader,
    IamLogo,
    IamPhone,
    IamNav,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
header {
  z-index: 100;
}
.iam__header__content {
  padding: 20px 0;
  position: relative;
  z-index: 101;
  box-shadow: 0px 3px 17.6px 2.4px rgba(0, 0, 0, 0.06);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iam__logo {
      flex-grow: 3;
    }
    .iam__phone {
      flex-grow: 1;
    }
  }
}
</style>
