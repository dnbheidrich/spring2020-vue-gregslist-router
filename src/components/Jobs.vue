<template>
  <div class="jobs row text-center">
    <div class="col-12">
    <job
      v-for="(jobObj, index) in jobs"
      :key="jobObj._id"
      :jobData="jobObj"
      :jobIndex="index"
    />
    </div>
  </div>
</template>


<script>
import Job from "./Job";
export default {
  name: 'Jobs',
  mounted() {
    this.$store.dispatch("getJobs");
  },
   data() {
    return {
      page: 0,
      maxPrice: 0
    };
  },
  computed: {
    jobs() {
      let data = this.$store.state.jobs;
      if (this.maxPrice > 0) {
        data = data.filter(c => c.price < parseInt(this.maxPrice));
      }
      return data;
    }
  },
  components: {
    Job
  }
}
</script>


<style scoped>

</style>