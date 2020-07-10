<template>
  <div class="store-wrapper">
    <div @click="open = true">
      <a>
        <img class="logo" v-bind:src="require('../../assets/stores/'+ store.urlimg)" :alt="store.name">
      </a>
      <h4 class="name">{{ store.name }}</h4>
    </div>
    <overlay :open="open">
      <div class="modal">
        <img class="close" @click="open = false" src="../../assets/icon/close.svg"/>
        <div class="store">
          <img class="logo-md" v-bind:src="require('../../assets/stores/'+ store.urlimg)" :alt="store.name">
          <div class="section">
            <h3 class="name-md">{{store.name}}</h3>
          </div>
          <div class="social">
            <a v-if="store.site" class="site" :href="store.site" target="_blank"><img class="icon-sm" src="../../assets/icon/shop-home.svg" alt="e-commerce">Tienda en linea</a>
            <div>
              <a v-if="store.instagram" :href="store.instagram" target="_blank">
                <svg class="social-icon" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g>
                    <path d="M505,257c0,35.8,0.1,71.6,0,107.5c-0.2,52-24.4,90.5-67.6,117.7C412.1,498,384,505,354.2,505   c-65.2,0-130.3,0.3-195.5-0.1c-45.3-0.3-84.3-16.3-115.2-49.9c-19.1-20.8-30.5-45.3-33.8-73.6c-0.7-6-0.8-11.9-0.8-17.9   c0-71.3-0.1-142.6,0-213.9C9.2,97.5,33.4,59,76.6,31.8C102.1,15.9,130.3,9,160.3,9c65,0,130-0.3,195,0.1   c45.5,0.3,84.6,16.4,115.5,50.2c18.9,20.7,30.2,45.2,33.4,73.2c1.3,11,0.7,22,0.8,32.9C505.1,196,505,226.5,505,257z M46,257   c0,36.7-0.1,73.3,0,110c0.1,25.2,9.3,46.9,26.5,64.9c23.1,24.1,51.9,35.8,85,36c65.7,0.4,131.3,0.1,197,0.1   c21.2,0,41.4-4.6,59.8-15.2c34.4-19.7,53.8-48.7,53.8-89.3c0-72.2,0-144.3,0-216.5c0-25-9.1-46.6-26.2-64.5   c-22.9-24.2-51.8-36.1-84.8-36.3C290.7,45.7,224.4,46,158,46c-20.7,0-40.3,4.9-58.3,15.1C65.4,80.9,45.9,109.9,46,150.5   C46,186,46,221.5,46,257z" fill="#B9D544"/>
                    <path d="M257.3,363c-64.6,0-116.4-51.6-116.3-116c0.1-62.7,52.6-114.1,116.7-114c64.4,0,116.4,51.7,116.3,115.5   C373.9,311.7,321.6,363,257.3,363z M257.3,326c43.9,0,79.7-34.9,79.7-77.8c0-43.1-35.5-78.2-79.3-78.2c-43.9,0-79.7,34.9-79.7,77.8   C178,290.9,213.5,326,257.3,326z" fill="#B9D544"/>
                    <path d="M363,123.6c0-14.2,10.9-25.6,24.5-25.6c13.6,0,24.5,11.5,24.5,25.6c0,13.9-10.9,25.3-24.3,25.4   C374.1,149.1,363,137.8,363,123.6z" fill="#B9D544"/>
                  </g>
                </svg>
              </a>
              <a v-if="store.facebook" :href="store.facebook" target="_blank">
                <svg class="social-icon" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g>
                    <path d="M304,383c0,40.2-0.1,80.3,0.1,120.5c0,4.4-1.2,5.6-5.6,5.5c-34.2-0.2-68.3-0.2-102.5,0   c-4.7,0-6.2-1.1-6.2-6c0.2-79.7,0.1-159.3,0.1-239c0-8,0.9-7-7.3-7.1c-14.5,0-29-0.1-43.5,0.1c-3.5,0-4.5-1.1-4.5-4.6   c0.1-25.3,0.1-50.7,0-76c0-3.5,1-4.6,4.5-4.5c15.2,0.2,30.3-0.1,45.5,0.2c4.1,0.1,5.4-1,5.4-5.3c-0.2-21.3,0-42.7-0.1-64   c-0.1-17.7,2.6-34.8,11.5-50.4c9.6-17,24-28.7,41.8-36.3c15-6.4,30.8-9.4,47-10.3c32.1-1.8,64.3-0.3,96.4-0.9   c3.6-0.1,4.5,1.2,4.5,4.6c-0.1,26.3-0.1,52.7,0,79c0,4-1.5,4.6-5,4.6c-18.5-0.1-37-0.1-55.5-0.1c-15.4,0-26.5,11.1-26.5,26.3   c0,15.7,0.2,31.3-0.1,47c-0.1,4.5,1.4,5.6,5.7,5.6c25.3-0.2,50.7,0,76-0.2c4.2,0,5.6,1.2,5.1,5.4c-1.5,12.9-2.8,25.8-4.2,38.7   c-1.3,12.4-3.5,24.7-5.5,37c-0.6,3.5-1.7,4.3-4.9,4.3c-21.7-0.1-43.3-0.1-65,0c-8.5,0-7.3-1.1-7.3,7.5C304,304,304,343.5,304,383z" fill="#2C3E50"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div class="section">
            <a class="phone" :href="'tel:'+ store.phone">{{ store.phone }}</a>
            <p class="address">{{store.address}}</p>
          </div>
          <p class="time">{{store.time}}</p>
          <div class="section">
            <p>{{store.description}}</p>
          </div>
          <div class="services">
          <span class="tooltip" v-for="service in (store.services.replace(/\s/g, '').split(','))" v-bind:key="service">
            <img v-bind:src="require('../../assets/icon/'+ service + '-icon.png')" class="icon" >
            <span class="tooltiptext">{{ service }}</span>
          </span>
          </div>
          <img src="../../assets/icon/heart-empty.svg" class="icon rate">
        </div>
      </div>
    </overlay>
  </div>
