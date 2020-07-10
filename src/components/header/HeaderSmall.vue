<template>
    <header class="header">
      <div class="header-container">
        <a href=""><img src="../../assets/icon/logo.png" class="logo"></a>
        <div class="selection-container">
          <a class="hide-tablet" v-scroll-to="{el: '#s1', offset: -200}">Tienda en linea</a>
          <a class="hide-tablet" v-scroll-to="{el: '#s2', offset: -200}">Marketplace</a>
          <a class="hide-tablet" v-scroll-to="{el: '#s3', offset: -200}">Contactenos</a>
          <a class="hide-tablet" v-scroll-to="{el: '#s4', offset: -200}">Proximamente</a>
        </div>
      </div>
    </header>
</template>

<script>

export default {
  name: 'HeaderSmall'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop {
  position: absolute;
  right: -80px;
  background: #B9D544;
  padding: 20px 10px;
  border-radius: 0 0 20px 20px;
}

.icon {
  height: 25px;
}

.logo {
  width: 150px;
  margin-left: 10px;
}

.header {
  background: rgba(31, 32, 51, 0.8);
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin:  5px auto;
}

a {
  cursor: pointer;
  margin-right: 30px;
  color: #00DADC;
  text-decoration: none;
  font-size: 13px;
}

@media only screen and (min-width: 768px) {
  .selection-container {
    align-items: center;
    display: flex;
    max-width: 800px;
    justify-content: space-around;
  }

  .map {
    margin-right: 20px;
  }
}
</style>
