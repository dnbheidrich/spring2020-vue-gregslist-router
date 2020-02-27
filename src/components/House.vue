<template>
  <div class="house col-3">
    <div class="card">
      <router-link
        :to="{ name: 'HouseDetails', params: { houseId: this.houseData._id } }"
      >
        <img :src="houseData.imgUrl" class="card-img-top" />
      </router-link>
      <div class="card-body bg-dark">
        <h5 class="card-title text-white">Beds {{ houseData.bedrooms }} - Baths{{ houseData.bathrooms }}</h5>
      <button @click="deleteHouse">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "House",
  //NOTE child components 'catch' information in props
  props: ["houseData", "houseIndex"],
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.houseData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveCar", this.houseData);
    }
  }
};
</script>

<style scoped>
.car {
  cursor: pointer;
}
</style>
