<template>
  <div class="houses container-fluid">
    <div class="row">
      <div class="col-12 text-right">
        <button v-if="!houseForm" @click="houseForm = true" class="btn btn-success">
          Add-Car
        </button>
        <button v-else @click="houseForm = false" class="btn btn-danger">
          cancel
        </button>
      </div>
      <div class="col-12">
        <create-house v-if="houseForm" />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <houses />
      </div>
    </div>
  </div>
</template>

<script>
import Houses from "@/components/Houses";
import CreateHouse from "@/components/CreateHouse";

export default {
  name: "Home",
  data() {
    return {
      houseForm: false
    };
  },
  components: {
    Houses,
    CreateHouse
  }
};
</script>
