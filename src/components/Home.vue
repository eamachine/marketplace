<template>
<div>
  <main-header></main-header>
  <div class="home">
    <div class="home-container">
      <stores id="s1"></stores>
      <google-main-map></google-main-map>
      <shop-section id="s2"></shop-section>
    </div>
  </div>
</div>
</template>

<script>
import Stores from '@/components/home/Stores.vue'
import GoogleMainMap from '@/components/home/GoogleMainMap.vue'
import ShopSection from '@/components/home/ShopSection.vue'
import MainHeader from '@/components/header/MainHeader.vue'

export default {
  name: 'Home',
  components: { Stores, GoogleMainMap, ShopSection, MainHeader }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  width: 100%;
  margin: 20 0 100px 0;
}

@media only screen and (min-width: 768px) {
  .home {
    margin: 0px auto 100px;
  }

  .home-container {
    max-width: 1280px;
    margin: auto;
  }
}
</style>
