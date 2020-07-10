<template>
<div class="services-wrapper" tabindex="0" @blur="open=false">
  <span  class="button" v-bind:class="{'open' : open}"  @click="open=!open">
    <img v-bind:src="require('../../assets/icon/'+ this.$store.state.service + '-icon.png')" class="icon-lg">
    <div class="select">
      <span >¿Que buscas?</span>
      <a class="arrow-icon">
        <span class="left-bar"></span>
        <span class="right-bar"></span>
      </a>
    </div>
  </span>
  <div v-if="open" class="services-container">
      <div class="services">
        <div @click="filter('veterinaria')" class="service light-purple">
          <img src="../../assets/icon/veterinaria-icon.png" class="icon" alt="veterinaria">
          <h2>Veterinaria</h2>
        </div>
        <div @click="filter('tienda')" class="service purple">
          <img src="../../assets/icon/tienda-icon.png" class="icon" alt="tienda">
          <h2>e-commerce</h2>
        </div>
        <div @click="filter('urgencias')" class="service blue">
          <img src="../../assets/icon/urgencias-icon.png" class="icon" alt="urgencias">
          <h2>Urgencias</h2>
        </div>
        <div @click="filter('peluqueria')" class="service green">
          <img src="../../assets/icon/peluqueria-icon.png" class="icon" alt="peluqueria">
          <h2>Peluqueria</h2>
        </div>
        <div @click="filter('entrenador')" class="service blue">
          <img src="../../assets/icon/entrenador-icon.png" class="icon" alt="entrenador">
          <h2>Entrenador</h2>
        </div>
        <div @click="filter('hotel')" class="service purple">
          <img src="../../assets/icon/hotel-icon.png" class="icon" alt="hotel">
          <h2>Guarderia</h2>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      open: false
    }
  },
  methods: {
    filter: function (service) {
      this.$store.commit('setService', service)
      this.open = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-bar:after, .left-bar:after {
  background-color: #2C3E50;
}

.select {
  width: 80vw;
  display: flex;
  align-items: center;
}

.button {
  cursor: pointer;
  border: none;
  background: #fff;
  color: #2C3E50;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.services-wrapper {
  position: relative;
  outline: none;
}

.services-container {
  width: 250px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid #2C3E50;
  border-radius: 10px;
  position: absolute;
  margin-top: 10px;
  z-index: 1;
}

.icon {
  width: 45px;
}

.icon-lg {
  width: 35px;
}

.services {
  margin: 20px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.service {
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
}

.blue {
  color: #00DADC;
}

.green {
  color: #B9D544;
}

.purple {
  color: #4057E3;
}

.light-purple {
  color: #928DF2;
}

.dark-purple {
  color: #2c3e50;
}

h2 {
  font-size: 14px;
  margin: 0 0 0 20px;
  padding: 0;
}

@media only screen and (min-width: 1024px) {
  .select {
    width: auto;
  }

  .services-container {
    height: auto;
    left: auto;
    top: auto;
    position: absolute;
    border-radius: 10px;
    margin-left: -50px;
  }

  .services {
    justify-content: left;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .service {
    margin: 5px 20px;
  }

  .icon-lg {
    width: 50px;
  }
}
</style>
