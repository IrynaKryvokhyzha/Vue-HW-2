export default ({
   namespaced:true,
   state: {
		subjects : [
			{ id: 1, title: 'Math' },
			{ id: 2, title: 'English'},
			{ id: 3, title: 'Science'},
			{ id: 4, title: 'Social Studies'},
			{ id: 5, title: 'Word Building'}, 
			{ id: 6, title: 'Stem' },
			{ id: 7, title: "Physical Education" },
		],
	},
   getters: {
		getSubjectById:(state)=>(subjectId)=>state.subjects.find((item)=>item.id===subjectId),
		getSubjectList:(state)=>state.subjects

	},
   mutations: {},
   actions: {},
   modules: {},
 });
