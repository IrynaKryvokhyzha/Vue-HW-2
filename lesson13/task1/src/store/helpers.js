export function getModuleTemplate(moduleName, itemsList){
	return {
			namespaced:true,
			state: {
				[moduleName]: itemsList
			},
			getters: {
				getItemById:(state)=>(itemId)=>state[moduleName].find((item)=>item.id===itemId),
				getItemsList:(state)=>state[moduleName],
			},
			mutations: {},
			actions: {},
			modules: {},
		 
	}
}
	
	
