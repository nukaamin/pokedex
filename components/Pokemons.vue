<template>
  <span>
    <div class="flex mb-4 mt-4">
    <div class="m-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-200 hover:bg-blue-200">
        <img class="w-full brightness-50 hover:brightness-100" :src="image" alt="image pokedex">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center uppercase font-mono">{{ props.props_pokemon.name }}</div>
        </div>
      </div>
    </div>
  </div>
  </span>
</template>

<script setup>
  const props = defineProps({
    props_pokemon: Object
  })
  const image = JSON.parse(props.props_pokemon.image_pokemon[0].sprites).other["official-artwork"].front_default
</script>

<style scoped>
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition : 0.3s;
    margin : 2px;
    max-width:200px;
    cursor:pointer;
}
</style>