import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

let _apiCar = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/cars",
  timeout: 3000
});
let _apiJob = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 3000
});
let _apiHouse = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs:[],
    activeJob:{},
    houses:[],
    activeHouses: {}
  },
  mutations: {
    //NOTE first argument of a mutationn is always the state
    // the second is always the payload
    setCars(state, cars) {
      state.cars = cars;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c._id != id);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    setJobs(state,jobs) {
      state.jobs =jobs;
    },
    addJob(state,job) {
      state.jobs.push(job);
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(c => c._id != id);
    },
    setActiveJob(state,job) {
      state.activeJob = job;
    },
    setHouses(state, house) {
      state.houses = house;
    },
    addHouse(state, house) {
      state.houses.push(house);
    },
    removeHouse(state, id) {
      state.houses = state.houses.filter(c => c._id != id);
    },
    setActiveHouse(state, house) {
      state.activeJob = house;
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _apiCar.get("");
      commit("setCars", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getCarById({ commit, dispatch }, id) {
      try {
        let res = await _apiCar.get(id);
        commit("setActiveCar", res.data.data); 
      } catch (error) {
        console.error(error);
        router.push({ name: "Home" });
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _apiCar.post("", newCar);
        // dispatch("getCars");
        commit("addCar", res.data.data);
        router.push({
          name: "CarDetails",
          params: { carId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        let res = await _apiCar.delete(carId);
        // dispatch("getCars");
        commit("removeCar", carId);
        commit("setActiveCar", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveCar({ commit }, car) {
      commit("setActiveCar", car);
    },
    async getJobs({ commit, dispatch }) {
      try {
        let res = await _apiJob.get("");
        commit("setJobs", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getJobById({ commit, dispatch }, id) {
      try {
        let res = await _apiJob.get(id);
        commit("setActiveJob", res.data.data);
      } catch (error) {
        console.error(error);
        router.push({ name: "Home" });
      }
    },
    async createJob({ commit, dispatch }, newJob) {
      try {
        let res = await _apiJob.post("", newJob);
        commit("addJob", res.data.data);
        router.push({
          name: "JobDetails",
          params: { jobId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteJob({ commit, dispatch }, jobId) {
      try {
        let res = await _apiJob.delete(jobId);
        // dispatch("getJobs");
        commit("removeJob", jobId);
        commit("setActiveJob", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveJob({ commit }, job) {
      commit("setActiveJob", job);
    },
    async getHouses({ commit, dispatch }) {
      try {
        let res = await _apiHouse.get("");
        commit("setHouses", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseById({ commit, dispatch }, id) {
      try {
        let res = await _apiHouse.get(id);
        commit("setActiveHouse", res.data.data);
      } catch (error) {
        console.error(error);
        router.push({ name: "Home" });
      }
    },
    async createHouse({ commit, dispatch }, newHouse) {
      try {
        let res = await _apiHouse.post("", newHouse);
        commit("addHouse", res.data.data);
        router.push({
          name: "HouseDetails",
          params: { houseId: res.data.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _apiHouse.delete(houseId);
        // dispatch("getHouses");
        commit("removeHouse", houseId);
        commit("setActiveHouse", {});
      } catch (error) {
        console.error(error);
      }
    },
    setActiveHouse({ commit }, house) {
      commit("setActiveHouse", house);
    }
  }
});
