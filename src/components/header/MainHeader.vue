<template>
    <header class="header">
      <div class="header-container">
        <a href=""><img src="../../assets/logo.png"></a>
        <div class="selection-container">
          <div class="hide-mobile map"><map-location /></div>
          <select-location />
        </div>
      </div>
    </header>
</template>

<script>
import SelectLocation from './SelectLocation.vue'
import MapLocation from '@/components/home/MapLocation.vue'

export default {
  name: 'Header',
  components: { SelectLocation, MapLocation },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  background: rgba(255, 255, 255, 0.5);
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin:  20px auto;
}

@media only screen and (min-width: 768px) {
  .selection-container {
    align-items: center;
    display: flex;
    max-width: 600px;
    justify-content: space-around;
  }

  .map {
    margin-right: 20px;
  }
}
</style>
