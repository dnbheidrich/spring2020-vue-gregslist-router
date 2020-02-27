import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarDetails from "../views/CarDetails.vue";
import JobDetails from "../views/JobDetails.vue";
import HouseDetails from "../views/HouseDetails.vue";
import Cars from "../views/Cars.vue";
import Jobs from "../views/Jobs.vue";
import Houses from "../views/Houses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cars",
    name: "Cars",
    component: Cars
  },
  {
    path: "/car/:carId",
    name: "CarDetails",
    component: CarDetails
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  }, 
  {
    path: "/job/:jobId",
    name: "JobDetails",
    component: JobDetails
  },
  {
    path: "/houses",
    name: "Houses",
    component: Houses
  },
  {
    path: "/house/:houseId",
    name: "HouseDetails",
    component: HouseDetails
  },
  {
    // NOTE sends user back to home on bad address
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
