<template>
  <IamHeader></IamHeader>
  <main>
    <IamOffer></IamOffer>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamHeader from '@/components/IamHeader/IamHeader.vue';
import IamOffer from '@/components/IamOffer/IamOffer.vue';

@Options({
  components: {
    IamHeader,
    IamOffer,
  },
})
export default class Home extends Vue {}
</script>
