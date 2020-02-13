<template>
  <div class="layout">
    <Header />
    <Member />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Member from '../components/Member';

export default {
  components: {
    Header,
    Member,
  },
};
</script>

<style>
@import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
@import url('//fonts.googleapis.com/css?family=Black+Han+Sans&display=swap&subset=korean');
html {
  box-sizing: border-box;
  height: 100%;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;

      -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body {
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt, #__layout {
  position: relative;
  height: 100%;
}

.layout {
  position: relative;
  height: 100%;
}
</style>

