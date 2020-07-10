<template>
<span>
  <overlay :open="open">
    <div class="map-modal">
      <img class="close" src="../../assets/icon/close.svg" @click="open = false"/>
      <div class="map-address">
        <span>
          <p v-if="this.$store.state.address"><strong> Dirección : </strong> {{ this.$store.state.address }} </p>
          <p v-if="!this.$store.state.address">Mueve el pin en el mapa para ajustar la ubicación</p>
        </span>
        <span class="validate" v-if="this.$store.state.address">
          <p>La dirección coincide con la ubicación en el Mapa?</p>
          <button class="button" @click="validateAddress()">Continuar</button>
        </span>
      </div>
      <google-map ref="gmap" />
    </div>
  </overlay>
</span>
</template>

<script>
import GoogleMap from '@/components/home/GoogleMap.vue'
import Overlay from '@/components/home/Overlay.vue'
import EventBus from '@/event-bus.js';

export default {
  name: 'MapLocation',
  components: { GoogleMap, Overlay },
  data () {
    return {
      open: false
    }
  },
  methods: {
    geocode: function () {
      this.$refs.gmap.geolocationFromAddress(this.$store.state.address)
    },
    validateAddress() {
      EventBus.$emit('locate');
      this.open = false;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.validate {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.map-modal {
  position: relative;
  width: 325px;
  top: 20px;
  left: calc((100% - 325px)/2);
}

.map-address {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.9);
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
}

.input {
    padding: 10px 20px;
    border-radius: 5px;
    width: 230px;
    border: none;
}

.input:focus {
  border:rgba(255, 255, 255, 0.7);
}

.button {
    cursor: pointer;
    background: #00DADC;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px 20px;
    margin-left: 20px;
    outline: none;
}

.close {
  float: right;
}

@keyframes slide {
  from {bottom: 5px;}
  to {bottom:0;}
}

@media only screen and (min-width: 1024px) {
  .map-modal {
    top: 50px;
    width: 1024px;
    left: calc((100% - 1024px)/2);
  }
}

</style>
