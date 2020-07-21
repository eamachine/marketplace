<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="17"
      class="g-map"
    >
    <gmap-marker
      :key="userlocation"
      :position="userlocation"
      :icon="{
        url: require('../../assets/icon/logo-sm.png'),
        scaledSize: {width: 30, height: 30}
        }"
      @dragend="moveAddress"
      @click="infoWinOpen=!infoWinOpen"
      :animation="2"
      :draggable="true"
      ></gmap-marker>
      <gmap-info-window
        :options="infoOptions"
        :position="center"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      infoWinOpen: true,
      infoContent: `<div class="">Puedes mover el pin para ajustar la ubicación</div>`,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: { lat: 4.6193564, lng: -74.0841302 },
      userlocation: { lat: 4.6193564, lng: -74.0841302 }
    }
  },
  beforeMount () {
    if (this.$store.state.address) {
      this.geolocationFromAddress(this.$store.state.address)
    } else {
      this.geolocate()
    }
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        const latLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        this.$store.commit('setUserLocation', latLng)
        this.userlocation = latLng
        this.center = latLng

        var geocoder = new google.maps.Geocoder()
        geocoder.geocode({location: latLng}, this.getGeoCoder)

        this.$store.commit('setLocated')
      })
    },
    geolocationFromAddress: function (address) {
      var geocoder = new google.maps.Geocoder()
      geocoder.geocode({'address': address}, this.setGeoCoder)
    },
    moveAddress: function (marker) {
      this.$store.commit('setUserLocation', {
        lat: marker.latLng.lat(),
        lng: marker.latLng.lng()
      })

      this.center = {
        lat: marker.latLng.lat(),
        lng: marker.latLng.lng()
      }

      var geocoder = new google.maps.Geocoder()
      geocoder.geocode({latLng: marker.latLng}, this.getGeoCoder)
    },
    getGeoCoder: function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        this.$store.commit('setAddress', results[0].formatted_address)
      } else {
        console.log('Cannot determine address at this location.' + status)
      }
    },
    setGeoCoder: function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat()
        var longitude = results[0].geometry.location.lng()

        this.center = {
          lat: latitude,
          lng: longitude
        }

        this.userlocation = {
          lat: latitude,
          lng: longitude
        }

        this.$store.commit('setUserLocation', {
          lat: latitude,
          lng: longitude
        })
      } else {
        console.log('Cannot determine address at this location.' + status)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-map {
  width:100%;
  height: 450px;
  border-radius:20px;
  overflow: hidden;
}
</style>
