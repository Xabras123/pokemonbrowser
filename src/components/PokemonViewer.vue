<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>