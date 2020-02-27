<template>
  <div class="jobs container-fluid">
    <div class="row">
      <div class="col-12 text-right">
        <button v-if="!jobForm" @click="jobForm = true" class="btn btn-success">
          Add-job
        </button>
        <button v-else @click="jobForm = false" class="btn btn-danger">
          cancel
        </button>
      </div>
      <div class="col-12 text-center">
        <create-job v-if="jobForm" />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <!-- <!-NOTE - same as import and comp--> 
        <Jobs />
      </div>
    </div>
  </div>
</template>

<script>
// NOTE same
import Jobs from "@/components/Jobs";
import CreateJob from "@/components/CreateJob";

export default {
  name: "Job",
  data() {
    return {
      jobForm: false
    };
  },
  components: {
    // NOTE same
    Jobs,
    CreateJob,
  }
};
</script>