<template>
  <div class="container">
    <div class="myinfo">
      <div class="profileImg"></div>
      <div class="label">이름</div>
      <input type="text" class="username" value="이름" />
      <div class="label">이메일</div>
      <input type="text" class="email" value="email@email.com" />
      <div class="label">전화번호</div>
      <input type="text" class="tel" value="01012345678" />
      <div class="label">회원유형</div>
      <select readonly>
        <option value="1" selected>일반회원</option>
        <option value="2">개발업체/연구소</option>
        <option value="3">관리자</option>
      </select>
      <div class="label">관심업체</div>
      <div class="interestMakers">
        <div>aadsfasdf</div><div>aasdf</div><div>aadsfaasdfafsdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aerqwer</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div>
      </div>
      <div class="label">관심태그</div>
      <div class="interestTags">
        <div>aadsfasdf</div><div>aasdf</div><div>aadsfaasdfafsdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aerqwer</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div><div>aadsfasdf</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mypage',
};
</script>

<style lang="scss">
.container {
  margin: 0 calc(50% - 512px);
  width: 1024px;
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  text-align: left;

  & > .myinfo {
    width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > .profileImg {
      margin: 50px 0;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background-color: #7f828b;
      &:not(.exist) {
        background-color: #7f828b;
        background-image: url('../assets/img/user.svg');
        background-size: 100%;

        filter: invert(100%);
      }
    }
    & > input[type=text] {
      width: 100%;
      border: 0;
      font-size: 15px;
    }
    & > select {
      margin-right: auto;
      padding: 0;
      padding-left: 0;
      width: 200px;
      border: 0;
      background-color: white;
      font-size: 15px;
      text-indent: 0;

      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .label {
      margin-top: 20px;
      margin-right: auto;
      margin-bottom: 5px;
      font-size: 15px;
      font-weight: bold;
    }
    .interestTags, .interestMakers {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      & > div {
        margin: 5px 5px 5px 0;
        padding: 2px 5px;
        border-radius: 5px;
        background-color: #e9e9e9;
        font-size: 12px;
      }
    }
    .interestTags > div:before {
      content: '#';
    }
    .interestMakers > div:before {
      content: '@';
    }
  }
}
</style>
