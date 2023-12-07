export default ({
   namespaced:true,
   state: {
		teachers : [
			{ id: 1, name: 'Mrs. McLeane', subjectId: 7},
			{ id: 2, name: 'Miss Caraway', subjectId: 1},
			{ id: 3, name: 'Mrs. Crawford', subjectId: 5 },
			{ id: 4, name: 'Mrs. Schauer', subjectId: 9},
			{ id: 5, name: 'Mr. Baker', subjectId: 4 },
			{ id: 6, name: 'Mrs. Bayer', subjectId: 10 },
			{ id: 7, name: 'Mr. Steave', subjectId: 1},
			{ id: 8, name: 'Mr. MtGomery', subjectId: 3},
			{ id: 9, name: 'Mr. McAlister', subjectId: 8},
			{ id: 10, name: 'Mrs. Pensky', subjectId: 6 },
			{ id: 11, name: 'Miss. Rivera', subjectId: 7},
			{ id: 12, name: 'Miss Gonzales', subjectId: 2 },
			{ id: 13, name: 'Mr. Bulman', subjectId: 5},
			{ id: 14, name: 'Mr. Ridley', subjectId: 9},
			{ id: 15, name: 'Mrs. Evans', subjectId: 4},
			{ id: 16, name: 'Mr. Larson', subjectId: 2 },
			{ id: 17, name: 'Mr. Kelile', subjectId: 10 },
			{ id: 18, name: 'Mrs. Dust', subjectId: 3 },
	  ]
	},
   getters: {
		getTeacherById:(state)=>(teacherId)=>state.teachers.find((item)=>item.id===teacherId),
		getTeachersList:(state)=>state.teachers,
		getTeachersBySubjectId:(state)=>(subjectId)=>state.teachers.filter((teacher)=>teacher.subjectId===subjectId)
	},
   mutations: {},
   actions: {},
   modules: {},
 });
