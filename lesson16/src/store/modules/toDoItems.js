import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('toDoItems')
export default {
	namespaced: true,
   state: () => ({
      todoList: [],
      loading: false,
      error: null,
   }),
   getters: {
      isLoading: (state) => state.loading,
      hasError: (state) => state.error,

      getItemsList: (state) => state.todoList,
      getItemById: (state) => (itemId) => state.todoList.find((item) => item.id == itemId),
   },
   mutations: {
      setItemsList(state, itemsList) {
         state.todoList = itemsList
      },
		deleteItem(state, itemId){
			state.todoList= state.todoList.filter(item=>item.id !== itemId)
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
      // deleteItem({ commit, dispatch }, itemId) {
			deleteItem({ commit }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
               .deleteItem(itemId)
               .then(() => {
						commit('deleteItem', itemId)
                  // dispatch('loadList')
						// use dispatch to see real data sent from backend,because data can be changed in not your way, it works slower
						// in other ways use deleteItem, it works faster, but can show error if data is changed not properly at backend
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


