<template>
  <div class="mx-auto max-w-lg h-auto mb-5 pt-4">
    <div class="text-center font-bold p-3">
      EXAMPLE FORMKIT USAGE
    </div>
    <div class="bg-green-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="text"
        label="Number"
        placeholder="Enter the Number"
        validation="required|number|between:20,50"
        validation-visibility="live"
        help="Enter a number between 20 and 50."
      ></FormKit>
    </div>
    <div class="bg-yellow-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="text"
        label="Sting"
        validation="bail|required|text|length:10"
        validation-visibility="live"
        help="Enter a text more than 10 character"
      ></FormKit>
    </div>
    <div class="bg-rose-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="email"
        label="Email"
        validation="required|email|ends_with:privyid.tech"
        validation-visibility="live"
        help="Enter your email privyid.tech"
      ></FormKit>
    </div>
    <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="password"
        label="Password"
        validation="required|password|length:8,20"
        validation-visibility="live"
        help="Enter your password"
      ></FormKit>
    </div>
    <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="password"
        label="Password"
        validation="required|password|length:8,20"
        validation-visibility="live"
        help="Enter your password"
      ></FormKit>
    </div>
    <div class="bg-purple-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit
        type="select"
        label="Fav Color"
        placeholder="Choose a color"
        :options="['red', 'green', 'blue', 'black']"
      />
    </div>
    <div class="bg-rose-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKit type="form">
        <FormKitSchema :schema="schema1" />
      </FormKit>
    </div>
    <div class="bg-orange-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <FormKitSchema :schema="schema2" />
    </div>
    <div class="text-center text-rose-500 font-bold text-lg">
      <NuxtLink to="/study_case">Study Case</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { validate } from "graphql"

const schema1 = [
  {
    $formkit: 'email',
    label: 'Email address',
    validation: 'required'
  }
]
const schema2 = [
  {
    $formkit: 'password',
    label: 'Password',
    validation: 'required|length=8,20'
  }
]
</script>