<template>
  <div class="create-house">
    <form @submit.prevent="createHouse">
      <input
        type="text"
        name="bedrooms"
        placeholder="Bedrooms..."
        v-model="newHouse.bedrooms"
        required
      />
      <input
        type="text"
        name="bathrooms"
        placeholder="bathrooms..."
        v-model="newHouse.bathrooms"
        required
      />
      <input
        type="number"
        name="levels"
        placeholder="levels..."
        v-model="newHouse.levels"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="price..."
        v-model="newHouse.price"
        required
      />
       <input
        type="text"
        name="year"
        placeholder="year..."
        v-model="newHouse.year"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="description..."
        v-model="newHouse.description"
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="imgUrl..."
        v-model="newHouse.imgUrl"
        required
      />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateHouse",
  data() {
    return {
      newHouse: {}
    };
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
    }
  }
};
</script>

<style></style>