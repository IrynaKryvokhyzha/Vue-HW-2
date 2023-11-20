import { createStore } from "vuex";
import {isCorrespondToFilter} from './helpers'
export default createStore({
  state: {
	companiesList:[
		{
			id:1,
			title:'Comp1',
			taxRate:5,
			foundationYear: 2000,
			owner:'Ivan'
		},
		{
			id:2,
			title:'Comp2',
			taxRate:15,
			foundationYear: 2010,
			owner:'Olga'
		},
		
	],
	filterObj:{}
  },
  getters: {
	getCompaniesList:({companiesList})=>companiesList,
	getFilteredCompaniesList:(state)=>state.companiesList.filter(company=>isCorrespondToFilter(company, state.filterObj)),
	getCompanyById:state=>(companyId)=>state.companiesList.find(company=>company.id==companyId),
  },
  mutations: {
	removeCompany(state, companyId){
		state.companiesList=state.companiesList.filter(company=>company.id!==companyId)
	},
	setFilter(state, filterDataObj){
		state.filterObj= filterDataObj
	},
	addCompany(state, company){
		state.companiesList.push(company)
	}, 
	updateCompany(state, companyObj){
		const companyIndex = state.companiesList.findIndex(company=> company.id===companyObj.id)
		state.companiesList[companyIndex]=companyObj
	}
  },
  actions: {
	removeCompany({commit}, companyId){
		commit('removeCompany', companyId)
	},
	updateFilter({commit}, filterDataObj){
		commit('setFilter', filterDataObj)
	}, 
	addCompany({commit}, company){
		commit('addCompany', {
			id: new Date().getTime(),
			...company
		})
	},
	updateCompany({commit}, company){
		commit('updateCompany', company)
	},
	
  },
  modules: {},
});
