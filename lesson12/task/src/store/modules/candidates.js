// export default ({
// 	namespaced:true,
// 	state: {
// 		candidatesList:[
// 			{
// 				id:1,
// 				name:'Jenna Ortega',
// 			},
// 			{
// 				id:2,
// 				name:'Austin Butler',
// 			},
// 			{
// 				id:3,
// 				name:'Tom Holland',
// 			}
// 		]
// 	},
// 	getters: {
// 		getCandidatesList:({candidatesList})=>candidatesList,
// 		getCandidateById:(state)=>(candidateId)=>state.candidatesList.find(candidate=>candidate.id==candidateId)
// 	},
// 	mutations: {
// 		removeCandidate(state, candidateId){
// 			state.candidatesList=state.candidatesList.filter(candidate=>candidate.id!==candidateId)
// 		},
// 		addCandidate(state, candidate){
// 			state.candidatesList.push(candidate)
// 		},
// 		updateCandidate(state, candidateObj){
// 			const candidateIndex= state.candidatesList.findIndex(candidate=>candidate.id===candidateObj.id)
// 			state.candidatesList[candidateIndex]=candidateObj
// 		}
// 	},
// 	actions: {
// 		removeCandidate({commit, dispatch},candidateId){
// 			commit('removeCandidate', candidateId)
// 			dispatch('interviews/removeInterviewByCandidateId',candidateId,
// 			{root:true})

// 		},
// 		addCandidate({commit}, candidate){
// 			commit('addCandidate', {
// 				id: new Date().getTime(),
// 				...candidate,
// 			})
// 		},
// 		updateCandidate({commit},candidate){
// 			commit('updateCandidate',candidate)
// 		}
// 	},
// 	modules: {},
//  });
 
import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('candidates')
export default {
    namespaced: true,
    state: () => ({
		candidatesList: [],
        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getCandidatesList: (state) => state.candidatesList,
        getCandidatesId: (state) => (itemId) => state.candidatesList.find(item => item.id == itemId),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.candidatesList = itemsList
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadCandidatesList({ commit }) {
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
                    dispatch('loadCandidatesList')
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
                    dispatch('loadCandidatesList')
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
