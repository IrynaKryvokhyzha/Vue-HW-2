export default{
	namespaced: true,
	state: {
		assignmentList:[
			{
				id:1,
				driverId:2,
				busId:1
			},
			{
				id:2,
				driverId:1,
				busId:2
			},
		]
	},
	getters: {
		getAssignmentList:({assignmentList})=>assignmentList,
		getFilledAssignmentsList:(state,getters,rootState,rootGetters)=>
			state.assignmentList.map((assignment)=>(assignment)={
					id: assignment.id,
					driverName: rootGetters['drivers/getDriverById'](assignment.driverId).name,
					busNumber: rootGetters['busses/getBusById'](assignment.busId).licensePlate,
				}
			),

	},
	mutations: {
		removeAssignmentByBusId(state, busId){
			state.assignmentList=state.assignmentList.filter(assignment=>assignment.busId!==busId)
		},
		removeAssignmentByDriverId(state, driverId){
			state.assignmentList=state.assignmentList.filter(assignment=>assignment.driverId!==driverId)
		},
		removeAssignment(state,assignmentId){
			state.assignmentList=state.assignmentList.filter(assignment=>assignment.id!==assignmentId)
		},
		addAssignment(state, assignment){
			state.assignmentList.push(assignment)
		}
	},
	actions: {
		removeAssignmentByBusId({commit},busId){
			commit('removeAssignmentByBusId', busId)
		},
		removeAssignmentByDriverId({commit},driverId){
			commit('removeAssignmentByDriverId', driverId)
		},
		removeAssignment({commit},assignmentId){
			commit('removeAssignment', assignmentId)
		},
		addAssignment({commit}, assignmentData){
			commit('addAssignment',{
				id: new Date().getTime(),
				...assignmentData
			})
		}
	},
	modules: {},
 };