export default{
	namespaced: true,
	state: {
		bussesList:[
			{
				id:1,
				licensePlate:'AO1231HA',
				seats: 24
			},
			{
				id:2,
				licensePlate:'AO7897HA',
				seats: 15
			},
		],
		
	},
	getters: {
		getBussesList:({bussesList})=>bussesList,
		getBusById:(state)=>busId=>state.bussesList.find(bus=>bus.id==busId)
	},
	mutations: {
		removeBus(state,busId){
			state.bussesList=state.bussesList.filter(bus=>bus.id!==busId)
		},
		addBus(state, bus){
			state.bussesList.push(bus)
		},
		updateBus(state, busObj){
			const busIndex = state.bussesList.findIndex(bus=>bus.id===busObj.id)
			state.bussesList[busIndex]=busObj
		}
	},
	actions: {
		removeBus({commit, dispatch}, busId){
			commit('removeBus', busId)
			dispatch('assignment/removeAssignmentByBusId', busId, {root:true})
		},
		addBus({commit},bus){
			commit('addBus', {
				id: new Date().getTime(),
				...bus,
			})
		},
		updateBus({commit}, bus){
			commit('updateBus', bus)
		}
	},
	modules: {},
 };