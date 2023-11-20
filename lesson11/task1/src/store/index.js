import { createStore } from "vuex";
import drivers from "./modules/drivers";
import busses from "./modules/busses";
import assignment from "./modules/assignment";



export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
	drivers,
	busses,
	assignment,
  },
});
