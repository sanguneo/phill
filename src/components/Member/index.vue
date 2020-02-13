<template>
  <DimmedBackground>
    <component :is="layer"></component>
  </DimmedBackground>
</template>

<script>
import Login from './Login.vue';
import Signup from './Signup.vue';
import DimmedBackground from '../DimmedBackground.vue';

export default {
  components: {
    Login,
    Signup,
    DimmedBackground,
  },
  data: () => ({
    layer: 'Signup',
  }),
  mounted() {
    console.log();
  },
};
</script>

<style lang="scss">
</style>

