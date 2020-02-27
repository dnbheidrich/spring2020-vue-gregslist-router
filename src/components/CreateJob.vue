<template>
  <div class="create-car">
    <form @submit.prevent="createJob">
      <input
        type="text"
        name="Title"
        placeholder="Title..."
        v-model="newJob.jobTitle"
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company..."
        v-model="newJob.company"
        required
      />
      <input
        type="number"
        name="rate"
        placeholder="rate..."
        v-model="newJob.rate"
        required
      />
      <input
        type="number"
        name="hourse"
        placeholder="hourse..."
        v-model="newJob.hours"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="description..."
        v-model="newJob.description"
      />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateJob",
  data() {
    return {
      newJob: {}
    };
  },
  methods: {
    createJob() {
      this.$store.dispatch("createJob", this.newJob);
    }
  }
};
</script>

<style></style>