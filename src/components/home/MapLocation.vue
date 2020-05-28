<template>
<div class="map-container" @mouseenter="hover = true" @mouseleave="hover = false" v-bind:class="{'hover' : hover}">
    <input
      class="input"
      placeholder="Ingresa tu direccion o usa el mapa"
      v-bind:value="address"
      v-on:input="address = $event.target.value"
    >
    <img class="logo" src="../../assets/logo-sm.png" @click="open = true"/>
    
    <overlay :open="open">
      <div class="map-modal">
        <div class="map-address">
          <p class="address"><strong> Dirección:</strong> {{address}} <span v-if="!address"> Mueve el pin en el mapa para ajustar la ubicación</span></p>
          <img class="close" src="../../assets/close.svg" @click="open = false"/></div>
        <google-map v-on:changeAddress="setAddress"/>
      </div>
    </overlay>

</div>
</template>

<script>
import GoogleMap from '@/components/home/GoogleMap.vue'
import Overlay from '@/components/home/Overlay.vue'

export default {
  name: 'MapLocation',
  components: { GoogleMap, Overlay },
  data () {
    return {
      address: null,
      hover: false,
      open: false
    }
  },
  methods : {
    setAddress: function(value) {
      this.address = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-wrapper {
  position: absolute;
  left: 50%;
  top: 0;
}

.map-modal {
  position: relative;
  width: 325px;
  top: 100px;
  left: calc((100% - 325px)/2);
}

.map-container {
  display: flex;
  align-items: center;
}

.map-address {
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 5px;
  border-radius: 10px;
}

.logo {
  margin: 0 10px;
  position: relative;
}

.hover .logo {
  animation: slide 0.5s 2;
}

.input {
    padding: 10px 20px;
    border-radius: 5px;
    width: 230px;
}

@keyframes slide {
  from {bottom: 5px;}
  to {bottom:0;}
}

@media only screen and (min-width: 1024px) {
  .map-modal {
    width: 1024px;
    left: calc((100% - 1024px)/2);
  }
}

</style>
