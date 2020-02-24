<template>
  <DimmedBackground @click="clickOutside">
    <component :is="layer" @closeMemberLayer="closeMemberLayer"></component>
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
  computed: {
    layer() {
      return this.$store.getters['user/memberLayer'];
    },
  },
  methods: {
    closeMemberLayer() {
      this.$store.commit('user/setMemberLayer', '');
    },
    clickOutside(event) {
      if (event.target.classList.contains('dimmedBackground')) {
        this.closeMemberLayer();
      }
    },
  },
};
</script>

<style lang="scss">
</style>

