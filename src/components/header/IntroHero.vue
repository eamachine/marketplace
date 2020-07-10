<template>
  <div class="back">
    <div class="intro-hero">
      <home-intro></home-intro>
    </div>
  </div>
</template>

<script>
import HomeIntro from '@/components/home/HomeIntro.vue'

export default {
  name: 'IntroHero',
  components: { HomeIntro }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
  background: linear-gradient(#1F2033 5%, #483875);
}

.intro-hero {
  background-image: url("~@/assets/img/back.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 200px;
  width: 100%;
  height: 500px;
}

@media only screen and (min-width: 768px) {
  .intro-hero {
    height: 350px;
    background-position: bottom right 10%;
  }
}

@media only screen and (min-width: 1024px) {
  .intro-hero {
   background-size: 280px;
   background-position: bottom right calc(50% - 400px);
   height: 450px;
  }
}

@media only screen and (min-width: 1280px) {
  .intro-hero {
   background-position: bottom right calc(50% - 450px);
  }
}
</style>
