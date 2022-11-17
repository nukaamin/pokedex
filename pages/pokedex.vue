<template>
  <div>
    <div v-if="loading"><Loading/></div>
    <div v-if="!loading">
      <img class="mx-auto max-w-lg h-auto mb-5 pt-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon">
      <div class="grid grid-cols-3 gap-3">
        <Pokemons v-for="pokemon in result.pokemons" :key="pokemon.id" :props_pokemon="pokemon"/> 
      </div>
      <div class="flex justify-center mt-4 mb-4">
        <button @click="onLoadMore" class="bg-yellow-500 rounded-full p-3"><span class="font-mono text-white">Load More - {{ length_pokemon }}</span></button>
      </div>
      <!-- <div class="flex justify-center mb-4" v-if="btn">
        <button @click="loadmore" class="bg-blue-500 rounded-full p-3"><span class="font-mono text-white">Load More ...</span></button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// module
import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import Pokemon_friends from '@/endpoint/queries.ts'

// data
const variables = ref({
  offset: 0,
  limit: 6
})
const { loading, result, fetchMore } = useQuery(Pokemon_friends, variables)
const loadData = ref(3)
const btn = ref(true)
const length_pokemon = ref(0)

// function
watch(result, value => {
  length_pokemon.value = value.pokemons.length
  console.log(length_pokemon.value)
})

function loadmore() {
  console.log(length_pokemon.value)
  loadData.value = loadData.value + 5
  console.log(loadData.value);
  if (length_pokemon.value < loadData.value) {
    btn.value = false
  }
}

function onLoadMore() {
  fetchMore({
    variables: {
      offset: length_pokemon.value
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if(!fetchMoreResult) return prev;
      return {
        pokemons: [...prev.pokemons, ...fetchMoreResult.pokemons]
      }
    }
  })
  
}
</script>