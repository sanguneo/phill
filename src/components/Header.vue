<template>
  <div class="header">
    <div id="brand">TOS</div>
    <ul id="menus">
      <li>NEWS</li>
      <li>제품</li>
    </ul>
    <div id="avatar" :class="user && user.id !== undefined && user.id !== null && 'active'"></div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data: () => ({
    user: {
      name: 'sanguneo',
      profile: 'about:blank',
    },
  }),
  mounted() {
    // console.log(firebase);
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
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    & > li {
      width: 80px;
      letter-spacing: -1px;
    }
  }
  & > #avatar {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(.active) {
      background-image: url("../assets/img/user.svg");
      background-color: #7F828B;
      background-size: 100%;
      filter: invert(100%);
    }
  }
}
</style>

