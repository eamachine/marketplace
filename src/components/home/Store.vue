<template>
  <div class="store">
    <img class="logo" v-bind:src="require('../../assets/stores/'+ urlimg)" :alt="name">
    <h4 class="name">{{ name }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Store',
  props: ['name', 'urlimg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
        height: auto;
        max-width: 200px;
        border-radius: 20px;
    }

.name {
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 30px;
}

@media only screen and (min-width: 768px) {
    .logo {
        max-height: 120px;
        width: auto;
        border-radius: 20px;
    }
    .store {
        margin-right: 35px;
    }
}

</style>
