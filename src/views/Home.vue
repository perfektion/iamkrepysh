<template>
  <IamHeader></IamHeader>
  <main>
    <IamOffer></IamOffer>
    <IamBenefit></IamBenefit>
    <IamTrainersTeam></IamTrainersTeam>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamHeader from '@/components/IamHeader/IamHeader.vue';
import IamOffer from '@/components/IamOffer/IamOffer.vue';
import IamBenefit from '@/components/IamBenefit/IamBenefit.vue';
import IamTrainersTeam from '@/components/IamTrainersTeam/IamTrainersTeam.vue';

@Options({
  components: {
    IamHeader,
    IamOffer,
    IamBenefit,
    IamTrainersTeam,
  },
})
export default class Home extends Vue {}
</script>
