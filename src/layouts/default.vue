<template>
  <div class="layout">
    <Header />
    <nuxt/>
  </div>
</template>

<script>
  import Header from '../components/Header';
  export default {
    components: {
      Header
    }
  }
</script>

<style>
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: 100;
  }
@font-face {
  font-family: 'GmarketSans';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: 400;
}
@font-face {
  font-family: 'GmarketSans';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
  font-weight: 700;
}
html {
  font-family: "GmarketSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
body {
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

  #__nuxt, #__layout {
    height: 100%;
    position: relative;
  }

  .layout {
    position: relative;
    height: 100%;

  }
</style>

