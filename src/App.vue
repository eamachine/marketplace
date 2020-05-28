<template>
  <div class="app">
    <main-header></main-header>
    <router-view />
  </div>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue'

export default {
  name: 'App',
  components: {MainHeader}
}
</script>

<style>
@import "./assets/normalize.css";
/*@import "./assets/reset.css";*/

@font-face {
font-family:"aaux-next";
src:url("~@/assets/fonts/Aaux Next light.woff2") format("woff2"),
url("~@/assets/fonts/Aaux Next light.woff") format("woff"),
url("~@/assets/fonts/Aaux Next light.otf") format("opentype");
font-display:auto;font-style:normal;font-weight:300;
}

@font-face {
font-family:"aaux-next";
src:url("~@/assets/fonts/Aaux Next regular.woff2") format("woff2"),
url("~@/assets/fonts/Aaux Next regular.woff") format("woff"),
url("~@/assets/fonts/Aaux Next regular.otf") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"aaux-next";
src:url("~@/assets/fonts/Aaux Next Medium.woff2") format("woff2"),
url("~@/assets/fonts/Aaux Next Medium.woff") format("woff"),
url("~@/assets/fonts/Aaux Next Medium.otf") format("opentype");
font-display:auto;font-style:normal;font-weight:500;
}

@font-face {
font-family:"aaux-next";
src:url("~@/assets/fonts/Aaux Next Semi Bold.woff2") format("woff2"),
url("~@/assets/fonts/Aaux Next Semi Bold.woff") format("woff"),
url("~@/assets/fonts/Aaux Next Semi Bold.otf") format("opentype");
font-display:auto;font-style:normal;font-weight:600;
}

@font-face {
font-family:"aaux-next";
src:url("~@/assets/fonts/Aaux Next Bold.woff2") format("woff2"),
url("~@/assets/fonts/Aaux Next Bold.woff") format("woff"),
url("~@/assets/fonts/Aaux Next Bold.otf") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

.hide-mobile {
  display: none;
  visibility: hidden;
}

.hide-desktop {
  display: block;
  visibility: visible;
}

.app {
  font-family: 'aaux-next', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

body {
  background-image: url("~@/assets/sm-back.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: auto 90vh;
  background-color: #eee;
}

.hide-sm-mobile {
  display: none;
  visibility: hidden;
}

.show-sm-mobile {
 display: block;
visibility: visible;
}

@media only screen and (min-width: 321px) {
  .hide-sm-mobile {
    display: block;
    visibility: visible;
  }

  .show-sm-mobile {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (min-width: 768px) {
  .hide-mobile {
    display: block;
    visibility: visible;
  }

  .hide-desktop {
    display: none;
    visibility: hidden;
  }

  body {
    background-image: url("~@/assets/md-back.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
  }
}

/*LARGE DESKTOPS*/

@media only screen and (min-width: 1440px) {
  body {
    background-image: url("~@/assets/back.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
