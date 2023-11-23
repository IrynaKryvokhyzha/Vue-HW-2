export default ({
	namespaced:true,
	state: {
		candidatesList:[
			{
				id:1,
				name:'Jenna Ortega',
			},
			{
				id:2,
				name:'Austin Butler',
			},
			{
				id:3,
				name:'Tom Holland',
			}
		]
	},
	getters: {
		getCandidatesList:({candidatesList})=>candidatesList,
		getCandidateById:(state)=>(candidateId)=>state.candidatesList.find(candidate=>candidate.id==candidateId)
	},
	mutations: {
		removeCandidate(state, candidateId){
			state.candidatesList=state.candidatesList.filter(candidate=>candidate.id!==candidateId)
		},
		addCandidate(state, candidate){
			state.candidatesList.push(candidate)
		},
		updateCandidate(state, candidateObj){
			const candidateIndex= state.candidatesList.findIndex(candidate=>candidate.id===candidateObj.id)
			state.candidatesList[candidateIndex]=candidateObj
		}
	},
	actions: {
		removeCandidate({commit, dispatch},candidateId){
			commit('removeCandidate', candidateId)
			dispatch('interviews/removeInterviewByCandidateId',candidateId,
			{root:true})

		},
		addCandidate({commit}, candidate){
			commit('addCandidate', {
				id: new Date().getTime(),
				...candidate,
			})
		},
		updateCandidate({commit},candidate){
			commit('updateCandidate',candidate)
		}
	},
	modules: {},
 });
 