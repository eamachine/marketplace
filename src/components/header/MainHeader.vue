<template>
  <div>
    <intro-hero></intro-hero>
    <header-large></header-large>
  </div>
</template>

<script>
import HeaderLarge from '@/components/header/HeaderLarge.vue'
import IntroHero from '@/components/header/IntroHero.vue'

export default {
  name: 'MainHeader',
  components: { HeaderLarge, IntroHero }
}
</script>

<style>

</style>