</template>

<script>
import Overlay from '@/components/home/Overlay.vue'

export default {
  name: 'Store',
  props: ['store'],
  components: { Overlay },
  data () {
    return {
      open: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  color: #1F2033;
  font-size: 14px;
}

.address {
  color: #4057E3;
  font-size: 16px;
}

.phone {
  color: #00DADC;
  text-decoration: none;
  font-size: 18px;
}

.site {
  color: #2C3E50;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social {
  display: flex;
  justify-content: space-around;
}

.name-md {
  font-family: "fredokaone";
  font-size: 24px;
}

.store {
  margin: 20px 0;
}

.close {
    cursor: pointer;
    float: right;
}

.icon {
  width: 50px;
}

.icon-sm {
  margin-right: 20px;
}

.modal {
    color: #2C3E50;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    margin-top: 10px;
    height: fit-content;
    top: 50px;
    width: 320px;
    left: calc((100% - 340px)/2);
    padding: 10px;
}

.social-icon {
  width: 40px;
  fill: #000;
}

.rate {
  width: 30px;
  float: right;
}

.store-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.logo {
  height: auto;
  max-width: 95px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.logo-md {
  height: auto;
  max-width: 180px;
  cursor: pointer;
  margin-right: -40px;
}

.name {
  margin: 0;
  padding: 10px 0;
  background: #B9D544;
  color: #1F2033;
  font-size: 13px;
  border-radius: 0 0 15px 15px;
  width: 100%;
  cursor: pointer;
}

.services {
  margin-top: 40px;
}

.section {
  margin: 10px 0;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #2C3E50;
  color: #928DF2;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #2C3E50 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

@media only screen and (min-width: 768px) {
  .logo {
      max-height: 140px;
      max-width: 180px;
      width: auto;
      border-radius: 20px;
  }
  .modal {
    width: 500px;
    top: 50px;
    left: calc((100% - 520px)/2);
  }
}

</style>
