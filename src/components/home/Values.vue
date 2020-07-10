<template>
  <section class="general-container">
    <div class="values-container">
        <div class="values">
          <div class="value yellow">
              <img src="../../assets/img/value1.png" class="icon" alt="value1">
          </div>
          <div class="value red">
              <img src="../../assets/img/value2.png" class="icon" alt="value2">
          </div>
          <div class="value blue">
              <img src="../../assets/img/value3.png" class="icon" alt="value3">
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Values'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.general-container {
  margin: 60px 0 0 0;
}

.icon {
  width: 90px;
  height: 90px;
}

.values {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  align-content: center;
  justify-content: center;
}

.value {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
}

@media only screen and (min-width: 768px) {
  .value {
    width: 30%;
    margin: 0 10px;
  }

  .icon {
    width: 200px;
    height: 200px;
  }
}
</style>
