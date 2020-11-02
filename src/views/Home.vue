<template>
<IamHeader></IamHeader>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IamHeader from '@/components/IamHeader/IamHeader.vue';

@Options({
  components: {
    IamHeader,
  },
})
export default class Home extends Vue {}
</script>
