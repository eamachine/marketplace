<template>
  <section class="general-container">
    <h2 class="h2">Ubica tu tienda mas cercana en el mapa</h2>
    <div class="locate-container">
      <span class="locate" @click="geolocate()">
        <p>Usar GPS</p> <img src="../../assets/icon/location.svg" class="icon">
      </span>
    </div>
    <div class="map-container">
      <gmap-map
        :center="center"
        :zoom="14"
        class="g-map"
      >
      <gmap-marker
        :key="userlocation"
        :position="userlocation"
        :icon="{
          url: require('../../assets/icon/logo-sm.png'),
          scaledSize: {width: 30, height: 30}
          }"
        :animation="2"
        ></gmap-marker>
      <gmap-marker
          :title="m.name"
          :key="index"
          v-for="(m, index) in this.$store.state.stores"
          :position="m.position"
          :icon="{
            url: require('../../assets/icon/market.png'),
            scaledSize: {width: 36, height: 36}}"
          @click="toggleInfoWindow(m, index)"
        ></gmap-marker>

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        >
          <div v-html="infoContent"></div>
        </gmap-info-window>

      </gmap-map>
      <div class="shop">
        <div v-if="this.store">
          <img class="logo" v-bind:src="require('../../assets/stores/'+ store.urlimg)" :alt="store.name">
          <div>
            <h3 class="h3">{{store.name}}</h3>
            <p>{{store.address}}</p>
            <p>{{store.time}}</p>
            <p>{{store.description}}</p>
          </div>
          <div>
            <!-- <a class="e-commerce" :href="store.site" target="_blank">Tienda</a> -->
            <a v-if="store.site" class="site" :href="store.site" target="_blank">Sitio Web</a>
          </div>
          <div class="social">
            <a v-if="store.instagram" :href="store.instagram" target="_blank"><img src="../../assets/icon/instagram.svg" class="social-icon"></a>
            <a v-if="store.facebook" :href="store.facebook" target="_blank"><img src="../../assets/icon/facebook.svg" class="social-icon"></a>
          </div>
          <p class="services">{{store.services}}</p>
          <img src="../../assets/icon/heart-empty.svg" class="icon rate">
        </div>
        <div class="shop-text" v-if="!this.store"><p>Selecciona una tienda en el mapa para ver más detalles</p></div>
      </div>
    </div>
  </section>
</template>

<script>
import EventBus from '@/event-bus.js';

export default {
  name: 'GoogleMainMap',
  data () {
    return {
      infoWinOpen: false,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      located: false,
      store: null,
      center: { lat: 4.6193564, lng: -74.0841302 },
      userlocation: null
    }
  },
  mounted () {
    EventBus.$on('locate', this.relocate )
  },
  methods: {
    relocate: function() {
      this.userlocation = this.$store.state.userlocation
      this.center = this.$store.state.userlocation
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.userlocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.$store.commit('setUserLocation',  {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        this.$store.commit('setLocated')
      })
    },
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = this.getInfoWindowContent(marker)

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
      this.center = marker.position
      this.store = marker
    },
    getInfoWindowContent: function (marker) {
      return (
        `<div class="">
          <div>
            <div>
              <div class="m-2"><span style="font-weight: bold;">Tienda: </span>
                ${marker.name}
              </div>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Ubicacion:  </span>
              ${marker.address}
              <br>
            </div>
          </div>
        </div>`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.general-container {
  margin: 50px 0 0 0;
}

.shop-text {
  font-size: 18px;
  text-align: center;
}

.locate-container {
  width: 100%;
  text-align: right;
}

.locate {
  width: 95%;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  border-radius: 10px;
  background: none;
  border: none;
  color: #2c3e50;
}

.rate {
  width: 30px;
  float: right;
}

.social-icon {
  width: 40px;
  margin: 20px 20px 0 0;
}

.g-map {
  width: 90%;
  height: 400px;
  border-radius:20px;
  margin: auto;
  overflow: hidden;
  z-index: 0;
}

.h2 {
  margin: 20px 5%;
  font-family: "fredokaone";
  font-size: 24px;
  color: #2c3e50;
  text-align: left;
}

.map-container {
  display: flex;
  flex-wrap: wrap;
}

.shop {
  height: fit-content;
  width: 80%;
  margin: 20px auto;
  background: #2C3E50;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.h3 {
  font-size: 18px;
}

.logo {
  width: 120px;
}

.e-commerce {
 text-decoration: none;
 color: #B9D544;
 margin-right: 20px;
}

.site {
  text-decoration: none;
  color: #00DADC;
}

.services {
  color: #00DADC;
}

@media only screen and (min-width: 1024px) {
  .h2 {
    margin: 20px auto;
    width: 95%;
  }

  .g-map {
    width: 60%;
    height: 400px;
    border-radius:20px;
    margin: auto;
    overflow: hidden;
    z-index: 0;
  }

  .shop {
    width: 30%;
    min-height: 350px;
    border-radius: 10px;
    padding: 20px;
  }

  .locate {
    width: 60%;
  }

  .map-container {
    width: 95%;
    margin: auto;
  }
}
</style>
