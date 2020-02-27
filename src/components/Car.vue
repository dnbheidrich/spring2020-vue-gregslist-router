<template>
  <div class="car col-3">
    <div class="card">
      <router-link
        :to="{ name: 'CarDetails', params: { carId: this.carData._id } }"
      >
        <img :src="carData.imgUrl" class="card-img-top" />
      </router-link>
      <div class="card-body bg-dark">
        <h5 class="card-title text-white">{{ carData.make }} - {{ carData.model }}</h5><button @click="deleteCar">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  //NOTE child components 'catch' information in props
  props: ["carData", "carIndex"],
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.carData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveCar", this.carData);
    }
  }
};
</script>

<style scoped>
.car {
  cursor: pointer;
}
</style>
