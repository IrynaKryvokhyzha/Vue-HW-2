export default ({
	namespaced:true,
	state: {
		workersList:[
			{
				id:1,
				name:'Johnny Depp',
			},
			{
				id:2,
				name:'Angelina Jolie',
			},
			{
				id:3,
				name:'George Clooney',
			}
		]
	},
	getters: {
		getWorkersList:({workersList})=>workersList,
		getWorkerById:(state)=>(workerId)=>state.workersList.find(worker=>worker.id==workerId)
	},
	mutations: {
		removeWorker(state, workerId){
			state.workersList=state.workersList.filter(worker=>worker.id!==workerId)
		},
		addWorker(state, worker){
			state.workersList.push(worker)
		},
		updateWorker(state, workerObj){
			const workerIndex=state.workersList.findIndex(worker=>worker.id===workerObj.id)
			state.workersList[workerIndex]=workerObj
		}
	},
	actions: {
		removeWorker({commit, dispatch}, workerId){
			commit('removeWorker', workerId)
			dispatch('interviews/removeInterviewByWorkerId', workerId,
			{root:true})
		},
		addWorker({commit}, worker){
			commit('addWorker',{
				id: new Date().getTime(),
				...worker
			})
		},
		updateWorker({commit},worker){
			commit('updateWorker', worker)
		}
	},
	modules: {},
 });