<template>
   <section class="general-container">
    <div class="header-container">
      <h2 class="h2">Descubre nuestra red</h2>
      <services />
    </div>
    <div class="stores">
      <ul class="store-list" :class="{ 'open' : open }">
        <li v-for="store in this.$store.getters.getFilteredStores" v-bind:key="store" class="store-container">
          <store v-bind:store="store"></store>
        </li>
      </ul>
      <div class="all-container" v-if="this.$store.state.showmore">
        <button v-if="!open" class="all" @click="toogleView()">Ver mas</button>
        <button v-if="open" class="all" @click="toogleView()">Ver menos</button>
      </div>
    </div>
  </section>
</template>

<script>
import Store from '@/components/home/Store.vue'
import Services from '@/components/home/Services.vue'

export default {
  name: 'Stores',
  components: { Store, Services },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toogleView: function () {
      this.open = !this.open
      if (!this.open) {
        this.$scrollTo('#s1', { offset: -100 })
      }
      this.$store.commit('toogleAllStores')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.general-container {
  margin: 60px 0 0 0;
}

.all-container {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
}

.all {
  cursor: pointer;
  border-radius: 10px;
  border: none;
  padding: 15px 30px;
  background: #00DADC;
  color: #2C3E50;
  margin-left: 20px;
  outline: none;
}

.store-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 10px 5px;
  border-radius: 10px;
  height: 120px;
  width: 24vw;
}

.store-container + .store-container {
  margin-bottom: 40px;
  margin-left: 10px;
}

.stores {
  margin: 20px 0;
  text-align: center;
}

.store-list {
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  max-height: 340px;
  overflow: hidden;
  transition: max-height 2.5s ease-out;
}

.h2 {
  font-size: 28px;
  font-family: "fredokaone";
  color: #2C3E50;
}

.open {
  max-height: 5000px;
}

@media only screen and (min-width: 1024px) {
  .general-container {
    margin: 60px auto 0;
  }

  .stores {
    
    margin: 60px auto 0;
  }

  .store-list {
    max-height: 250px;
    margin: 0;
    padding: 0;
  }

  .h2 {
    font-size: 32px;
  }

  .store-container {
    height: 180px;
    width: 190px;
  }

  .all-container {
    width: 100%;
  }

  .header-container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 95%;
  }
  
  .open {
    max-height: 3000px;
  }
}
</style>
