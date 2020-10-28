<template>
  <div class="h-24 py-4 mb-6 transition duration-500 ease-in-out">
    <div v-if="selectedCharacters.length">
      <div class="text-xl text-white">
        You have selected
        <span
          v-for="(character, index) in selectedCharacters"
          :key="index"
        >
          {{ character.name }}
          <span
            v-if="index < selectedCharacters.length -1"
          >,</span>
        </span>
      </div>
      <div class="flex justify-center space-x-4">
        <button
          type="button"
          v-if="selectedCharacters.length === 3"
          class="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white uppercase bg-green-500 focus:outline-none"
        >download</button>
        <button
          type="button"
          @click="reset()"
          class="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white uppercase bg-red-500 focus:outline-none"
        >reset</button>
      </div>
    </div>
    <div v-else>
      <p class="text-xl text-white">Select 3 characters to download</p>
    </div>
  </div>
</template>

<script>
  import { store } from "../store";
  export default {
    name: "Board",
    data: () => ({
      selectedCharacters: [],
    }),

    mounted() {
      this.selectedCharacters = store.getSelectedCharacters();
    },
    methods: {
      reset() {
        store.resetSelectedCharacters();
        this.selectedCharacters = store.getSelectedCharacters();
      },
    },
  };
</script>

<style scoped>
</style>
