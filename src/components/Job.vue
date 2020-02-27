<template>
  <div class="job col-3 text-center">
    <div class="card">
      <router-link
        :to="{ name: 'JobDetails', params: { jobId: this.jobData._id } }">
        <button>Details</button>
        <!-- <img :src="jobData.imgUrl" class="card-img-top" /> -->
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ jobData.jobTitle }} - {{ jobData.company }} {{jobData.rate}}</h5>
      </div>
      <button @click="deleteJob">Delete</button>
      
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