<template>
      <div class="section">
        <h2 v-if="title" class="title">{{ title }}</h2>
            <div class="container" v-bind:class="custom">
                <slot></slot>
                <img v-if="urlimg" class="img" v-bind:src="require('../../assets/img/'+ urlimg)" :alt="title">
            </div>
      </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: ['title', 'urlimg', 'custom']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
    margin: 50px 40px;
}

.title {
    font-family: "fredokaone";
    text-align: center;
    font-size: 22px;
    margin-bottom: 60px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
}

.expanded {
    justify-content: center;
    text-align: center;
}

.right {
    flex-direction: row-reverse;
}

.img {
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    width: 100%;
    margin: 20px;
}

@media only screen and (min-width: 768px) {
  .img {
    width: auto;
    height: 300px;
  }
}
</style>
