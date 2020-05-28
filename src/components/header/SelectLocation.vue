<template>
  <div class="select"  v-bind:class="{'open' : open}">
    <div class="selected" @click="open = !open">
        <img class="flag hide-sm-mobile" src="../../assets/flag.png" alt="Colombia">
        <p class="location">{{ location }}</p>
        <a class="arrow-icon">
          <span class="left-bar"></span>
          <span class="right-bar"></span>
        </a>
    </div>
    <div class="options" v-if="open">
        <ul class="cities">
            <li v-for="(city, index) in locations"  v-bind:key="city">
              <p @mouseover="current = index">{{city.name}}</p>
            </li>
         </ul>
         <ul class="states">
             <li v-for="state in locations[current].states"  v-bind:key="state">
                <p @click="SetLocation(state)">{{state}}</p>
             </li>
         </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectLocation',
  data () {
    return {
      location: 'Bogotá',
      open: false,
      current: 0,
      locations: [
        {name: 'Bogotá', states: ['Kennedy C.', 'Mandalay', 'Suba', 'C.Int nacional', 'Niza', 'Bosa', 'Perdomo', 'Madelena', 'Bochica', 'Mazuren', 'Tintal', 'Salitre', 'Chapinero','Ferias', 'Min de Dios', 'Fontibon', 'Modelia','Bavaria', 'Casablanca', 'Castilla', 'Carvajal', 'Candelaria', 'Macarena', 'Pnt Aranda', 'El prado', 'La Alambra', 'Galerias', 'San Rafael', 'Modelia', 'Rosales', 'Usaquen']},
        {name: 'Medellin', states: ['El poblado', 'Itagui']},
        {name: 'Barranquilla', states: ['Macarena', 'Soledad', 'Barranquillita', 'P. Colombia']}
      ]
    }
  },
  methods: {
    SetLocation: function (state) {
      this.location = state
      this.open = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.arrow-icon {
  width: 40px;
  display:block;
  padding: 0.25em;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
}

.left-bar {
  position: absolute;
  background-color: transparent;
  top: 0;
  left:0;
  width: 20px;
  height: 5px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 1px;
}

.left-bar:after {
  content:"";
  background-color: white;
  width: 20px;
  height: 5px;
  display: block;
  float: right;
  border-radius: 10px 6px 6px 10px;
  transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
  z-index: -1;
}

.right-bar {
  position: absolute;
  background-color: transparent;
  top: 0px;
  left:13px;
  width: 20px;
  height: 5px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 1px;
}

.right-bar:after {
  content:"";
  background-color: white;;
  width: 20px;
  height: 5px;
  display: block;
  float: right;
  border-radius: 10px 6px 6px 10px;
  transition: all 0.5s cubic-bezier(.25,1.7,.35,.8);
  z-index: -1;
}

.open .left-bar:after {
  transform-origin: center center;
  transform: rotate(-70deg);
  }
.open .right-bar:after {
  transform-origin: center center;
  transform: rotate(70deg);
}

.select {
  position: relative;
}

.location {
  margin-left: 20px;
}

.selected {
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  font-size: 18px;
}

.flag {
 width: 30px;
 height: 30px;
 border-radius: 5px;
}

.options {
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  width: 300px;
  height: 500px;
  background: #fff;
  top: 60px;
  right:-265px;
  transform: translate(-90%, 0);
}

.options ul {
  list-style-type: none;
}

.cities {
  color: #1f7c86;
  margin: 10px 0 20px 0;
  padding: 0;
  width: 120px;
  border-right: #1f7c86 solid 1px;
}

.cities p {
  padding: 0 15px 10px 20px;
  cursor: pointer;
}

.states {
  color: #999;
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0;
  margin: 10px 0 0 20px;
}

.states p {
  padding: 10px 10px 10px 10px;
  margin: 0;
  cursor: pointer;
}

.states p:hover {
  color: #d90c1f;
}

@media only screen and (min-width: 768px) {
  .options {
    width: 500px;
    height: 500px;
    right:-450px;
    transform: translate(-90%, 0);
  }
  .cities {
  width: 150px;
  }

  .states {
    overflow: inherit;
    flex-wrap: wrap;
  }
}

</style>
