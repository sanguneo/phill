<template>
  <div class="stackPaper">
    <div :class="{activePaper : activePaper === 0}" @click="openPaper(0)">
      <div class="title">PHILL-8038</div>
      <div class="description">PHILL-8038 장비는 어쩌구저쩌구</div>
    </div>
    <div :class="{activePaper : activePaper === 1}" @click="openPaper(1)">
      <div class="title">Event</div>
      <div class="description">asdfsadf</div>
    </div>
    <div :class="{activePaper : activePaper === 2}" @click="openPaper(2)">
      <div class="title">Contact</div>
      <div class="description">제품을 홍보하고, 사이트에 대해 문의하세요.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackPaper',
  data() {
    return {
      activePaper: 0,
    };
  },
  methods: {
    openPaper(e) {
      this.activePaper = e;
    },
  },
};
</script>

<style lang="scss">
  .stackPaper {
    width: 100%;
    height: 300px;
    & > div {
      height: 100%;
      float: left;
      width: 200px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
      background-position: bottom right;
      background-size: 200px 200px;
      position: relative;
      transition: 1s all;
      &:nth-child(1){
        background-color: rgb(27, 154, 144);
      }
      &:nth-child(2){
        background-color: rgb(74, 99, 23);
      }
      &:nth-child(3){
        background-color: rgb(99, 51, 90);
      }
      div.title {
        font-size: 20px;
        position: absolute;
        top: 50px;
        transition: 1s all;
        color: white;
        font-weight: bold;
        font-family: 'GmarketSans';
      }
      div.description {
        font-size: 13px;
        position: absolute;
        top: 80px;
        left: 50px;
        transition: 1s all;
        color: white;
        font-weight: 500;
      }
      &:not(.activePaper) {
        .title {
          font-size: 15px;
          width: 100%;
          text-align: center;
        }
        .description {
          display: none;
        }
      }
      &.activePaper {
        width: 624px;
        background-size: 300px 300px;
        div.title {
          font-size: 20px;
          position: absolute;
          top: 50px;
          left: 50px;
        }
      }
    }
  }
</style>
