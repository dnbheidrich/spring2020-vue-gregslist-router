<template>
  <div class="house-details container-fluid">
<div class="row text-center">
<div class="col-12">

    <h1>House DETAILS .VUE</h1>
    <div v-if="details._id">
      <img :src="details.imgUrl" class="img-top" />
      <h3>
      Levels - {{ details.levels }}
      </h3>
      <p>
      ${{ details.price }}
      {{ details.description }}
      </p>
    <button @click="deleteHouse">delete</button>
</div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    if (!this.$store.state.houses.length) {
      this.$store.dispatch("getHouseById", this.$route.params.houseId);
    } else {
      this.$store.dispatch(
        "setActiveHouse",
        this.$store.state.houses.find(c => c._id == this.$route.params.houseId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.details._id);
    }
  }
};
</script>

<style></style>