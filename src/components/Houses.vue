<template>
  <div class="houses row text-center">
    <house
      v-for="(houseObj, index) in houses"
      :key="houseObj._id"
      :houseData="houseObj"
      :houseIndex="index"
    />
  </div>
</template>


<script>
import House from "./House";
export default {
  name: 'Houses',
  mounted() {
    this.$store.dispatch("getHouses");
  },
   data() {
    return {
      page: 0,
      maxPrice: 0
    };
  },
  computed: {
   houses() {
      let data = this.$store.state.houses;
      if (this.maxPrice > 0) {
        data = data.filter(c => c.price < parseInt(this.maxPrice));
      }
      return data;
    }
  },
  components: {
    House
  }
}
</script>


<style scoped>

</style>