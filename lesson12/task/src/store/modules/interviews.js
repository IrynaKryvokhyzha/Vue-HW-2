export default ({
   namespaced:true,
   state: {
		interviewsList:[
			{
				id:1,
				workerId:2,
				candidateId:3,
				weekdayId:2
			},
			{
				id:2,
				workerId:1,
				candidateId:1,
				weekdayId:4
			},
			{
				id:3,
				workerId:3,
				candidateId:2,
				weekdayId:3
			},
		],

	},
   getters: {
		getInterviewsList:({interviewsList})=>interviewsList,
		getFilledInterviewsList:(state,getters, rootState, rootGetters)=>state.interviewsList.map(interview=>({
			id:interview.id,
			workerName: rootGetters['workers/getWorkerById'](interview.workerId).name,
			candidateName: rootGetters['candidates/getCandidateById'](interview.candidateId).name,
			weekdayTitle: rootGetters['weekDays/getWeekDayById'](interview.weekdayId).title,
		}))
	},
   mutations: {
		removeInterviewByWorkerId(state,workerId){
			state.interviewsList=state.interviewsList.filter(interview=>interview.workerId!==workerId)
		},
		removeInterviewByCandidateId(state, candidateId){
			state.interviewsList=state.interviewsList.filter(interview=>interview.candidateId!==candidateId)
		},
		removeInterview(state, interviewId){
			state.interviewsList=state.interviewsList.filter(interview=>interview.id!==interviewId)
		},
		addInterview(state, interview){
			state.interviewsList.push(interview)
		}
	},
   actions: {
		removeInterviewByWorkerId({commit},workerId){
			commit('removeInterviewByWorkerId',workerId)
		},
		removeInterviewByCandidateId({commit},candidateId){
			commit('removeInterviewByCandidateId',candidateId)
		},
		removeInterview({commit}, interview){
			commit('removeInterview', interview)
		},
		addInterview({commit},interviewData){
			commit('addInterview',{
				id: new Date().getTime(),
				...interviewData
			})
		}
	},
   modules: {},
 });
