import { createStore } from "vuex";
import toDoItems from "./modules/toDoItems";
export default createStore({
	namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
	toDoItems,
  },
});
