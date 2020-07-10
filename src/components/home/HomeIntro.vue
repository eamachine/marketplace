<template>
  <div class="intro">
    <h2 class="h2">El centro comercial <span class="blue"> online </span> para tu mascota</h2>
    <h1 class="h1">Encuentra Petshops, Veterinarias y mucho más.</h1>    
  </div>
</template>

<script>
export default {
  name: 'HomeIntro'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  position: absolute;
  top: 20vw;
  left: 5%;
  width: 90%;
}

.blue {
  font-family: "sacramento";
  color: #928DF2;
  font-size: 40px;
}

.h1 {
  color: #74CCD2;
  font-size: 22px;
  text-align: center;
}

.h2 {
  color: #B9D544;
  font-size: 16px;
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .intro {
    top: 20vw;
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .intro {
    top: 150px;
    width: 750px;
    left: calc(50% - 500px);
  }

  .blue {
    font-size: 45px;
  }

  .h1 {
    font-size: 30px;
  }

  .h2 {
    font-size: 20px;
  }
}

@media only screen and (min-width: 1280px) {
  .intro {
    top: 150px;
    width: 850px;
    left: calc(50% - 600px);
  }

  .blue {
    font-size: 50px;
  }

  .h1 {
    font-size: 35px;
  }

  .h2 {
  font-size: 25px;
}

}
</style>
