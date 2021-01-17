<template>
  <div class="w-full my-10">
    <div class="m-auto text-center">
      <div class="my-5 bg-indigo-800 w-full flex justify-center">
        <img class="my-10  " width="300" src="../assets/index2.png" alt="">
      </div>
      <div class="bg-yellow-800"></div>
      <h1 class="mt-10 text-3xl">¡Elige tu Pokemon!</h1>
      <input v-model="pokemonToSearch" class="text-2xl my-4 bg-gray-200 w-full" type="text" placeholder="Escriba el pokemon a buscar">
      <button :class="isLoading ? 'bg-gray-200' : ''" @click="searchPokemon" class="px-4 py-2 text-2xl rounded text-white bg-red-800">
        
        <span v-if="!isLoading">Buscar</span>
        <span v-else>Cargando ...</span>

      </button>




      <section class="wrap shadow-xl my-4 bg-gray-200 flex m-auto w-9/12 h-screen">

        <div class="my-3 justify-center w-full ">

          <div class="mt-5 flex justify-center">
            <img :src="foundPokemon.sprites.other.dream_world.front_default" width="120" class="rounded-full shadow-lg" >

          </div>
          <div class=" mx-20 flex justify-between">


            <h1 >ID:  {{foundPokemon.order}}</h1>

          </div>

          <div class="text-gray-800 my-5 mx-10 border-b-2 border-blue-500">
            

            <h1 class="my-3 text-4xl divide-y"> {{foundPokemon.name}}</h1>

          </div>

          <div  class="text-gray-800 my-2  flex justify-around">
            <h1 class="text-2xl"> Types: </h1>

            <div>
                <h1 v-for="t in foundPokemon.types" :key="t.id" class="text-2xl">{{t.type.name}}</h1>

            </div>

          </div>

          <div class="text-gray-800 my-2  flex justify-around">
            <h1 class="text-2xl"> Height: </h1>

            <h1 class="text-2xl"> {{foundPokemon.height}} ft</h1>

          </div>

          <div class="text-gray-800 my-2  flex justify-around">
            <h1 class="text-2xl"> Weight: </h1>

            <h1 class="text-2xl"> {{foundPokemon.weight}} lb</h1>

          </div>
          

        </div>
      </section>


    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import axios from 'axios'
export default {
  name: 'Home',

  setup(){
    const pokemonToSearch = ref("pikachu");
    const isLoading = ref(false);
    const foundPokemon = ref({

      order: 203,
      name: 'Ditto',
      height: '3',
      weight: '40',
      types: [{type: {name: "normal"}}],
      sprites: {other: {dream_world: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"} }}

    })

    async function searchPokemon(){

      isLoading.value = true;
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch.value}`).then(

      (res) => {
        foundPokemon.value = res.data;
         console.log("data obtenida!");
         isLoading.value = false;
      }
      ).catch(
        (error) => {
          console.log("Error ocurred");
          console.log(error);
          isLoading.value = false;

        }
      )

      console.log(pokemonToSearch.value);
      

            console.log("-------------------");

      console.log(foundPokemon.value);
            console.log("-------------------");



    }

    return{pokemonToSearch, foundPokemon, searchPokemon, isLoading}
  },
  components: {
    
  }
}
</script>
