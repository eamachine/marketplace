<template>
  <div class="app">
    <router-view />
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '@/components/footer/MainFooter.vue'
import stores from '@/data/stores.json'
import locations from '@/data/locations.json'

export default {
  name: 'App',
  components: { MainFooter },
  mounted () {
    this.$store.commit('addStores', stores)
    this.$store.commit('addLocations', locations)
  }
}
</script>

<style>
@import "./assets/normalize.css";
/*@import "./assets/reset.css";*/

@font-face {
  font-family: "asap";
  src: url("~@/assets/fonts/Asap-Regular.woff") format("woff"),
       url("~@/assets/fonts/Asap-Regular.ttf") format("truetype");
  font-display: auto;
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "asap";
  src: url("~@/assets/fonts/Asap-SemiBold.woff") format("woff"),
       url("~@/assets/fonts/Asap-SemiBold.ttf") format("truetype");
  font-display: auto;
  font-style: normal;
  font-weight: bold;
}

@font-face {
  font-family: "asap";
  src: url("~@/assets/fonts/Asap-Bold.woff") format("woff"),
       url("~@/assets/fonts/Asap-Bold.ttf") format("truetype");
  font-display: auto;
  font-style: normal;
  font-weight: bolder;
}

@font-face {
  font-family: "fredokaone";
  src: url("~@/assets/fonts/FredokaOne-Regular.woff") format("woff"),
    url("~@/assets/fonts/FredokaOne-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "sacramento";
  src: url("~@/assets/fonts/Sacramento-Regular.woff") format("woff"),
    url("~@/assets/fonts/Sacramento-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "monserrat";
  src: url("~@/assets/fonts/Montserrat-Regular.ttf") format("truetype");
}

.hide-mobile, .hide-tablet, .hide-md-desktop, .hide-sm-mobile {
  display: none;
  visibility: hidden;
}

.hide-desktop, .show-sm-mobile {
  display: block;
  visibility: visible;
}

.app {
  font-family: "monserrat", sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
}

@media only screen and (min-width: 1024px) {
  .hide-tablet {
    display: block;
    visibility: visible;
  }
}

@media only screen and (min-width: 1440px) {
  .hide-md-desktop {
    display: block;
    visibility: visible;
  }
}

html {
  scroll-behavior: smooth;
}

/*COMMON STYLES */

.arrow-icon {
  width: 40px;
  padding: 0.25em;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
}

.left-bar {
  position: absolute;
  background-color: transparent;
  top: 0;
  left:0;
  width: 20px;
  height: 5px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 1px;
}

.left-bar:after {
  content:"";
  width: 20px;
  height: 5px;
  display: block;
  float: right;
  border-radius: 10px 6px 6px 10px;
  transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
  z-index: -1;
}

.right-bar {
  position: absolute;
  background-color: transparent;
  top: 0px;
  left:13px;
  width: 20px;
  height: 5px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 1px;
}

.right-bar:after {
  content:"";
  width: 20px;
  height: 5px;
  display: block;
  float: right;
  border-radius: 10px 6px 6px 10px;
  transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
  z-index: -1;
}

.open .left-bar:after {
  transform-origin: center center;
  transform: rotate(-70deg);
  }
.open .right-bar:after {
  transform-origin: center center;
  transform: rotate(70deg);
}
</style>
