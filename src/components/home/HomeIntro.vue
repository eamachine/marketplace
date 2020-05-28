<template>
  <div class="intro">
    <h1 class="h1">LLevamos todo lo que tu mascota necesita</h1>
    <div class="hide-desktop">
      <div class="map-location">
        <h3 class="h3">Encuentra los comercios cercanas a tu ubicación</h3>
        <map-location />
      </div>
    </div>
    <h3
      class="hide-mobile"
    >Apoyamos a los comerciantes de tu zona, todos los servicios que necesitas rapido y a la pata.</h3>
    <p
      class="hide-mobile"
    >Jugetes, ropa, comida, y mil cosas mas para gatos, perros, canarios, elefantes, bueno solo exageramos. pero para todas tus mascotas tenemos mucho amor y todo lo que necesitas.</p>
  </div>
</template>

<script>
import MapLocation from '@/components/home/MapLocation.vue'

export default {
  name: 'HomeIntro',
  components: { MapLocation }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-location {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.intro {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  min-height: 200px;
  padding: 10px;
  margin: 0 10px;
  text-align: left;
}

.h1 {
  color: #1f7c86;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.h2,
.h3 {
  color: #d90c1f;
  font-size: 18px;
  font-weight: 600;
}

p {
  font-size: 14px;
}

@media only screen and (min-width: 768px) {
  .intro {
    padding: 25px 10%;
    margin: 0;
  }

  .h1 {
    font-size: 28px;
    font-weight: 800;
    text-align: left;
  }

  .h2 {
    font-size: 24px;
  }
}
</style>
