<template>
  <div class="login">
    <div class="title">Login</div>
    <div class="label">ID</div>
    <input type="email" value="sknah0319@gmail.com" />
    <div class="label">Password</div>
    <input type="password" value="sknah0319@gmail.com" />
    <hr>
    <button class="loginBtn">로그인</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
  }),
  mounted() {
    console.log();
  },
};
</script>

<style lang="scss">
  .login {
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 4px gray;
    position: absolute;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    padding: 30px 50px;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
    & > .title {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 50px;
    }
    & > .label {
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    & > input {
      width: 100%;
      height: 30px;
      margin-bottom: 10px;
      border: 1px solid #e9e9e9;
      padding: 0 5px;
    }
    & > hr {
      margin: 20px 0 30px;
      height: 1px;
      background-color: #e9e9e9;
      border: none;
    }
    & > .loginBtn {
      width: 100%;
      height: 30px;
      background-color: #e9e9e9;
      border: 1px solid #d9d9d9;
      font-size: 13px;
    }
  }
</style>

