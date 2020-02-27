<template>
  <div class="house-details container-fluid">
<div class="row text-center">
<div class="col-12">

    <h1>HOUSE DETAILS .VUE</h1>
    <div v-if="details._id">
      <h3>
      Hours - {{ details.hours }}
      </h3>
      <p>

      {{ details.description }}
      </p>
    <button @click="deleteJob">delete</button>
</div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    if (!this.$store.state.jobs.length) {
      this.$store.dispatch("getJobById", this.$route.params.jobId);
    } else {
      this.$store.dispatch(
        "setActiveJob",
        this.$store.state.jobs.find(c => c._id == this.$route.params.jobId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.details._id);
    }
  }
};
</script>

<style></style>