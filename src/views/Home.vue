<template>
  <IamHeader></IamHeader>
  <main>
    <IamOffer></IamOffer>
    <IamBenefit></IamBenefit>
    <IamTrainersTeam></IamTrainersTeam>
    <IamBase></IamBase>
    <IamVideoTraining></IamVideoTraining>
    <IamOnline></IamOnline>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamHeader from '@/components/IamHeader/IamHeader.vue';
import IamOffer from '@/components/IamOffer/IamOffer.vue';
import IamBenefit from '@/components/IamBenefit/IamBenefit.vue';
import IamTrainersTeam from '@/components/IamTrainersTeam/IamTrainersTeam.vue';
import IamBase from '@/components/IamBase/IamBase.vue';
import IamVideoTraining from '@/components/IamVideoTraining/IamVideoTraining.vue';
import IamOnline from '@/components/IamOnline/IamOnline.vue';

@Options({
  components: {
    IamHeader,
    IamOffer,
    IamBenefit,
    IamTrainersTeam,
    IamBase,
    IamVideoTraining,
    IamOnline,
  },
})
export default class Home extends Vue {}
</script>
