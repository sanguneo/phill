<template>
  <div class="header">
    <div id="brand" @click="$router.push('/')">TOS</div>
    <ul id="menus">
      <li class="menu" @click="$router.push('news')">NEWS</li>
      <li class="menu" @click="$router.push('catalog')">CATALOGS</li>
    </ul>
    <div id="avatar" :class="userActive && 'active'" @click="userActive ? openLogin() : $router.push('/mypage')"></div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['user/user'];
    },
    userActive() {
      return this.user && this.user.id !== undefined && this.user.id !== null;
    },
  },
  methods: {
    openLogin() {
      this.$store.commit('user/setMemberLayer', 'Login');
    },
  },
};
</script>

<style lang="scss">
.header {
  box-sizing: border-box;
  border-bottom: 1px solid black;
  height: 50px;
  padding: 0 calc(50% - 512px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & > #brand {
    height: 100%;
    line-height: 50px;
    font-family: 'Black Han Sans';
    font-size: 25px;
  }
  & > #menus {
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    .menu {
      cursor: pointer;
    }
    & > li {
      width: 80px;
      letter-spacing: -1px;
      text-align: center;
    }
  }
  & > #avatar {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #7F828B;
    &:not(.active) {
      background-image: url("../assets/img/user.svg");
      background-color: #7F828B;
      background-size: 100%;
      filter: invert(100%);
    }
  }
}
</style>

