import { createStore } from "vuex";

export default createStore({
  state: {
	companiesList:[
		{
			id:1,
			title:'Comp1',
			taxRate:5,
			owner:'Ivan'
		},
		{
			id:2,
			title:'Comp2',
			taxRate:15,
			owner:'Olga'
		},
		
	],
	filterObj:{}
  },
  getters: {
	getCompaniesList:({companiesList})=>companiesList,
	getFilterObj:({filterObj})=>filterObj,
	getCompanyById:state=>(companyId)=>state.companiesList.find(company=>company.id==companyId),
  },
  mutations: {
	removeCompany:(state, companyId){
		state.companiesList=state.companiesList.filter(company=>company.id!==companyId)
	},
	updateFilter:(state, filterDataObj){

	}
  },
  actions: {
	removeCompany:({commit}, companyId){
		commit('removeCompany', companyId)
	},
	updateFilter:({commit}, filterDataObj){
		commit('setFilter', filterDataObj)
	}
  },
  modules: {},
});
