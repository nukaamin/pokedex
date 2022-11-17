<template>
  <div class="mx-auto max-w-lg h-auto mt-5 pt-4">
    <!-- <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> -->
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
      </form>
      <!-- <FormKit
        type="group"
        :config="{
          classes: {
            input: 'placeholder-gray-500'
          }
        }"
      >
        <FormKit
          type="text"
          label="Username"
          validation="required|length:5,20"
          placeholder="Username"
        />
        <FormKit
          type="password"
          label="Password"
          placeholder="******************"
          validation="required|password|length:8,20"
          help="Please choose a password."
        />
      </FormKit> -->
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script setup>
import '@formkit/themes/genesis'

const theme = 'genesis'
</script>
<style scoped>
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✅';
  display: block;
  padding: 0.5em;
}
</style>