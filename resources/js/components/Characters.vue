<template>
  <div
    class="flex items-center h-32 transition duration-500 ease-in-out transform bg-white cursor-pointer hover:-translate-y-1 hover:bg-gray-300"
    @click="addCharacter(character)"
  >
    <div class="h-32">
      <svg
        class="h-32 text-gray-700"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>
    <div class="w-full p-4 font-bold text-right text-gray-700">
      <p>{{ uppercasedName }}</p>
    </div>
  </div>
</template>

<script>
  import { store } from "../store";
  export default {
    name: "Characters",
    props: ["character"],
    data: () => ({}),
    computed: {
      uppercasedName() {
        return this.character.name.toUpperCase();
      },
    },
    methods: {
      addCharacter(character) {
        store.addCharacter(character);
      },
    },
  };
</script>

<style scoped>
</style>
