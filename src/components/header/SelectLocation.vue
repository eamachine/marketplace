<template>
  <div class="select" v-bind:class="{'open' : open}" @blur="open=false" tabindex="0">
    <div class="selected" @click="open = !open">
        <img class="flag" src="../../assets/img/flag.png" alt="Colombia">
        <p class="location hide-mobile" >{{ this.$store.state.location }}</p>
        <a class="arrow-icon">
          <span class="left-bar"></span>
          <span class="right-bar"></span>
        </a>
    </div>
    <div class="options" v-if="open">
        <ul class="cities">
            <li class="country" @click="SetLocation('Colombia')">
              <img class="flag-sm hide-sm-mobile" src="../../assets/img/flag.png" alt="Colombia">
              <span class="country-txt">Colombia</span>
            </li>
            <li v-for="(city, index) in this.$store.state.locations"  v-bind:key="city">
              <p @mouseover="current = index">{{city.name}} <span class="city-action" @click="SetLocation(city.name)">></span></p>
            </li>
         </ul>
         <ul class="states">
             <li v-for="state in this.$store.state.locations[current].states"  v-bind:key="state">
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
      open: false,
      current: 0
    }
  },
  methods: {
    SetLocation: function (state) {
      this.$store.commit('setLocation', state)
      this.open = false
      this.$scrollTo('#s1', { offset: -100 })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-bar:after, .left-bar:after {
  background-color: #00DADC;
}

.select {
  outline: none;
}

.location {
  margin-left: 20px;
  color: #00DADC;
  font-size: 13px;
}

.selected {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
}

.flag {
 width: 30px;
 height: 30px;
 border-radius: 50%;
}

.flag-sm {
 width: 20px;
 height: 20px;
 border-radius: 50%;
}

.options {
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  min-width: 320px;
  width: 80vw;
  height: 500px;
  background: #1f2033;
  top: 60px;
  left: calc((100% - 320px)/2);
}

.options ul {
  list-style-type: none;
}

.city-action {
  float: right;
}

.country {
  display: flex;
  align-items: center;
  padding: 10px 20px 20px 20px;
}

.country-txt {
  margin-left: 20px;
}

.cities {
  color: #00dadc;
  margin: 5px 0 10px 0;
  padding: 0;
  width: 150px;
  border-right: #00dadc solid 1px;
}

.cities p {
  padding: 0 30px 10px 20px;
  cursor: pointer;
}

.states {
  color: #b9d544;
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
  color: #00dadc;
}

@media only screen and (min-width: 768px) {
  .options {
    width: 600px;
    height: 500px;
    left: auto;
    right: 10px;
  }
  .cities {
    width: 180px;
  }

  .states {
    overflow: inherit;
    flex-wrap: wrap;
  }

  .select {
    position: relative;
  }
}

</style>
