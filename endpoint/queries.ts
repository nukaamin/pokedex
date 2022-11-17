import { gql } from "@apollo/client/core"

const Pokemon_friends = gql `
query MyQuery($offset: Int = 0, $limit: Int = 10) {
    pokemons: pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      name
      id
      pokemon_species_id
      is_default
      height
      base_experience
      image_pokemon: pokemon_v2_pokemonsprites {
        sprites
      }
      type: pokemon_v2_pokemontypes {
        typeArray: pokemon_v2_type {
          name
        }
      }
    }
  }
  
`

export default Pokemon_friends;