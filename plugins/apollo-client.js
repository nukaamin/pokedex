import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import * as Apollo from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://beta.pokeapi.co/graphql/v1beta'
    // configuration //
  })
  nuxtApp.vueApp.provide(Apollo.DefaultApolloClient, apolloClient)
})