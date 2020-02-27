<template>
  <div class="car col-3">
    <div class="card">
      
      <div class="card-body bg-dark">
        <h5 class="card-title text-white">Title: {{ jobData.jobTitle }} - Company: {{ jobData.company }}</h5>
      <button @click="deleteJob">Delete</button>
      <router-link
        :to="{ name: 'JobDetails', params: { jobId: this.jobData._id } }">
       <button>Details</button>
      </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Job',
  props: ["jobData", "jobIndex"],
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.jobData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveJob", this.jobData);
    }
  }
}
</script>


<style scoped>

</style>