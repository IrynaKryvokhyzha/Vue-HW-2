import { createStore } from "vuex";
import {athletesList} from "@/data/athletes"
// import {moveElementsBetweenArrays} from './helpers'
export default createStore({
  state: {
	generalList:[],
	notSelectedListId: [] ,
	selectedListId:[]
  },
  getters: {
	getNotSelectedList: state=> state.generalList.filter(athlete=>state.notSelectedListId.includes(athlete.id)),
	getSelectedList: state=> state.generalList.filter(athlete=>state.selectedListId.includes(athlete.id)),
	
  },
  mutations: {
	selectAthlete(state, athleteId){
		state.notSelectedListId=state.notSelectedListId.filter(id=>id!==athleteId)
		state.selectedListId.push(athleteId)

		// iakscho cherez function robyty
		// const resObj = moveElementsBetweenArrays(athleteId, notSelectedListId, selectedListId)
		// notSelectedListId= resObj.newListToRemoveElement
		// selectedListId= resObj.newListToAddElement
	},
	deSelectAthlete(state, athleteId){
		state.selectedListId=state.selectedListId.filter(id=>id!==athleteId)
		state.notSelectedListId.push(athleteId)
	},
	initData(state, data){
		state.generalList=data
		state.notSelectedListId = data.map((item)=>item.id)
	}
  },
  actions: {
	selectAthlete({commit},athleteId){
		commit('selectAthlete', athleteId)
	},
	deSelectAthlete({commit},athleteId){
		commit('deSelectAthlete', athleteId)
	},
	initData({commit}){
		commit('initData',athletesList)
	}
  },
  modules: {},
});
