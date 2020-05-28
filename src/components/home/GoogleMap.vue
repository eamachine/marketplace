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
        url: require('../../assets/logo-sm.png'),
        scaledSize: {width: 30, height: 30}
        }"
      @dragend="moveAddress"
      :animation="2"
      :draggable="true"
      ></gmap-marker>
    <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{
          url: require('../../assets/market.png'),
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
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
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
      center: { lat: 4.6193564, lng: -74.0841302 },
      userlocation: { lat: 0, lng: 0 },
      markers: [{position: {lat: 4.719309, lng: -74.084088}}, {position: {lat: 4.719309, lng: -74.0841302}}, {position: { lat: 4.6193564, lng: -74.0841302 }}, {position: {lat: 4.729309, lng: -74.085088}}, {position: {lat: 4.719609, lng: -74.0851302}}, {position: { lat: 4.6193964, lng: -74.0821302 }}]
    }
  },

  beforeMount () {
    this.geolocate()
  },

  methods: {
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
    },
    getInfoWindowContent: function (marker) {
      return (
        `<div class="">
          <div>
            <div>
              <div class="m-2"><span style="font-weight: bold;">Device Name: </span>
                ${marker.name}
              </div>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Location:  </span>
              ${marker.location}
              <br>
            </div>
          </div>
        </div>`)
    },
    moveAddress: function (marker) {
      var geocoder = new google.maps.Geocoder()
      geocoder.geocode({latLng: marker.latLng}, this.getGeoCoder)
    },
    getGeoCoder: function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        this.$emit('changeAddress', results[0].formatted_address)
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
  height: 550px;
  border-radius:20px;
  overflow: hidden;
}
</style>
