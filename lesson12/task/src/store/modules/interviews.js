// export default ({
//    namespaced:true,
//    state: {
// 		interviewsList:[
// 			{
// 				id:1,
// 				workerId:2,
// 				candidateId:3,
// 				weekdayId:2
// 			},
// 			{
// 				id:2,
// 				workerId:1,
// 				candidateId:1,
// 				weekdayId:4
// 			},
// 			{
// 				id:3,
// 				workerId:3,
// 				candidateId:2,
// 				weekdayId:3
// 			},
// 		],

// 	},
//    getters: {
// 		getInterviewsList:({interviewsList})=>interviewsList,
// 		getFilledInterviewsList:(state,getters, rootState, rootGetters)=>state.interviewsList.map(interview=>({
// 			id:interview.id,
// 			workerName: rootGetters['workers/getWorkerById'](interview.workerId).name,
// 			candidateName: rootGetters['candidates/getCandidateById'](interview.candidateId).name,
// 			weekdayTitle: rootGetters['weekDays/getWeekDayById'](interview.weekdayId).title,
// 		}))
// 	},
//    mutations: {
// 		removeInterviewByWorkerId(state,workerId){
// 			state.interviewsList=state.interviewsList.filter(interview=>interview.workerId!==workerId)
// 		},
// 		removeInterviewByCandidateId(state, candidateId){
// 			state.interviewsList=state.interviewsList.filter(interview=>interview.candidateId!==candidateId)
// 		},
// 		removeInterview(state, interviewId){
// 			state.interviewsList=state.interviewsList.filter(interview=>interview.id!==interviewId)
// 		},
// 		addInterview(state, interview){
// 			state.interviewsList.push(interview)
// 		}
// 	},
//    actions: {
// 		removeInterviewByWorkerId({commit},workerId){
// 			commit('removeInterviewByWorkerId',workerId)
// 		},
// 		removeInterviewByCandidateId({commit},candidateId){
// 			commit('removeInterviewByCandidateId',candidateId)
// 		},
// 		removeInterview({commit}, interview){
// 			commit('removeInterview', interview)
// 		},
// 		addInterview({commit},interviewData){
// 			commit('addInterview',{
// 				id: new Date().getTime(),
// 				...interviewData
// 			})
// 		}
// 	},
//    modules: {},
//  });
 import DbOperations from '../helpers/DbOperations'
 const collectionDB = new DbOperations('interviews')
 export default {
	  namespaced: true,
	  state: () => ({
		interviewsList: [],
			loading: false,
			error: null,
	  }),
	  getters: {
			isLoading: (state) => state.loading,
			hasError: (state) => state.error,
 
			getItemsList: (state) => state.interviewsList,
			getItemById: (state) => (itemId) => state.interviewsList.find((item) => item.id == itemId),
			getFilledInterviewsList:(state,getters, rootState, rootGetters)=>state.interviewsList.map(interview=>{
				const worker = rootGetters['workers/getItemById'](interview.workerId);
				const candidate = rootGetters['candidates/getCandidatesId'](interview.candidateId);
				const weekday = rootGetters['weekDays/getWeekDayById'](interview.weekdayId);
				let workerName = worker ? worker.name : 'unknown'
				let candidateName = candidate ? candidate.name : 'unknown'
				return{
					id:interview.id,
					workerName: workerName,
					candidateName: candidateName,
					weekdayTitle: weekday.title,
					}
				})
				
	  },
	  mutations: {
			setItemsList(state, itemsList) {
				 state.interviewsList = itemsList
			},
 
			setLoading(state, value) {
				 state.loading = value
			},
			setError(state, error) {
				 state.error = error
			},
	  },
	  actions: {
			loadList({ commit }) {
				 commit('setError', null)
				 commit('setLoading', true)
				 collectionDB
					  .loadItemsList()
					  .then((list) => {
							commit('setItemsList', list)
					  })
					  .catch((error) => {
							commit('setError', error)
					  })
					  .finally(() => {
							commit('setLoading', false)
					  })
			},
			addItem({ commit, dispatch }, item) {
				 commit('setError', null)
				 commit('setLoading', true)
				 collectionDB
					  .addItem(item)
					  .then(() => {
							dispatch('loadList')
					  })
					  .catch((error) => {
							commit('setError', error)
					  })
					  .finally(() => {
							commit('setLoading', false)
					  })
			},
			deleteItem({ commit, dispatch }, itemId) {
				 commit('setError', null)
				 commit('setLoading', true)
 
				 collectionDB
					  .deleteItem(itemId)
					  .then(() => {
							dispatch('loadList')
					  })
					  .catch((error) => {
							commit('setError', error)
					  })
					  .finally(() => {
							commit('setLoading', false)
					  })
			},
			updateItem({ commit, dispatch }, { itemId, data }) {
				 commit('setError', null)
				 commit('setLoading', true)
 
				 collectionDB
					  .updateItem(itemId, data)
					  .then(() => {
							dispatch('loadList')
					  })
					  .catch((error) => {
							commit('setError', error)
					  })
					  .finally(() => {
							commit('setLoading', false)
					  })
			},
			loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
				 commit('setError', null)
				 commit('setLoading', true)
				 collectionDB
					  .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
					  .then((list) => {
							commit('setItemsList', list)
					  })
					  .catch((error) => {
							commit('setError', error)
					  })
					  .finally(() => {
							commit('setLoading', false)
					  })
			},
	  },
 }
 