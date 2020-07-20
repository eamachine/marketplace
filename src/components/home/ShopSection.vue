<template>
  <section class="general-container">
      <h2 class="h1">Conocenos</h2>
      <p></p>
      <div class="sections">
        <router-link :to="{ name: 'Comercial'}" class="section">
          <h2 class="h2">¿Tienes una tienda?, <br /> Que esperas para vender en linea?</h2>
          <span>
            <img src="../../assets/img/features.jpg" class="icon" alt="features">
            <div>
              <h3>Te ayudamos a poner tu negocio en internet</h3>
              <p>
                Contactanos comercial@alapata.com o registrate
                <a href="">aquí</a>
              </p>
            </div>
          </span>
        </router-link>
        <router-link :to="{ name: 'Comercial'}" class="section">
            <h2 class="h2 blue">¿Tienes un producto?, <br />¿Quieres hacer parte de nuestra red?</h2>
            <span>
              <img src="../../assets/img/entreprenur.jpg" class="icon" alt="entreprenur">
              <div class="info">
                <h3>Tienes un emprendimiento y buscas como crecer</h3>
                <p>Quieres que las tiendas en nuestra red vendan tu producto, Te contactamos con los canales de venta</p>
              </div>
            </span>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShopSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.general-container {
  margin: 60px 0 0 0;
  text-align: center;
}

.info {
  width: 100%;
}

.icon {
  max-width: 500px;
  width: 100%;
  border-radius: 10px;
}

.sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
}

.section {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}

.h1 {
  font-family: "fredokaone";
  font-size: 32px;
}

.h2 {
  font-family: "fredokaone";
  margin-bottom: 40px;
  width: 100%;
}

h3 {
  width: 100%;
  font-size: 14px;
  font-family: "monserrat";
}

p {
  font-size: 13px;
  font-family: "monserrat";
}

a {
  text-decoration: none;
  color: #2C3E50;
}

@media only screen and (min-width: 768px) {
  .section {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
  }

  .icon {
    height: 350px;
    width: auto;
    border-radius: 10px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
</style>
