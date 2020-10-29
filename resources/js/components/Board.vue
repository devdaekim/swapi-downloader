<template>
  <div class="h-24 py-4 mb-6 transition duration-500 ease-in-out">
    <div v-if="selectedCharacters.length">
      <div class="text-xl font-bold text-white uppercase">
        You have selected
        <span
          v-for="(character, index) in selectedCharacters"
          :key="index"
        >
          {{ character.name }}
          <span
            v-if="index < selectedCharacters.length -2"
          >,</span>
          <span v-else-if="index < selectedCharacters.length -1">and</span>
        </span>
      </div>
      <div class="flex justify-center space-x-4">
        <button
          @click="dowloadCSV"
          type="button"
          v-if="selectedCharacters.length === 3"
          class="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-bold text-white uppercase bg-green-500 cursor-pointer focus:outline-none"
        >download</button>
        <button
          type="button"
          @click="reset()"
          class="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-bold text-white uppercase bg-red-500 focus:outline-none"
        >reset</button>
      </div>
    </div>
    <div v-else-if="downloaded">
      <p
        class="text-xl font-bold text-white uppercase"
      >CSV has been downloaded successfully!</p>
    </div>
    <div v-else-if="error">
      <p
        class="text-xl font-bold text-white uppercase"
      >An error occurred. Please try again.</p>
    </div>
    <div v-else>
      <p class="text-xl font-bold text-white uppercase">Select 3 characters!</p>
    </div>
  </div>
</template>

<script>
  import { store } from "../store";
  export default {
    name: "Board",
    data: () => ({
      selectedCharacters: [],
      downloaded: false,
      error: false,
    }),
    mounted() {
      // get selected characters
      this.$root.$on("updateSelection", () => {
        this.getSelectedCharacters();
      });
    },
    methods: {
      reset() {
        this.$root.$emit("resetSelected"); // emit to Character.vue to reset selection
        store.resetSelectedCharacters(); // empty selectedCharacters in store.state
        this.getSelectedCharacters(); // re-render the array, selectedCharacters
      },
      dowloadCSV() {
        axios({
          url: "/api/characters/csv",
          method: "POST",
          responseType: "blob", // see https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
          data: this.selectedCharacters,
          headers: { Accept: "text/csv" },
        })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "swapi.csv");
            document.body.appendChild(link);
            link.click();

            this.downloaded = true;
            this.reset();
            setTimeout(() => {
              this.downloaded = false;
            }, 5000);
          })
          .catch((error) => {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 5000);
          });
      },
      getSelectedCharacters() {
        this.selectedCharacters = store.getSelectedCharacters();
      },
    },
  };
</script>

<style scoped>
</style>
