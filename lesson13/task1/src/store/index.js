import { createStore } from "vuex";
import classes from './modules/classes';
import teachers from './modules/teachers';
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
	classes,
	teachers
  },
});
