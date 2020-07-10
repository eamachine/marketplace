<template>
<div>
    <span class="hide-mobile">
        <div class="input input-lg input-container" @click="open= true">
            <span v-if="this.$store.state.address"> {{ this.$store.state.address }}</span>
            <span v-if="!this.$store.state.address">Ingresa tu dirección o usa el mapa</span>
            <img class="location" src="../../assets/icon/location.svg" />
        </div>
    </span>
    <img class="location-img hide-desktop" src="../../assets/icon/location.svg" @click="open = true" alt="close"/>
    <map-icon ref="map" class="map"/>
    <overlay :open="open">
        <div class="modal" v-if="open">
            <img class="close" src="../../assets/icon/close.svg" @click="open = false" alt="close"/>
            <p>Ciudad: </p>
            <select class="select" v-model="city">
                <option>Bogotá</option>
                <option>Medellin</option>
                <option>Barranquilla</option>
            </select>
            <p>Dirección: </p>
            <div class="address-container">
                <select class="select" v-model="root">
                    <option>Calle</option>
                    <option>Carrera</option>
                    <option>Avenida Carrera</option>
                    <option>Avenida calle</option>
                    <option>Diagonal</option>
                    <option>Transversal</option>
                </select>
                <div class="address-container-1">
                    <input placeholder="__" v-model="rootnumber" class="input input-md" >
                    <span> # </span>
                    <input placeholder="__" v-model="crossnumber" class="input input-md" >
                    <span> - </span>
                    <input placeholder="__" v-model="housenumber" class="input input-sm" >
                </div>
            </div>
            <button class="button" @click="validateAddress()">Validar</button>
            <span class="action" @click="openModal()">
                <p>Usa el mapa</p>
                <img class="location" alt="location" src="../../assets/icon/location.svg"/>
            </span>
        </div>
    </overlay>
</div>
</template>

<script>
import Overlay from '@/components/home/Overlay.vue'
import MapIcon from '@/components/home/MapIcon.vue'

export default {
  name: 'AddressInput',
  components: { Overlay, MapIcon },
  data () {
    return {
      open: false,
      city: 'Bogotá',
      root: 'Calle',
      rootnumber: '',
      crossnumber: '',
      housenumber: ''
    }
  },
  methods: {
    validateAddress: function () {
      this.$store.commit('setAddress', this.root + ' ' + this.rootnumber + ' # ' + this.crossnumber + ' - ' + this.housenumber + ', ' + this.city)
      this.open = false
      this.$refs.map.open = true
      this.$refs.map.geocode()
    },
    openModal: function () {
      this.open = false
      this.$refs.map.open = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
    height: 20px;
    width: 20px;
    margin-left: 10px;
}

.action {
  cursor: pointer;
  display: flex;
  align-items: center;
  float: right;
}

.location-img {
    height: 30px;
    width: 30px;
    margin: 0 20px;
}

.input-container {
    display: flex;
    align-items: center;
}

.close {
    float: right;
}

.input {
    cursor: pointer;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #2c3e50;
}

.input-lg {
    padding: 5px 15px;
}

.input-sm {
    padding: 5px 10px 5px 5px;
    width: 40px;
}

.input-md {
    padding: 5px 10px 5px 5px;
    width: 80px;
}

select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background: url("~@/assets/icon/arrow-down-16.png") no-repeat 95% 50% white;
}

select:focus {
    outline: none;
}

input:focus {
    outline: none;
}

.select {
    padding: 5px 20px 5px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #2c3e50;
}

.modal {
    background: white;
    border-radius: 10px;
    position: absolute;
    margin-top: 10px;
    top: 100px;
    width: 320px;
    left: calc((100% - 340px)/2);
    padding: 10px;
}

.address-container {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}

.address-container-1 {
    margin-top: 20px;
}

.button {
    cursor: pointer;
    background: #00DADC;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px 20px;
}

@media only screen and (min-width: 768px) {
  .modal {
    width: 500px;
    top: 100px;
    left: calc((100% - 520px)/2);
  }
  .address-container-1 {
    margin-top: 0;
    margin-left: 20px;
  }
}
</style>
