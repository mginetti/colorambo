<template>
  <div class="container">
    <topbar />
    <div class="container">
      <h1>Colors</h1>

      <div class="row">
        <color
          v-for="color in colors"
          @openModal="openModal"
          :key="color.id"
          :color="color"
          class="pb-3"
          data-toggle="modal" 
          data-target="#exampleModal"
        />
      </div>

      <button v-if="$account">Aggiungi colore</button>

    </div>
    <!-- Modal -->
    <modal :color="dataColor" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dataColor: {},
      colors: [
        {
          id: 1,
          name: "red",
          rgb: "255, 0, 0"
        },
        {
          id: 2,
          name: "green",
          rgb: "0, 255, 0"
        },
        {
          id: 3,
          name: "blue",
          rgb: "0, 0, 255"
        },
        {
          id: 4,
          name: "purple",
          rgb: "128, 0, 128"
        },
        {
          id: 5,
          name: "black",
          rgb: "0, 0, 0"
        },
        {
          id: 6,
          name: "yellow",
          rgb: "255, 255, 0"
        }
      ]
    };
  },
  methods: {
    openModal(value) {
      this.dataColor = value;
    }
  },
  components: {
    Topbar: () => import("../components/Topbar"),
    Color: () => import("../components/Color"),
    Modal: () => import('../components/Modal')
  }
};
</script>

<style lang="scss">
</style>