<template>
  <div class="home">
   <home-intro></home-intro>
  <stores></stores>
  </div>
</template>

<script>
import Stores from '@/components/home/Stores.vue'
import HomeIntro from '@/components/home/HomeIntro.vue'

export default {
  name: 'Home',
  components: { Stores, HomeIntro }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  width: 100%;
  margin: 300px 0 0 0;
}

@media only screen and (min-width: 768px) {
  .home {
    max-width: 1280px;
    margin: 150px auto 0;
  }
}
</style>
