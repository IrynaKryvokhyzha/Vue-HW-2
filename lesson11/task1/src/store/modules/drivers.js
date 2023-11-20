import {isAppropriateToFilter} from "../helpers";
export default{
	namespaced: true,
	state: {
		driversList:[
			{
				id:1,
				name:'Ivan',
				experience: 12
			},
			{
				id:2,
				name:'Petro',
				experience: 10
			},
			{
				id:3,
				name:'Vasyl',
				experience: 8
			},
			{
				id:4,
				name:'Pavlo',
				experience: 5
			},
		],
		filterObj:{}
	},
	getters: {
		getDriversList:({driversList})=>driversList,
		getFilteredDriversList:state=>state.driversList.filter(driver=>isAppropriateToFilter(driver, state.filterObj)),
		getDriverById:state=>(driverId)=>state.driversList.find(driver=>driver.id==driverId),
	},
	mutations: {
		setFilter(state, filterDataObj){
			state.filterObj = filterDataObj
		},
		addDriver(state, driver){
			state.driversList.push(driver)
		},
		updateDriver(state, driverObj){
			const driverIndex = state.driversList.findIndex(driver=> driver.id===driverObj.id)
			state.driversList[driverIndex]=driverObj
		},
		removeDriver(state, driverId){
			state.driversList=state.driversList.filter(driver=>driver.id!==driverId)
		},
	},
	actions: {
		updateFilter({commit}, filterDataObj){
			commit('setFilter', filterDataObj)
		},
		addDriver({commit}, driver){
			commit('addDriver', {
				id: new Date().getTime(),
				...driver,
			})
		},
		updateDriver({commit}, driver){
			commit('updateDriver', driver)
		},
		removeDriver({commit, dispatch},driverId){
			commit('removeDriver', driverId)
			dispatch('assignment/removeAssignmentByDriverId', driverId, {root:true})

		}
	},
	modules: {},
 };