<template>
  <div ref="form" class="signup">
    <div class="title">Signup</div>
    <div class="label">ID</div>
    <input v-model="email" type="email" />
    <div class="label">Password</div>
    <input ref="password" v-model="password" type="password" />
    <div class="label">Confirm</div>
    <input ref="confirm" v-model="confirm" type="password" />
    <div class="label">이름</div>
    <input v-model="name" type="text" />
    <div class="label">Tel</div>
    <input v-model="tel" type="tel" />
    <div class="label">Type</div>
    <select v-model="type">
      <option value="1" selected>일반회원</option>
      <option value="2">개발업체/연구소</option>
    </select>
    <hr>
    <button class="signupBtn" @click="signup">회원가입</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    name: '상구너',
    email: 'email@email.com',
    password: 'asdfasdf',
    confirm: 'asdfasdf',
    tel: '01092292790',
    type: 1,
  }),
  methods: {
    signup() {
      if (this.password.length < 8) {
        alert('패스워드는 8자이상 입력해주세요');
        return;
      }
      if (this.password !== this.confirm) {
        alert('패스워드 입력을 확인해주세요.');
        return;
      }
      this.$store.dispatch('user/signup', this.$data);
    },
  },
};
</script>

<style lang="scss">
  .signup {
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 4px gray;
    position: absolute;
    width: 400px;
    /*height: 600px;*/
    box-sizing: border-box;
    padding: 30px 50px;
    top: calc(50% - 300px);
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
    & > select {
      width: 100%;
      height: 30px;
      margin-bottom: 10px;
      border: 1px solid #e9e9e9;
      border-radius: 0;
      margin-right: auto;
      padding: 0 5px;
      background-color: white;
      text-indent: 0;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    & > hr {
      margin: 20px 0 30px;
      height: 1px;
      background-color: #e9e9e9;
      border: none;
    }
    & > .signupBtn {
      width: 100%;
      height: 30px;
      background-color: #e9e9e9;
      border: 1px solid #d9d9d9;
      font-size: 13px;
    }
  }
</style>

