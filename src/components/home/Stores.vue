<template>
   <div class="stores">
    <h2 class="h2">Encuentra nuestras tiendas</h2>
    <ul class="store-list">
      <li v-for="store in stores" v-bind:key="store">
        <store :name="store.name" :urlimg="store.urlimg"></store>
      </li>
    </ul>
  </div>
</template>

<script>
import Store from '@/components/home/Store.vue'

export default {
  name: 'Stores',
  components: { Store },
  data () {
    return {
      stores: [
        { name: 'Animal Pets', urlimg: 'animalvet.png' },
        { name: 'Cat Dog Vet', urlimg: 'catdog.png' },
        { name: 'Clinica vet', urlimg: 'clinica vet.png' },
        { name: 'Dogtor', urlimg: 'dogtor.png' },
        { name: 'Go pets', urlimg: 'go pets.jpg' },
        { name: 'Happy puppy', urlimg: 'happy puppy.jpg' },
        { name: 'Hatovet', urlimg: 'hatovet.png' },
        { name: 'Hello Pets', urlimg: 'hello Pets.jpg' },
        { name: 'Hometown', urlimg: 'hometown.png' },
        { name: 'kanicat', urlimg: 'kanicat.png' },
        { name: 'Mascota salud', urlimg: 'mascota salud.png' },
        { name: 'Normalnimal', urlimg: 'normalnimal.png' },
        { name: 'Pequepeluts', urlimg: 'Pequepeluts.jpg' },
        { name: 'Pet shop Mandalay', urlimg: 'per shop.jpg' },
        { name: 'Petshop Kennedy', urlimg: 'petshop1.jpg' },
        { name: 'Sara-hurtado', urlimg: 'sara-hurtado.jpg' },
        { name: 'Tienda mascota', urlimg: 'tienda mascota.jpg' },
        { name: 'Zanovet', urlimg: 'zanovet.jpg' },
        { name: 'Zoomania', urlimg: 'zoomania.png' },
        { name: 'Club mascotas', urlimg: 'club mascotas.png' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stores {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  min-height: 800px;
  margin: 20px 10px;
  padding: 10px;
  text-align: center;
}

.store-list {
  margin: 50px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
}

.h2{
  color: #D90C1F;
  font-size: 18px;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .stores {
    margin: 25px 0;
    padding: 25px 5%;
  }

  .store-list {
    margin: 50px 0 0 0;
    padding: 0;
  }

  .h2 {
    font-size: 24px;
  }
}
</style>
